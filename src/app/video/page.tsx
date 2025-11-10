"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import GridBackground from "../start/[slug]/components/grid-background";
import Header from "../start/[slug]/components/header";

export default function VideoPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className='min-h-screen flex flex-col bg-white relative'
      suppressHydrationWarning
    >
      {/* Grid Pattern Background */}
      <GridBackground mounted={mounted} />

      {/* Header with Logo */}
      <Header mounted={mounted} />

      {/* Main Content */}
      <main
        className='flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-5 relative'
        suppressHydrationWarning
      >
        <div className='text-center w-full mx-auto relative z-10'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight text-center'>
            Watch our Demo Video 🎥
          </h1>
          <p className='text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto text-center'>
            Learn how CloudBlocks can help you build production-ready cloud
            infrastructure with ease.
          </p>

          {/* Loom Video Embed */}
          <div
            className='mb-10 w-full mx-auto'
            style={{
              paddingBottom: "56.25%",
              position: "relative",
              height: 0,
              overflow: "hidden",
              borderRadius: "14px",
              boxShadow:
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              backgroundColor: "#000",
              maxWidth: "100%",
            }}
          >
            <iframe
              src='https://www.loom.com/embed/72de51a4d75540ff93aa20e7782b73cf'
              frameBorder='0'
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "14px",
              }}
              title='CloudBlocks Demo Video'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            />
          </div>
          {/* Back Button */}
          <div className='flex justify-center items-center pt-4'>
            <Link
              href='/'
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
              Back to main website
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
