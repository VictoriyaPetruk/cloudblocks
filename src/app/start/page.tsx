"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";

interface Question {
    id: string;
    question: string;
    icon: string;
    options: string[];
    formKey: string;
}

const questions: Question[] = [
    {
        id: "role",
        question: "What best describes your role?",
        icon: "🎯",
        options: [
            "Developer / DevOps Engineer",
            "CTO / Tech Lead",
            "Startup Founder / Indie Hacker",
            "Product Manager",
            "Other",
        ],
        formKey: "entry.491466501",
    },
    {
        id: "comfort",
        question: "How comfortable are you with cloud setup & deployments?",
        icon: "☁️",
        options: [
            "I do it myself regularly",
            "I use templates or managed solutions",
            "I usually ask someone else",
            "Not sure yet",
        ],
        formKey: "entry.1003123170",
    },
    {
        id: "provider",
        question: "Which cloud provider(s) do you use or plan to use?",
        icon: "🌐",
        options: ["AWS", "Google Cloud", "Azure", "Other / Not decided yet"],
        formKey: "entry.91390904",
    },
    {
        id: "deployment",
        question: "How do you currently handle your app's cloud deployment?",
        icon: "🎨",
        options: [
            "I set it up manually",
            "Using IaC (Terraform, Pulumi, etc.)",
            "With help from a DevOps engineer",
            "Haven't deployed yet",
            "Not sure",
        ],
        formKey: "entry.1505330660",
    },
    {
        id: "challenge",
        question: "What is your biggest challenge when deploying to the cloud?",
        icon: "💬",
        options: [
            "Complexity and setup time",
            "Cost optimization",
            "Choosing the right services",
            "Understanding best practices",
            "Scaling and monitoring",
        ],
        formKey: "entry.308417539",
    },
    {
        id: "time",
        question:
            "How much time do you currently spend on cloud setup per project?",
        icon: "✨",
        options: ["Less than 1 day", "1–3 days", "4–7 days", "More than a week"],
        formKey: "entry.680943283",
    },
];

const emailFormKey = "entry.1054867110";
const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSe-AwntW1IBkd4J4bcaW3AWZHnPbGj3VpefQ-MF2OxsCSDDGA/formResponse"

