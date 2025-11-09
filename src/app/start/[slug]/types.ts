export interface Question {
  id: string;
  question: string;
  icon: string;
  options: string[];
  isMultiple?: boolean; // If true, use checkboxes (multi-select)
  hasOtherInput?: boolean; // If true, show input field for "Other" option
}
