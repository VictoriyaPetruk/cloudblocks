"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("4SYMi98c8zlBSQXnp");
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send welcome email
      await emailjs.send("service_6pgksdi", "template_ld3y9nd", {
        user_email: email,
      });

      // Send confirmation email
      await emailjs.send("service_6pgksdi", "template_l21ckqw", {
        user_email: email,
      });

      alert("Thanks! We'll be in touch.");
      setEmail("");
    } catch (error) {
      alert("Oops, something went wrong. Try again!");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='sticky top-0 z-40 backdrop-blur-lg bg-white/95 border-b border-slate-200/60'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <nav className='flex items-center justify-between py-4'>
            <Link
              href='#'
              className='flex items-center gap-3 font-bold text-xl'
            >
              <Image
                src='/img/logo.png'
                alt='Cloud Blocks logo'
                width={28}
                height={28}
                className='rounded-md'
              />
              <span>Cloud Blocks</span>
            </Link>

            <div className='hidden md:flex items-center gap-6'>
              <div className='flex gap-6'>
                <Link
                  href='#features'
                  className='text-gray-700 hover:text-gray-900 font-medium'
                >
                  Features
                </Link>
                <Link
                  href='#certs'
                  className='text-gray-700 hover:text-gray-900 font-medium'
                >
                  Cloud Providers
                </Link>
                <Link
                  href='#architect'
                  className='text-gray-700 hover:text-gray-900 font-medium'
                >
                  Solution Architect
                </Link>
                <Link
                  href='#pricing'
                  className='text-gray-700 hover:text-gray-900 font-medium'
                >
                  Pricing
                </Link>
              </div>
              <Link
                href='#demo'
                className='bg-white text-gray-900 border border-gray-200 px-4 py-2 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all'
              >
                Request a demo
              </Link>
            </div>

            <button
              className='md:hidden bg-white border border-gray-200 rounded-xl p-2'
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              aria-label='Open menu'
            >
              <svg
                width='22'
                height='22'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className='md:hidden fixed inset-0 z-50 bg-white'>
          <div className='p-4 border-b border-gray-200 flex items-center justify-between'>
            <strong>Menu</strong>
            <button
              className='bg-white border border-gray-200 rounded-xl px-4 py-2'
              onClick={() => setShowMobileMenu(false)}
            >
              Close
            </button>
          </div>
          <div className='p-4 space-y-4'>
            <Link
              href='#features'
              className='block text-gray-700 hover:text-gray-900'
              onClick={() => setShowMobileMenu(false)}
            >
              Features
            </Link>
            <Link
              href='#certs'
              className='block text-gray-700 hover:text-gray-900'
              onClick={() => setShowMobileMenu(false)}
            >
              Cloud Providers
            </Link>
            <Link
              href='#architect'
              className='block text-gray-700 hover:text-gray-900'
              onClick={() => setShowMobileMenu(false)}
            >
              Solution Architect
            </Link>
            <Link
              href='#pricing'
              className='block text-gray-700 hover:text-gray-900'
              onClick={() => setShowMobileMenu(false)}
            >
              Pricing
            </Link>
            <Link
              href='#demo'
              className='inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors'
              onClick={() => setShowMobileMenu(false)}
            >
              Request a demo
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 lg:py-24'>
            <div>
              <div className='text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2'>
                The first vibe clouding tool
              </div>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6'>
                Cloud Blocks
              </h1>
              <p className='text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed'>
                Create real cloud environments instantly. Use Cloud Architect AI
                Agent to spin up solutions, experiment safely, and architect
                like a pro.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  href='#demo'
                  className='inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl'
                >
                  <span>Become early adopter</span>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7' />
                  </svg>
                </Link>
                <Link
                  href='#features'
                  className='inline-flex items-center bg-white text-gray-900 border border-gray-200 px-6 py-4 rounded-xl font-semibold hover:shadow-md transition-all'
                >
                  Explore features
                </Link>
              </div>
            </div>

            <div className='relative'>
              <div className='aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 shadow-xl'>
                <Image
                  src='/img/chat3.png'
                  alt='Cloud Blocks real environment preview'
                  width={600}
                  height={450}
                  className='w-full h-full object-contain'
                />
              </div>
            </div>
          </div>

          {/* Ribbon */}
          <div className='mt-8'>
            <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-lg'>
              <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                <p className='text-gray-700'>
                  <strong className='text-orange-500'>Cloud Blocks</strong> is
                  your DevOps CoPilot that allows you to build cloud solutions
                  effectively.
                </p>
                <Link
                  href='#features'
                  className='text-orange-500 font-semibold hover:text-orange-600 transition-colors'
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-16 lg:py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-lg flex items-start gap-4'>
              <div className='w-9 h-9 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl flex items-center justify-center flex-shrink-0'>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#111827'
                  strokeWidth='2'
                >
                  <path d='M4 6h16M4 12h10M4 18h7' />
                </svg>
              </div>
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Auto-generated diagram
                </h4>
                <p className='text-gray-600'>
                  Get explainable diagram of each service that you need.
                </p>
              </div>
            </div>

            <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-lg flex items-start gap-4'>
              <div className='w-9 h-9 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl flex items-center justify-center flex-shrink-0'>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#111827'
                  strokeWidth='2'
                >
                  <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
                  <path d='M7 10l5-5 5 5' />
                </svg>
              </div>
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Cloud agnostic
                </h4>
                <p className='text-gray-600'>
                  Choose from variety of clouds where you want to proceed.
                </p>
              </div>
            </div>

            <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-lg flex items-start gap-4'>
              <div className='w-9 h-9 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl flex items-center justify-center flex-shrink-0'>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#111827'
                  strokeWidth='2'
                >
                  <path d='M8 21h8M12 17V3' />
                </svg>
              </div>
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Terraform generation
                </h4>
                <p className='text-gray-600'>
                  Get generated Terraform scripts for your easily deployment.
                </p>
              </div>
            </div>

            <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-lg flex items-start gap-4'>
              <div className='w-9 h-9 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl flex items-center justify-center flex-shrink-0'>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#111827'
                  strokeWidth='2'
                >
                  <path d='M20 6L9 17l-5-5' />
                </svg>
              </div>
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Build for your needs
                </h4>
                <p className='text-gray-600'>
                  Connect your account or use solution instantly on our servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id='certs' className='py-16 lg:py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            Supported clouds
          </h2>
          <p className='text-gray-600 text-lg mb-8'>
            AWS, Azure, GCP, and more.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-lg text-center'>
              <Image
                src='/img/aws-icon.png'
                alt='AWS'
                width={100}
                height={100}
                className='mx-auto'
              />
            </div>
            <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-lg text-center'>
              <Image
                src='/img/azure.png'
                alt='Azure'
                width={100}
                height={100}
                className='mx-auto'
              />
            </div>
            <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-lg text-center'>
              <Image
                src='/img/gcp.png'
                alt='GCP'
                width={100}
                height={100}
                className='mx-auto'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Architect Section */}
      <section id='architect' className='py-16 lg:py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            Build like a Pro Solution Architect
          </h2>
          <p className='text-gray-600 text-lg mb-8 max-w-4xl'>
            Describe what you need to build → get fully diagram for different
            cloud environments → observe prices → deploy into your cloud
            account.
          </p>

          <div className='bg-white border-2 border-dashed border-gray-300 rounded-2xl p-6 shadow-lg'>
            <div
              className='relative w-full'
              style={{ paddingBottom: "49.21875%" }}
            >
              <iframe
                src='https://www.loom.com/embed/43e5400108dd4189b74018675ea439eb?sid=20bc81e4-0844-442c-9cd6-ed3965a53381'
                frameBorder='0'
                allowFullScreen
                className='absolute top-0 left-0 w-full h-full rounded-xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* UCU Section */}
      <section className='py-16 lg:py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center'>
            Taking part in IdeasLab Accelerator & UCU Startup School.
          </h2>
          <div className='max-w-md mx-auto'>
            <div className='bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg'>
              <Image
                src='/img/ucu.png'
                alt='UCU Startup School'
                width={400}
                height={300}
                className='w-full h-auto'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='py-16 lg:py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center'>
            Choose your flexible plan.
          </h2>

          <div className='flex justify-center'>
            <div className='bg-white border border-gray-200 rounded-2xl p-8 shadow-lg max-w-md w-full'>
              <div className='flex items-center gap-3 text-gray-600 mb-4'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#f97316'
                  strokeWidth='2'
                >
                  <path d='M12 20V10' />
                  <path d='M18 20V4' />
                  <path d='M6 20v-6' />
                </svg>
                <span>Be our early adopter</span>
              </div>

              <h3 className='text-xl font-semibold text-gray-900 mb-6'>
                Get features as we roll them out
              </h3>

              <div className='space-y-4 mb-6'>
                <div className='flex items-start gap-3'>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#10b981'
                    strokeWidth='2'
                    className='mt-0.5'
                  >
                    <path d='M20 6L9 17l-5-5' />
                  </svg>
                  <span className='text-gray-700'>
                    Free micro version first
                  </span>
                </div>
                <div className='flex items-start gap-3'>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#10b981'
                    strokeWidth='2'
                    className='mt-0.5'
                  >
                    <path d='M20 6L9 17l-5-5' />
                  </svg>
                  <span className='text-gray-700'>
                    Early access to lab version
                  </span>
                </div>
                <div className='flex items-start gap-3'>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#10b981'
                    strokeWidth='2'
                    className='mt-0.5'
                  >
                    <path d='M20 6L9 17l-5-5' />
                  </svg>
                  <span className='text-gray-700'>
                    Feature voting & feedback loop
                  </span>
                </div>
              </div>

              <div className='text-3xl font-bold text-gray-900 mb-2'>$0</div>
              <p className='text-gray-600 mb-6'>
                Join now and help us shape the product.
              </p>

              <Link
                href='#demo'
                className='inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors w-full justify-center'
              >
                Get in →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        id='demo'
        className='relative py-16 lg:py-24 bg-gradient-to-br from-orange-400 to-orange-600 text-white overflow-hidden'
      >
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-4'>
            Leave your email for future updates
          </h2>
          <p className='text-orange-100 mb-8'>
            Try demo for 7 days with full features.
          </p>

          <form
            onSubmit={handleEmailSubmit}
            className='flex flex-col sm:flex-row gap-4 max-w-md'
          >
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='email'
              required
              className='flex-1 px-4 py-3 rounded-xl border-0 text-gray-900 placeholder-gray-500'
            />
            <button
              type='submit'
              disabled={isSubmitting}
              className='bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors disabled:opacity-50'
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-white py-16'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div>
              <Link
                href='#'
                className='flex items-center gap-3 font-bold text-xl mb-4'
              >
                <Image
                  src='/img/logo.png'
                  alt='Cloud Blocks logo'
                  width={28}
                  height={28}
                  className='rounded-md'
                />
                <span>Cloud Blocks</span>
              </Link>
              <p className='text-gray-600 max-w-sm'>
                Now taking part in <strong>IdeasLab UCU</strong> Accelerator.
              </p>
            </div>

            <div>
              <h5 className='font-bold text-gray-900 mb-6 text-xl'>Links</h5>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='#home'
                    className='text-gray-600 hover:text-gray-900 text-lg'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='#features'
                    className='text-gray-600 hover:text-gray-900 text-lg'
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href='#certs'
                    className='text-gray-600 hover:text-gray-900 text-lg'
                  >
                    Clouds
                  </Link>
                </li>
                <li>
                  <Link
                    href='#pricing'
                    className='text-gray-600 hover:text-gray-900 text-lg'
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className='font-bold text-gray-900 mb-6 text-xl'>Legal</h5>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='#'
                    className='text-gray-600 hover:text-gray-900 text-lg'
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-600 hover:text-gray-900 text-lg'
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-600 hover:text-gray-900 text-lg'
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className='font-bold text-gray-900 mb-6 text-xl'>
                Newsletter
              </h5>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks!");
                }}
              >
                <input
                  type='email'
                  placeholder='Enter your email'
                  required
                  className='w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-500 mb-4 text-lg'
                />
                <button
                  type='submit'
                  className='bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-lg'
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className='mt-12 pt-8 border-t-2 border-gray-200 text-gray-600 text-lg'>
            © {new Date().getFullYear()} blc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