export default function StartPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    useEffect(() => {
        // Initialize EmailJS
        emailjs.init("4SYMi98c8zlBSQXnp");
    }, []);

    const handleAnswer = (answer: string) => {
        const questionId = questions[currentStep].id;
        setAnswers({...answers, [questionId]: answer});

        // Auto-advance to next step after a short delay
        setTimeout(() => {
            if (currentStep < questions.length - 1) {
                setCurrentStep(currentStep + 1);
            }
        }, 300);
    };

    const handleBack = () => {
        const isLastQuestionStep = currentStep === questions.length - 1;
        const lastQuestionId = questions[questions.length - 1].id;
        const lastAnswer = answers[lastQuestionId];
        const isOnEmailStep = isLastQuestionStep && lastAnswer;

        if (isOnEmailStep) {
            // If on email step, go back to last question
            const newAnswers = {...answers};
            delete newAnswers[lastQuestionId];
            setAnswers(newAnswers);
        } else if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Build URL-encoded form data for Google Form submission
            const params = new URLSearchParams();
            // Append each answered question using its formKey
            questions.forEach((q) => {
                const value = answers[q.id];
                if (value) {
                    params.append(q.formKey, value);
                }
            });
            // Append email field
            if (email) {
                params.append(emailFormKey, email);
            }

            // Submit to Google Form using GET with query params
            try {
                const query = params.toString();
                const url = query ? `${formURL}?${query}` : formURL;
                await fetch(url, {
                    method: "GET",
                    mode: "no-cors",
                });
            } catch (formError) {
                // Even if the form request fails locally, proceed with email sending
                console.warn("Form submission warning:", formError);
            }

            // Format answers for email
            const answersText = Object.entries(answers)
                .map(([key, value]) => {
                    const question = questions.find((q) => q.id === key);
                    return `${question?.question}\n${value}`;
                })
                .join("\n\n");

            // Send email with answers
            await emailjs.send("service_6pgksdi", "template_ld3y9nd", {
                user_email: email,
                answers: answersText,
            });

            // Send confirmation email
            await emailjs.send("service_6pgksdi", "template_l21ckqw", {
                user_email: email,
            });

            setShowThankYou(true);
        } catch (error) {
            alert("Oops, something went wrong. Try again!");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Calculate progress variables
    const isLastQuestion = currentStep === questions.length - 1;
    const currentQuestion = questions[currentStep];
    const currentAnswer = answers[currentQuestion.id];
    const isEmailStep = isLastQuestion && currentAnswer;

    const totalSteps = questions.length + 1; // Questions + email step
    const currentProgressStep = isEmailStep
        ? questions.length + 1 // Show as final step when on email form
        : currentStep + 1;
    const progress = (currentProgressStep / totalSteps) * 100;

    if (showThankYou) {
        return (
            <div className='min-h-screen bg-white flex items-center justify-center'>
                <div className='text-center max-w-md px-6'>
                    <div className='mb-8'>
                        <Image
                            src='/img/logo.png'
                            alt='Cloud Blocks logo'
                            width={72}
                            height={72}
                            className='mx-auto rounded-md'
                        />
                    </div>
                    <h1 className='text-4xl font-bold text-gray-900 mb-4 leading-tight'>
                        Thank you!
                    </h1>
                    <p className='text-base text-gray-600 mb-8'>
                        We'll be in touch soon with your personalized cloud solution.
                    </p>
                    <Link
                        href='/'
                        className='inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-200 shadow-sm hover:shadow-md'
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-white flex flex-col'>
            {/* Progress Bar */}
            <div className='fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50'>
                <div
                    className='h-full bg-orange-500 transition-all duration-300'
                    style={{
                        width: `${isEmailStep ? 100 : progress}%`,
                    }}
                />
            </div>

            {/* Header with Logo */}
            <header className='relative z-30'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
                    <div className='flex items-center justify-center py-5'>
                        <div className='flex items-center gap-3 font-semibold text-lg text-gray-700'>
                            <Image
                                src='/img/logo.png'
                                alt='Cloud Blocks logo'
                                width={28}
                                height={28}
                                className='rounded-md'
                            />
                            <span>Cloud Blocks</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className='flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-5'>
                {!isEmailStep ? (
                    <div className='text-center w-full'>
                        <h1 className='text-3xl font-bold mb-4'>
                            {currentQuestion.icon} {currentQuestion.question}
                        </h1>

                        <div className='space-y-2 max-w-lg mx-auto mb-6'>
                            {currentQuestion.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(option)}
                                    className={`w-full p-3 rounded-xl border text-left transition-all duration-300 ${
                                        currentAnswer === option
                                            ? "border-orange-500 bg-orange-50 text-gray-900 shadow-sm"
                                            : "border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50/50 text-gray-700 hover:shadow-sm"
                                    }`}
                                >
                                    <span className='font-medium text-sm'>{option}</span>
                                </button>
                            ))}
                        </div>

                        {/* Navigation */}
                        <div className='flex justify-between items-center px-4 mt-10'>
                            <button
                                onClick={handleBack}
                                disabled={currentStep === 0}
                                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                                    currentStep === 0
                                        ? "text-gray-300 cursor-not-allowed bg-gray-50 border-gray-200"
                                        : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 cursor-pointer"
                                }`}
                            >
                                <svg
                                    width='16'
                                    height='16'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <path d='M19 12H5M12 19l-7-7 7-7'/>
                                </svg>
                                Back
                            </button>

                            <div className='flex-1'></div>
                        </div>
                    </div>
                ) : (
                    <div className='text-center w-full'>
                        <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight'>
                            Almost done!
                        </h1>
                        <p className='text-sm text-gray-600 mb-6'>
                            Leave your email to receive personalized cloud solution
                            recommendations.
                        </p>

                        <form
                            onSubmit={handleEmailSubmit}
                            className='space-y-4 max-w-lg mx-auto'
                        >
                            <div>
                                <input
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter your email'
                                    required
                                    className='w-full px-4 py-2.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all duration-200 bg-white text-sm'
                                />
                            </div>

                            <div className='flex justify-between items-center px-4'>
                                <button
                                    type='button'
                                    onClick={handleBack}
                                    className='flex items-center gap-1.5 px-4 py-2 rounded-lg text-gray-600 text-sm font-medium border border-gray-300 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 cursor-pointer'
                                >
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    >
                                        <path d='M19 12H5M12 19l-7-7 7-7'/>
                                    </svg>
                                    Back
                                </button>

                                <button
                                    type='submit'
                                    disabled={isSubmitting || !email}
                                    className='flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md'
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                    {!isSubmitting && (
                                        <svg
                                            width='16'
                                            height='16'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        >
                                            <path d='M5 12h14M12 5l7 7-7 7'/>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </main>
        </div>
    );
}
