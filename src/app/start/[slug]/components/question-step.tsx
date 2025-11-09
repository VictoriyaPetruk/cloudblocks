"use client";

import { Question } from "../types";

interface QuestionStepProps {
  question: Question;
  currentAnswer: string | string[] | null;
  otherInputs: Record<string, string>;
  currentStep: number;
  canContinue: boolean;
  onAnswer: (answer: string) => void;
  onOtherInputChange: (questionId: string, value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function QuestionStep({
  question,
  currentAnswer,
  otherInputs,
  currentStep,
  canContinue,
  onAnswer,
  onOtherInputChange,
  onBack,
  onContinue,
}: QuestionStepProps) {
  return (
    <div className='text-center w-full max-w-4xl mx-auto relative z-10'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight'>
        {question.icon} {question.question}
      </h1>

      <div className='space-y-3 max-w-xl mx-auto mb-8'>
        {question.options.map((option, index) => {
          const isSelected = question.isMultiple
            ? Array.isArray(currentAnswer) && currentAnswer.includes(option)
            : currentAnswer === option;
          const showOtherInput =
            option === "Other" && question.hasOtherInput && isSelected;

          return (
            <div key={index}>
              <button
                type='button'
                onClick={() => onAnswer(option)}
                className={`w-full p-3 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-3 ${
                  isSelected
                    ? "border-orange-500 bg-orange-50 text-gray-900 shadow-md"
                    : "border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50/50 text-gray-700 hover:shadow-sm"
                }`}
              >
                {/* Checkbox/Radio indicator */}
                <div
                  className={`flex-shrink-0 w-4 h-4 ${
                    question.isMultiple ? "rounded" : "rounded-full"
                  } border-2 flex items-center justify-center ${
                    isSelected
                      ? "border-orange-500 bg-orange-500"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {isSelected && question.isMultiple && (
                    <svg
                      width='10'
                      height='10'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='white'
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M20 6L9 17l-5-5' />
                    </svg>
                  )}
                  {isSelected && !question.isMultiple && (
                    <div className='w-2 h-2 rounded-full bg-white' />
                  )}
                </div>
                <span className='font-semibold text-sm flex-1'>{option}</span>
              </button>

              {/* Other input field */}
              {showOtherInput && (
                <div className='mt-2 ml-8'>
                  <input
                    type='text'
                    value={otherInputs[question.id] || ""}
                    onChange={(e) => onOtherInputChange(question.id, e.target.value)}
                    placeholder='Please specify...'
                    className='w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all duration-200 bg-white text-base'
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className='flex justify-between items-center px-4 mt-10 max-w-2xl mx-auto'>
        {currentStep > 0 ? (
          <button
            onClick={onBack}
            className='flex items-center gap-2 px-6 py-3 rounded-full text-gray-700 text-base font-semibold bg-gray-100 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 border border-transparent'
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M19 12H5M12 19l-7-7 7-7' />
            </svg>
            Back
          </button>
        ) : (
          <div></div>
        )}

        <button
          onClick={onContinue}
          disabled={!canContinue}
          className='flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg'
        >
          Continue
          <svg
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M5 12h14M12 5l7 7-7 7' />
          </svg>
        </button>
      </div>
    </div>
  );
}

