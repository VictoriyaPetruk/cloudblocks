import { Question } from "./types";

export const questions: Question[] = [
  {
    id: "role",
    question: "Your role",
    icon: "🎯",
    options: [
      "Developer / DevOps Engineer",
      "CTO / Tech Lead",
      "Startup Founder",
      "Other",
    ],
    isMultiple: false,
    hasOtherInput: true,
  },
  {
    id: "services",
    question: "Which services have you used for building website?",
    icon: "🌐",
    options: [
      "Vercel",
      "Heroku",
      "Supabase",
      "Render",
      "AWS, Azure, GCP",
      "Other",
    ],
    isMultiple: true,
    hasOtherInput: true,
  },
  {
    id: "challenge",
    question: "What is the biggest challenge to build with AWS, Azure or GCP?",
    icon: "💡",
    options: [
      "High complexity of services",
      "Time-consuming initial setup and configuration",
      "Need DevOps to support it",
      "Hard to choose provider",
      "Difficulties with Terraform",
      "Unpredictable pricing models",
      "Other",
    ],
    isMultiple: true,
    hasOtherInput: true,
  },
];

// Valid base64 slugs
export const validSlugs = [
  "cG93ZXI=", // power
  "Y3JlZGl0cw==", // credits
  "cnVsZXM=", // rules
  "ZnJlZWRvbQ==", // freedom
];
