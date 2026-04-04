"use client";

import type { MouseEvent } from "react";
import AnimatedBadge from "./animated-badge";

/**
 * Landing page body as real JSX (not dangerouslySetInnerHTML) so crawlers
 * receive semantic HTML in the serialized React output.
 */
export default function HomePageContent() {
  const openMobileMenu = () => {
    (document.querySelector("dialog.mobile") as HTMLDialogElement | null)?.showModal();
  };

  const closeMobileMenu = (e: MouseEvent<HTMLButtonElement>) => {
    (e.currentTarget.closest("dialog") as HTMLDialogElement | null)?.close();
  };

  return (
    <>
      <header>
        <div className="container nav">
          <a className="brand" href="#">
            <img src="/img/logo.png" alt="Cloud Blocks logo" className="logo-img" />
            <span>Cloud Blocks</span>
          </a>
          <nav className="nav-menu" aria-label="Primary">
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#certs">Cloud Providers</a>
              <a href="#architect">Preview</a>
              <a href="#partners">Partners</a>
            </div>
            <a className="btn vibrant pulse" href="https://app.cloudblocks.tech/">
              Go to app
            </a>
            <button type="button" className="hamb" aria-label="Open menu" onClick={openMobileMenu}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <dialog
        className="mobile"
        style={{
          border: "none",
          borderRadius: "16px",
          padding: 0,
          maxWidth: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "1rem 1.2rem",
            borderBottom: "1px solid #eef2f7",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <strong>Menu</strong>
          <button type="button" className="btn small secondary" onClick={closeMobileMenu}>
            Close
          </button>
        </div>
        <div style={{ padding: "1rem 1.2rem", display: "grid", gap: ".8rem" }}>
          <a href="#features">Features</a>
          <a href="#certs">Cloud Providers</a>
          <a href="#architect">Preview</a>
          <a href="#partners">Partners</a>
          <a className="btn" href="https://app.cloudblocks.tech/">
            Go to app
          </a>
        </div>
      </dialog>

      <main className="home-main">
      <section className="hero" id="home" aria-labelledby="hero-heading">
        <div className="container wrap">
          <div>
            <AnimatedBadge />
            <h1 id="hero-heading">
              From <span className="orange-text">Concept</span> to <span className="orange-text">Cloud</span> in Minutes.
            </h1>
            <p className="lead">
            Your personal AI Cloud Architect. Turn complex requirements into live environments, compare provider alternatives, and run automated security audits before you deploy.
            </p>
            <div className="hero-cta">
              <a className="btn" href="https://app.cloudblocks.tech">
                <span>Start creating with AI</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                className="btn secondary"
                href="https://cal.com/viktoriia-petruk-2zyfcw/30min?overlayCalendar=true&date=2026-01-20"
              >
                <span>Book a free consultation call</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </a>
            </div>
          </div>
          <div
            className="hero-ill"
            aria-hidden="true"
            style={{ overflow: "hidden", width: "100%", maxWidth: "900px", marginInline: "auto" }}
          >
            <img src="/img/diagram1.png" alt="Cloud Blocks real environment preview" width={900} height={675} />
          </div>
        </div>
      </section>

      <section id="features" className="section container">
        <h2>Features</h2>
        <div className="features-grid">
          <article className="feat">
            <span className="ic ic-bg">
              <svg viewBox="0 0 24 24" aria-hidden>
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </span>
            <div>
              <h4>Instant AI Visualization</h4>
              <p>
                Use AI to transform client requirements into professional, high-fidelity architecture diagrams in seconds.
              </p>
            </div>
          </article>

          <article className="feat">
            <span className="ic ic-bg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path
                  d="M4 16L10 10L14 14L20 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M16 8H20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <h4>Multi-Cloud Support</h4>
              <p>
                Support any client ecosystem. Design once and use anywhere - AWS, Azure, or GCP - without retraining your
                internal team.
              </p>
            </div>
          </article>

          <article className="feat">
            <span className="ic ic-bg">
              <svg viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M13 2L3 14h7l-1 8 10-12h-7z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <h4>Alternatives for each service</h4>
              <p>Discover the best alternatives for your solution to save on costs and scale.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="features-dashboard" className="section container">
        <h2>How it works</h2>
        <div className="features-dashboard">
          <div className="features-list">
            <div className="feature-item active">
              <h3>Put business requirments</h3>
              <p>Describe what you need to build to the chat.</p>
              <a href="/start/demo" className="read-more">
                Chat with AI →
              </a>
            </div>
            <div className="feature-item">
              <h3>Get architecture diagram</h3>
              <p>Get a full diagram for different cloud environments.</p>
              <a href="/start/demo" className="read-more">
                Download diagram →
              </a>
            </div>
            <div className="feature-item">
              <h3>Compare clouds and prices</h3>
              <p>Apply your changes and observe prices for different clouds.</p>
              <a href="/start/demo" className="read-more">
                Compare prices →
              </a>
            </div>
            <div className="feature-item">
              <h3>Improve your architecture with AI</h3>
              <p>Review security, risks, and Terraform scripts, and discover alternative services.</p>
              <a href="/start/demo" className="read-more">
                Start now →
              </a>
            </div>
          </div>
          <div className="dashboard-preview" id="architect">
            <video autoPlay loop muted playsInline poster="/img/fullapp.png">
              <source src="/img/videoapp.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section id="certs" className="section container">
        <h2>Supported clouds</h2>
        <p className="sub">AWS, Azure, GCP, and more.</p>
        <div className="badges">
          <div className="badge feat">
            <img src="/img/aws-icon.png" alt="Amazon Web Services (AWS) logo" width={100} height={100} />
          </div>
          <div className="badge feat">
            <img src="/img/azure.png" alt="Microsoft Azure logo" width={100} height={100} />
          </div>
          <div className="badge feat">
            <img src="/img/gcp.png" alt="Google Cloud Platform (GCP) logo" width={100} height={100} />
          </div>
        </div>
      </section>

      <section className="partner-section" id="partners">
        <div className="inner">
          <h2>Get more cloud credits from our partner</h2>
          <div className="partner-info">
            <img src="/img/spendbase.png" alt="Spendbase logo" className="partner-logo" width={160} height={48} />
            <p className="partner-description">
              Spendbase helps startups optimize cloud spending and unlock extra credits across major cloud providers.
            </p>
          </div>
          <div className="partner-buttons">
            <a
              href="https://cal.com/viktoriia-petruk-2zyfcw/30min?overlayCalendar=true&date=2026-01-20"
              className="partner-button-primary"
            >
              <span>Book a Discovery call</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </a>
            <a href="https://www.spendbase.co/partners/cloudblocks/" className="partner-button-secondary">
              <span>Get from CloudBlocks</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="testimonials-section" aria-label="Customer testimonials">
        <div className="container">
          <h2>Customer feedback</h2>
          <div className="marquee-wrapper">
            <div className="marquee">
              <div className="marquee-content">
                <figure className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">VN</div>
                    <div className="testimonial-info">
                      <p className="testimonial-name">Vladyslav</p>
                      <p className="testimonial-role">Software Engineer, FinTech product</p>
                    </div>
                  </div>
                  <div className="testimonial-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote className="testimonial-text">
                    CloudBlocks saved us weeks of work. The AI agent understands our needs and creates exactly what we&apos;re
                    looking for.
                  </blockquote>
                </figure>

                <figure className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">M</div>
                    <div className="testimonial-info">
                      <p className="testimonial-name">Mark</p>
                      <p className="testimonial-role">Solution Architect</p>
                    </div>
                  </div>
                  <div className="testimonial-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote className="testimonial-text">
                    Best tool for pre-sales architecture proposals. We deliver professional diagrams to clients faster than ever
                    before.
                  </blockquote>
                </figure>

                <figure className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">AL</div>
                    <div className="testimonial-info">
                      <p className="testimonial-name">Alex</p>
                      <p className="testimonial-role">Engineering Manager, Outsourcing company</p>
                    </div>
                  </div>
                  <div className="testimonial-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote className="testimonial-text">
                    The cloud comparison feature is a game-changer. We can now make informed decisions about which cloud provider
                    to use for each project.
                  </blockquote>
                </figure>

                <figure className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">DS</div>
                    <div className="testimonial-info">
                      <p className="testimonial-name">Denis</p>
                      <p className="testimonial-role">Software Engineer</p>
                    </div>
                  </div>
                  <div className="testimonial-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote className="testimonial-text">
                    CloudBlocks helped me learn to build cloud systems and earn a promotion to an architecture role.
                  </blockquote>
                </figure>
              </div>
              <div className="marquee-content" aria-hidden="true">
                <figure className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">IF</div>
                    <div className="testimonial-info">
                      <p className="testimonial-name">Illia</p>
                      <p className="testimonial-role">CTO, DeepTech startup</p>
                    </div>
                  </div>
                  <div className="testimonial-rating">★★★★★</div>
                  <blockquote className="testimonial-text">
                    CloudBlocks has revolutionized our cloud architecture process. We can now create complex infrastructure
                    diagrams in minutes instead of days!
                  </blockquote>
                </figure>
                <figure className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">VP</div>
                    <div className="testimonial-info">
                      <p className="testimonial-name">Viktoriia</p>
                      <p className="testimonial-role">Software Engineer, Insurance product</p>
                    </div>
                  </div>
                  <div className="testimonial-rating">★★★★★</div>
                  <blockquote className="testimonial-text">
                    The AI-powered architecture tool is incredible. It understands our requirements and helps me build my
                    projects.
                  </blockquote>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="build-section">
        <div className="inner">
          <h2>Build your first cloud architecture with AI -&gt;</h2>
          <div className="build-buttons">
            <a
              href="https://cal.com/viktoriia-petruk-2zyfcw/30min?overlayCalendar=true&date=2026-01-20"
              className="build-button-primary"
            >
              <span>Share your Insights</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </a>
            <a href="https://app.cloudblocks.tech" className="build-button-secondary">
              <span>Start for free</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      </main>

      <footer>
        <div className="container foot-grid">
          <div className="foot">
            <a className="brand" href="#">
              <img src="/img/logo.png" alt="Cloud Blocks logo" className="logo-img" />
              <span>Cloud Blocks</span>
            </a>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/cloud.blocks?igsh=MWNmMmhjN3B1d3ZpcQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/cloudblockslearn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          <div className="foot" />
          <div className="foot" />
          <div className="foot" />
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} Cloud Blocks. All rights reserved.
        </div>
      </footer>
    </>
  );
}
