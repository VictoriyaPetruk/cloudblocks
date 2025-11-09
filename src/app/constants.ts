import { FormConfig, Question } from "./start/[slug]/types";

export const questions: Question[] = [
  {
    id: "role",
    question: "What best describes your role?",
    icon: "🎯",
    options: [
      "Developer / DevOps Engineer",
      "CTO / Tech Lead",
      "Startup Founder",
      "Other",
    ],
    isMultiple: false,
    hasOtherInput: true,
    formKey: "entry.491466501",
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
    formKey: "entry.91390904",
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
    formKey: "entry.308417539",
  },
];

// Valid base64 slugs
export const validSlugs = [
  "cG93ZXI=", // power
  "Y3JlZGl0cw==", // credits
  "cnVsZXM=", // rules
  "ZnJlZWRvbQ==", // freedom
];

export const questionsForm: FormConfig = {
  url: "https://docs.google.com/forms/d/e/1FAIpQLSe-AwntW1IBkd4J4bcaW3AWZHnPbGj3VpefQ-MF2OxsCSDDGA/formResponse",
  formEmailKey: "entry.1054867110",
  formOtherOptionResponseKeySuffix: ".other_option_response",
  formOtherOptionValue: "__other_option__",
  campainKey: "entry.424272402",
};

export const whitelistForm: FormConfig = {
  url: "https://docs.google.com/forms/d/e/1FAIpQLSfwNpq3nHZAdjB3GwJn0z1Nz37RWW3PgE3zG18WbxAnLF3cVA/formResponse",
  campainKey: "entry.1840739360",
  formEmailKey: "entry.1254955600",
  formOtherOptionResponseKeySuffix: "",
  formOtherOptionValue: "",
};
