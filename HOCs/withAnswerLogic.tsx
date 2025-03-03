"use client";

import { ComponentType, useState } from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import { Question } from "@/types/Question";
import saveUserAnswer from "@/helpers/saveUserAnswer";
import redirectOnAnswer from "@/helpers/redirectOnAnswer";

type AnswerWrapperProps = {
  question: Question;
};

export default function withAnswerLogic(
  WrappedComponent: ComponentType<{
    question: Question;
    onAnswer: (answer: string) => void;
    isLoading: boolean;
  }>
) {
  return function AnswerWrapper({ question }: AnswerWrapperProps) {
    const dispatch = useAppDispatch();
    const answersState = useAppSelector((state) => state.answers);
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const handleAnswer = (answer: string) => {
      setIsLoading(true);

      const { topic, next } = question;

      saveUserAnswer({ topic, answer, dispatch });

      redirectOnAnswer({
        next,
        router,
        answer,
        answersState,
      });
    };

    return (
      <WrappedComponent
        onAnswer={handleAnswer}
        question={question}
        isLoading={isLoading}
      />
    );
  };
}
