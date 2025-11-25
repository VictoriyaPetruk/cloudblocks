"use client";

import { RefObject } from "react";

interface IntroStepProps {
  isVideoLoading: boolean;
  mounted: boolean;
  videoRef: RefObject<HTMLVideoElement | null>;
  onContinue: () => void;
  onWaitlistClick: () => void;
  slug?: string;
}

export default function IntroStep({
  isVideoLoading,
  mounted,
  videoRef,
  onContinue,
  onWaitlistClick,
  slug,
}: IntroStepProps) {
  const isVariantForPost = slug === "solution";

  return (
    <div
      className='text-center w-full max-w-4xl mx-auto relative z-10'
      suppressHydrationWarning
    >
      {!isVariantForPost && (
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight'>
          Great to see you at{" "}
          <span
            className='inline-block text-white px-4 py-2.5 rounded-lg text-4xl sm:text-5xl lg:text-6xl font-bold align-middle leading-tight'
            style={{
              background:
                "linear-gradient(to bottom, rgb(251, 146, 60), rgb(249, 115, 22))",
            }}
          >
            {slug === "demo" ? "Demo page" : "Web Summit!"}
          </span>
        </h1>
      )}

      <p className='text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed'>
        CloudBlocks is your{" "}
        <span className='text-orange-600 font-bold'>AI Cloud Architect</span>.
        We turn your ideas into{" "}
        <span className='text-orange-600 font-bold'>
          production-ready cloud infrastructure
        </span>
        . No painful Terraform. No DevOps team needed.
      </p>

      {/* Video */}
      <div className='mb-12 flex justify-center'>
        <div
          className='relative rounded-lg shadow-lg bg-gray-100'
          style={{
            width: "100%",
            maxWidth: "300px",
            aspectRatio: "16/9",
            minHeight: "281px",
          }}
        >
          {mounted ? (
            <>
              {/* Loading Placeholder */}
              {isVideoLoading && (
                <div className='absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg'>
                  <div className='flex flex-col items-center gap-3'>
                    <div className='w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin'></div>
                    <p className='text-sm text-gray-600'>Loading video...</p>
                  </div>
                </div>
              )}

              {/* Video Element */}
              <video
                ref={videoRef}
                src='/video.mp4'
                autoPlay
                loop
                muted
                playsInline
                preload='auto'
                className='w-full h-full rounded-lg object-cover'
                style={{
                  opacity: isVideoLoading ? 0 : 1,
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                Your browser does not support the video tag.
              </video>
            </>
          ) : (
            // Placeholder during SSR to prevent layout shift
            <div className='absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg'>
              <div className='flex flex-col items-center gap-3'>
                <div className='w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full'></div>
                <p className='text-sm text-gray-400'>Loading...</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Feature Points */}
      <div className='space-y-5 mb-12 max-w-2xl mx-auto text-left'>
        <div className='flex items-start gap-4'>
          {/* Green Checkmark Icon */}
          <div className='flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#10b981'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M20 6L9 17l-5-5' />
            </svg>
          </div>
          <p className='text-gray-700 text-lg leading-relaxed'>
            <strong className='font-bold text-gray-900'>Describe:</strong>{" "}
            Simply tell our AI what you need to build (or connect your existing
            project).
          </p>
        </div>

        <div className='flex items-start gap-4'>
          {/* Green Checkmark Icon */}
          <div className='flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#10b981'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M20 6L9 17l-5-5' />
            </svg>
          </div>
          <p className='text-gray-700 text-lg leading-relaxed'>
            <strong className='font-bold text-gray-900'>Compare:</strong>{" "}
            Instantly get{" "}
            <strong className='font-bold text-gray-900'>
              architecture diagrams and cost comparisons
            </strong>{" "}
            for AWS, GCP, and Azure.
          </p>
        </div>

        <div className='flex items-start gap-4'>
          {/* Green Checkmark Icon */}
          <div className='flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#10b981'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M20 6L9 17l-5-5' />
            </svg>
          </div>
          <p className='text-gray-700 text-lg leading-relaxed'>
            <strong className='font-bold text-gray-900'>Deploy:</strong> Push
            one button to{" "}
            <strong className='font-bold text-gray-900'>
              deploy the perfect stack
            </strong>{" "}
            to your own cloud account.
          </p>
        </div>
      </div>

      {/* Continue Button */}
      <div className='flex flex-col items-center gap-4'>
        <button
          type='button'
          onClick={onContinue}
          className='inline-flex items-center gap-4 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg border-0 cursor-pointer'
          style={{
            background:
              "linear-gradient(to bottom, rgb(251, 146, 60), rgb(249, 115, 22))",
            color: "rgb(255, 255, 255)",
          }}
          onMouseEnter={(e) => {
            const btn = e.currentTarget;
            btn.style.background =
              "linear-gradient(to bottom, rgb(249, 115, 22), rgb(234, 88, 12))";
          }}
          onMouseLeave={(e) => {
            const btn = e.currentTarget;
            btn.style.background =
              "linear-gradient(to bottom, rgb(251, 146, 60), rgb(249, 115, 22))";
          }}
        >
          {/* Play Icon */}
          {!isVariantForPost && (
            <div
              className='w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0'
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='rgb(255, 255, 255)'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                style={{ marginLeft: "2px" }}
              >
                <polygon points='5 3 19 12 5 21 5 3' />
              </svg>
            </div>
          )}
          <span
            style={{
              color: "rgb(255, 255, 255)",
              fontWeight: 600,
              display: "inline-block",
            }}
          >
            GET YOUR CLOUD ARCHITECTURE
          </span>
        </button>

        {/* Additional Buttons */}
        <div className='flex flex-col sm:flex-row gap-3 items-center'>
          {!isVariantForPost && (
            <button
              onClick={onWaitlistClick}
              className='inline-flex items-center gap-2 bg-white text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-full text-base font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-200 shadow-sm hover:shadow-md hover:cursor-pointer'
            >
              Join the waitlist
            </button>
          )}

          <a
            href='https://www.instagram.com/cloud.blocks'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-white text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-full text-base font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-200 shadow-sm hover:shadow-md'
          >
            Subscribe to Instagram
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
              <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
