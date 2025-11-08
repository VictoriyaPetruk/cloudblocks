import { Question } from "../types";

export const formatAnswersForEmail = (
  answers: Record<string, string | string[]>,
  otherInputs: Record<string, string>,
  questions: Question[]
): string => {
  return Object.entries(answers)
    .map(([key, value]) => {
      const question = questions.find((q) => q.id === key);
      let answerText = "";

      if (Array.isArray(value)) {
        // For multi-select, join with commas
        answerText = value
          .map((v) => {
            if (v === "Other" && otherInputs[key]) {
              return `Other: ${otherInputs[key]}`;
            }
            return v;
          })
          .join(", ");
      } else {
        // For single select
        if (value === "Other" && otherInputs[key]) {
          answerText = `Other: ${otherInputs[key]}`;
        } else {
          answerText = value as string;
        }
      }

      return `${question?.question}\n${answerText}`;
    })
    .join("\n\n");
};
