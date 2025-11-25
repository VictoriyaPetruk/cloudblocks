"use client";

import { FormEvent } from "react";

interface EmailStepProps {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  onBack: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  slug?: string;
}

export default function EmailStep({
  email,
  setEmail,
  isSubmitting,
  onBack,
  onSubmit,
  slug,
}: EmailStepProps) {
  const isSpecialVariant = slug === "solution";

  return (
    <div className='text-center w-full max-w-4xl mx-auto relative z-10'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight text-center'>
        Almost done! 🎉
      </h1>
      <p className='text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto text-center'>
        {isSpecialVariant
          ? "Leave your email and we will create a cloud solution for you"
          : "Leave your email and we will notify you when product will be ready to use."}
      </p>

      <form onSubmit={onSubmit} className='space-y-6 max-w-2xl w-full mx-auto'>
        <div>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            required
            className='w-full px-6 py-4 rounded-full border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all duration-200 bg-white text-base'
          />
        </div>

        <div className='flex justify-center items-center gap-4 pt-4'>
          <button
            type='button'
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

          <button
            type='submit'
            disabled={isSubmitting || !email}
            className='flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg'
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                {isSpecialVariant ? "Get architecture" : "Go to demo"}
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
                  <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                  <polyline points='22 4 12 14.01 9 11.01' />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
