import { useState } from "react";
import { Question } from "../types";

export function useFormState(questions: Question[]) {
  const [currentStep, setCurrentStep] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [otherInputs, setOtherInputs] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [isWaitlistSubmitting, setIsWaitlistSubmitting] = useState(false);
  const [showEmailStep, setShowEmailStep] = useState(false);

  const handleAnswer = (answer: string, question: Question) => {
    const questionId = question.id;
    const currentAnswer = answers[questionId];

    if (question.isMultiple) {
      // Multi-select (checkboxes)
      const currentArray = Array.isArray(currentAnswer) ? currentAnswer : [];
      const isSelected = currentArray.includes(answer);

      if (isSelected) {
        // Remove from selection
        const newArray = currentArray.filter((a) => a !== answer);
        setAnswers({ ...answers, [questionId]: newArray });

        // Clear "Other" input if "Other" was deselected
        if (answer === "Other") {
          setOtherInputs({ ...otherInputs, [questionId]: "" });
        }
      } else {
        // Add to selection
        setAnswers({ ...answers, [questionId]: [...currentArray, answer] });
      }
    } else {
      // Single select (radio buttons)
      setAnswers({ ...answers, [questionId]: answer });

      // Clear "Other" input if a different option is selected
      if (answer !== "Other") {
        setOtherInputs({ ...otherInputs, [questionId]: "" });
      }
    }
  };

  const canContinue = (): boolean => {
    if (currentStep === -1) return true; // Intro step
    if (currentStep < 0 || currentStep >= questions.length) return false;

    const question = questions[currentStep];
    const questionId = question.id;
    const answer = answers[questionId];

    if (!answer) return false;

    // For single select, check if answer exists
    if (!question.isMultiple) {
      return Boolean(answer && answer !== "");
    }

    // For multi-select, check if at least one option is selected
    if (Array.isArray(answer)) {
      return answer.length > 0;
    }

    return false;
  };

  const handleContinue = () => {
    if (currentStep === -1) {
      // Move from intro step to first question
      setCurrentStep(0);
    } else if (currentStep < questions.length - 1) {
      // Move to next question
      setCurrentStep(currentStep + 1);
    } else if (currentStep === questions.length - 1) {
      // Move to email step from last question
      setShowEmailStep(true);
    }
  };

  const handleBack = (isEmailStep: boolean) => {
    // If on email step, go back to last question
    if (isEmailStep) {
      setShowEmailStep(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 0) {
      // Go back to intro step from first question
      setCurrentStep(-1);
    }
  };

  return {
    currentStep,
    setCurrentStep,
    answers,
    setAnswers,
    otherInputs,
    setOtherInputs,
    email,
    setEmail,
    isSubmitting,
    setIsSubmitting,
    showThankYou,
    setShowThankYou,
    showWaitlistModal,
    setShowWaitlistModal,
    waitlistEmail,
    setWaitlistEmail,
    isWaitlistSubmitting,
    setIsWaitlistSubmitting,
    showEmailStep,
    setShowEmailStep,
    handleAnswer,
    canContinue,
    handleContinue,
    handleBack,
  };
}

