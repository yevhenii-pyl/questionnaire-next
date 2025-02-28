import dynamic from "next/dynamic";

import { Question } from "@/types/Question";
import getComponentFromQuestionType from "@/helpers/getComponentFromQuestionType";

type AnswerProps = {
  question: Question;
};

export default function Answer({ question }: AnswerProps) {
  const componentName = getComponentFromQuestionType(question.type);

  const AnswerComponent = dynamic<{ question: Question }>(
    () => import(`@/components/Answers/${componentName}/${componentName}`)
  );

  return <AnswerComponent question={question} />;
}
