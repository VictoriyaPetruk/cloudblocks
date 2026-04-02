"use client";

import { useEffect, useState } from "react";

type BadgeSlide = {
  label: string;
  imageSrc: string;
  imageAlt: string;
  /** Extra text after the logo; omit or empty to hide */
  extra?: string;
};

/** Order: 1991 → IdeasLab → Web Summit → UA Tech → repeat */
const SLIDES: BadgeSlide[] = [
  { label: "Currently in:", imageSrc: "/img/1991.png", imageAlt: "1991 Accelerator" },
  {
    label: "Backed By:",
    imageSrc: "/img/IdeasLab.png",
    imageAlt: "IdeasLab",
    extra: "IdeasLab accelerator",
  },
  {
    label: "Participants:",
    imageSrc: "/img/websummit.png",
    imageAlt: "Web Summit",
    extra: "2025",
  },
  {
    label: "Highlighted By:",
    imageSrc: "/img/uatech.png",
    imageAlt: "UA Tech",
  },
];

/** Time each slide stays on screen before advancing */
const SLIDE_INTERVAL_MS = 3000;

export default function AnimatedBadge() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes animated-badge-enter {
              from { opacity: 0; transform: translateY(6px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animated-badge-slide {
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              gap: 0.5rem;
              animation: animated-badge-enter 0.5s ease-out;
            }
            @media (prefers-reduced-motion: reduce) {
              .animated-badge-slide {
                animation: none;
              }
            }
          `,
        }}
      />
      <div id="animated-badge" className="animated-badge" aria-live="polite">
        <div key={index} className="animated-badge-slide">
          <span id="badge-text">{slide.label}</span>
          <img src={slide.imageSrc} alt={slide.imageAlt} decoding="async" />
          {slide.extra ? (
            <span id="badge-extra-text">{slide.extra}</span>
          ) : (
            <span id="badge-extra-text" style={{ display: "none" }} aria-hidden />
          )}
        </div>
      </div>
    </>
  );
}
