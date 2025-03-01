import { notFound } from "next/navigation";

import { Question } from "@/types/Question";

import SelectOne from "@/components/Answers/SelectOne/SelectOne";

type AnswerProps = {
  question: Question;
};

export default function Answer({ question }: AnswerProps) {
  switch (question.type) {
    case "select-one":
      return <SelectOne question={question} />;
    default:
      return notFound();
  }
}
