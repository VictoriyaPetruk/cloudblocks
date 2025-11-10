"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

// Types and constants
import {
  questions,
  validSlugs,
  questionsForm,
  whitelistForm,
} from "./constants";
import { calculateProgress } from "./utils/progress-utils";
import { formatAnswersForEmail } from "./utils/email-utils";

// Hooks
import { useFormState } from "./hooks/use-form-state";
import { useVideoLoading } from "./hooks/use-video-loading";

// Components
import GridBackground from "./components/grid-background";
import ProgressBar from "./components/progress-bar";
import Header from "./components/header";
import NotFoundPage from "./components/not-found-page";
import ThankYouPage from "./components/thank-you-page";
import IntroStep from "./components/intro-step";
import QuestionStep from "./components/question-step";
import EmailStep from "./components/email-step";
import WaitlistModal from "./components/waitlist-modal";

export default function StartPage() {
  const params = useParams();
  const router = useRouter();
  const rawSlug = params?.slug as string;
  // Decode URL-encoded slug (handles %3D -> =, etc.)
  const slug = rawSlug ? decodeURIComponent(rawSlug) : "";

  // Check if slug is valid synchronously (available on first render)
  const isValidSlug = slug && validSlugs.includes(slug);

  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const {
    currentStep,
    answers,
    otherInputs,
    email,
    isSubmitting,
    showThankYou,
    showWaitlistModal,
    waitlistEmail,
    isWaitlistSubmitting,
    showEmailStep,
    setOtherInputs,
    setEmail,
    setIsSubmitting,
    setShowThankYou,
    setShowWaitlistModal,
    setWaitlistEmail,
    setIsWaitlistSubmitting,
    handleAnswer,
    canContinue,
    handleContinue,
    handleBack,
  } = useFormState(questions);

  const isVideoLoading = useVideoLoading(videoRef, currentStep, mounted);

  useEffect(() => {
    // Set mounted to true after component mounts on client
    setMounted(true);
  }, []);

  useEffect(() => {
    // Initialize EmailJS only if slug is valid
    if (isValidSlug) {
      emailjs.init("4SYMi98c8zlBSQXnp");
    }
  }, [isValidSlug]);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsWaitlistSubmitting(true);

    try {
      // Build URL-encoded form data for Google Form submission
      const params = new URLSearchParams();

      // Append email field
      if (waitlistEmail) {
        params.append(whitelistForm.formEmailKey, waitlistEmail);
      }

      // Append campaign field from current page slug (base64-decoded)
      if (slug) {
        let campaignValue = slug;
        try {
          const decoded = atob(slug);
          if (decoded) {
            campaignValue = decoded;
          }
        } catch {
          // if decoding fails, use original slug
        }
        params.append(whitelistForm.campainKey, campaignValue);
      }

      // Submit to Google Form using GET with query params
      try {
        const query = params.toString();
        const url = query ? `${whitelistForm.url}?${query}` : whitelistForm.url;
        await fetch(url, {
          method: "GET",
          mode: "no-cors",
        });
      } catch (formError) {
        // Even if the form request fails locally, proceed with email sending
        console.warn("Whitelist form submission warning:", formError);
      }

      // Send waitlist email using the same template as questionnaire
      await emailjs.send("service_6pgksdi", "template_ld3y9nd", {
        user_email: waitlistEmail,
        answers: "Joined waitlist from Web Summit page",
      });

      // Close modal and show success
      setShowWaitlistModal(false);
      setWaitlistEmail("");
      alert("Thank you for joining our waitlist! We'll be in touch soon.");
    } catch (error) {
      alert("Oops, something went wrong. Please try again!");
      console.error(error);
    } finally {
      setIsWaitlistSubmitting(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format answers for email
      const answersText = formatAnswersForEmail(
        answers,
        otherInputs,
        questions
      );

      // Build URL-encoded form data for Google Form submission
      const params = new URLSearchParams();

      // Helper to append a single answer value for a question
      const appendAnswer = (
        qKey: string,
        option: string,
        hasOtherInput?: boolean,
        otherText?: string
      ) => {
        if (option === "Other" && hasOtherInput) {
          // Always send the special other option marker for the main key
          params.append(qKey, questionsForm.formOtherOptionValue);

          // Send companion response with user's text or the literal "other"
          const text = (otherText ?? "").trim();
          const responseKey = `${qKey}${questionsForm.formOtherOptionResponseKeySuffix}`;
          params.append(responseKey, text.length > 0 ? text : "other");
        } else {
          params.append(qKey, option);
        }
      };

      // Append each answered question using its formKey
      questions.forEach((q) => {
        const ans = answers[q.id];
        if (!ans) return;

        if (Array.isArray(ans)) {
          // Multi-select: append each selected value under the same key
          ans.forEach((opt) => {
            const otherText = otherInputs[q.id];
            appendAnswer(q.formKey, opt, q.hasOtherInput, otherText);
          });
        } else {
          // Single select
          const otherText = otherInputs[q.id];
          appendAnswer(q.formKey, ans as string, q.hasOtherInput, otherText);
        }
      });

      // Append email field
      if (email) {
        params.append(questionsForm.formEmailKey, email);
      }

      // Append campaign field from current page slug (base64-decoded)
      if (slug) {
        let campaignValue = slug;
        try {
          const decoded = atob(slug);
          if (decoded) {
            campaignValue = decoded;
          }
        } catch {
          // if decoding fails, use original slug
        }
        params.append(questionsForm.campainKey, campaignValue);
      }

      // Submit to Google Form using GET with query params
      try {
        const query = params.toString();
        const url = query ? `${questionsForm.url}?${query}` : questionsForm.url;
        await fetch(url, {
          method: "GET",
          mode: "no-cors",
        });
      } catch (formError) {
        // Even if the form request fails locally, proceed with email sending
        console.warn("Form submission warning:", formError);
      }

      // Send email with answers
      // await emailjs.send("service_6pgksdi", "template_ld3y9nd", {
      //   user_email: email,
      //   answers: answersText,
      // });

      // Send confirmation email
      await emailjs.send("service_6pgksdi", "template_l21ckqw", {
        user_email: email,
      });

      // Navigate to video page after successful submission
      router.push("/video");
    } catch (error) {
      alert("Oops, something went wrong. Try again!");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show 404 if slug is invalid
  if (!isValidSlug) {
    return <NotFoundPage />;
  }

  // Calculate progress variables
  const isIntroStep = currentStep === -1;
  const isLastQuestion = currentStep === questions.length - 1;
  const currentQuestion = currentStep >= 0 ? questions[currentStep] : null;
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  const isEmailStep: boolean = Boolean(
    isLastQuestion && currentAnswer && showEmailStep
  );

  const progress = calculateProgress(
    currentStep,
    questions.length,
    isEmailStep
  );

  if (showThankYou) {
    return <ThankYouPage />;
  }

  return (
    <div
      className='min-h-screen flex flex-col bg-white relative'
      suppressHydrationWarning
    >
      {/* Grid Pattern Background */}
      <GridBackground mounted={mounted} />

      {/* Progress Bar - Only show from first question onwards */}
      {!isIntroStep && (
        <ProgressBar progress={progress} isEmailStep={isEmailStep} />
      )}

      {/* Header with Logo */}
      <Header mounted={mounted} />

      {/* Main Content */}
      <main
        className='flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-5 relative'
        suppressHydrationWarning
      >
        {isIntroStep ? (
          <IntroStep
            isVideoLoading={isVideoLoading}
            mounted={mounted}
            videoRef={videoRef}
            onContinue={handleContinue}
            onWaitlistClick={() => setShowWaitlistModal(true)}
          />
        ) : !isEmailStep ? (
          currentQuestion && (
            <QuestionStep
              question={currentQuestion}
              currentAnswer={currentAnswer}
              otherInputs={otherInputs}
              currentStep={currentStep}
              canContinue={canContinue()}
              onAnswer={(answer) => handleAnswer(answer, currentQuestion)}
              onOtherInputChange={(questionId, value) =>
                setOtherInputs({ ...otherInputs, [questionId]: value })
              }
              onBack={() => handleBack(false)}
              onContinue={handleContinue}
            />
          )
        ) : (
          <EmailStep
            email={email}
            setEmail={setEmail}
            isSubmitting={isSubmitting}
            onBack={() => handleBack(true)}
            onSubmit={handleEmailSubmit}
          />
        )}
      </main>

      {/* Waitlist Modal - Always accessible */}
      <WaitlistModal
        isOpen={showWaitlistModal}
        waitlistEmail={waitlistEmail}
        setWaitlistEmail={setWaitlistEmail}
        isSubmitting={isWaitlistSubmitting}
        onClose={() => {
          setShowWaitlistModal(false);
          setWaitlistEmail("");
        }}
        onSubmit={handleWaitlistSubmit}
      />
    </div>
  );
}
