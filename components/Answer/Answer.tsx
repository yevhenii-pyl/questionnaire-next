import { FC } from "react";

import { QuestionType } from "@/types/Question";

import SelectOne from "@/components/Answers/SelectOne/SelectOne";

const questionsMap: Record<
  QuestionType,
  FC<{ id: string; topic: string; next: Record<string, string> }>
> = {
  "select-one": SelectOne,
  input: () => <div>Input</div>,
};

type AnswerProps = {
  type: QuestionType;
  id: string;
  topic: string;
  next: Record<string, string>;
};

export default function Answer({ type, id, topic, next }: AnswerProps) {
  const AnswerComponent = questionsMap[type];

  return <AnswerComponent id={id} topic={topic} next={next} />;
}
