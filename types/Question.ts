const QuestionType = {
  SelectOne: "select-one",
  Input: "input",
} as const;

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];

export type Question = {
  id: string;
  type: QuestionType;
  title: string;
  topic: string | "info";
  options?: string[];
  next: {
    [key: string]: string;
  };
};
