export const questionComponents = {
  SelectOne: "select-one",
  Input: "input",
} as const;

export type QuestionType =
  (typeof questionComponents)[keyof typeof questionComponents];

export type Question = {
  id: string;
  type: QuestionType;
  title: string;
  subtitle?: string;
  topic: string | "info";
  options?: string[];
  next: {
    [key: string]: string;
  };
};
