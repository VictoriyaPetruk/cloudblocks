"use client";

import { FormEvent } from "react";

interface WaitlistModalProps {
  isOpen: boolean;
  waitlistEmail: string;
  setWaitlistEmail: (email: string) => void;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function WaitlistModal({
  isOpen,
  waitlistEmail,
  setWaitlistEmail,
  isSubmitting,
  onClose,
  onSubmit,
}: WaitlistModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4'
      onClick={onClose}
    >
      <div
        className='bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-gray-200/50'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M18 6L6 18M6 6l12 12' />
          </svg>
        </button>

        <h2 className='text-3xl font-bold text-black mb-3'>
          Join the Waitlist
        </h2>
        <p className='text-lg text-gray-600 mb-8'>
          Be the first to know when CloudBlocks launches!
        </p>

        <form onSubmit={onSubmit} className='space-y-5'>
          <div>
            <input
              type='email'
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              placeholder='Enter your email'
              required
              className='w-full px-4 py-3.5 rounded-full border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all duration-200 bg-white text-base'
            />
          </div>

          <div className='flex gap-3'>
            <button
              type='button'
              onClick={onClose}
              className='flex-1 px-6 py-3 rounded-full text-gray-600 text-base font-semibold bg-gray-100 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 border border-transparent'
            >
              Cancel
            </button>

            <button
              type='submit'
              disabled={isSubmitting || !waitlistEmail}
              className='flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white text-base font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md'
            >
              {isSubmitting ? "Submitting..." : "Join Waitlist"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

