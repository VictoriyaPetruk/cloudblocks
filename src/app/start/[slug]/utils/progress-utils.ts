export const calculateProgress = (
  currentStep: number,
  totalQuestions: number,
  isEmailStep: boolean
): number => {
  const totalSteps = totalQuestions + 1; // Questions + email step (excluding intro)
  const currentProgressStep = isEmailStep
    ? totalQuestions + 1 // Show as final step when on email form
    : currentStep + 1; // +1 because we start at 0 for first question (intro step -1 is excluded)
  return (currentProgressStep / totalSteps) * 100;
};

