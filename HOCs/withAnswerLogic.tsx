"use client";

import { ComponentType } from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/lib/hooks";
import { saveAnswer } from "@/lib/features/AnswersState/AnswersSlice";

import questions from "@/public/config/questions.json";

type AnswerWrapperProps = {
  id: string;
  topic: string;
  next: Record<string, string>;
};

export default function withAnswerLogic(
  WrappedComponent: ComponentType<{
    answers: string[];
    onAnswer: (answer: string) => void;
  }>
) {
  return function AnswerWrapper({ id, topic, next }: AnswerWrapperProps) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleAnswer = (answer: string) => {
      if (topic !== "info") {
        dispatch(saveAnswer({ topic, answer }));
      }

      if (next.default) {
        router.push(`/question/${next.default}`);
      } else {
        router.push(
          `/question/${next[`option-${answers.indexOf(answer) + 1}`]}`
        );
      }
    };

    const answers = questions.find((q) => q.id === id)!.options || [];

    return <WrappedComponent onAnswer={handleAnswer} answers={answers} />;
  };
}
