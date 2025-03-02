"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import cn from "classnames";

import { useTheme } from "@/app/providers/ThemeProvider";

import { useAppSelector } from "@/lib/hooks";
import { Question } from "@/types/Question";

import QuestionTitle from "@/components/QuestionTitle/QuestionTitle";
import Answer from "@/components/Answer/Answer";

import styles from "./Question.module.css";
import { isEmptyObject } from "@/helpers/utils";

type QuestionPrors = {
  question: Question;
};

export default function QuestionContainer({ question }: QuestionPrors) {
  const router = useRouter();
  const answersState = useAppSelector((state) => state.answers);
  const { setTheme } = useTheme();

  useEffect(() => {
    if (question.id !== "1" && isEmptyObject(answersState)) {
      router.push("/");
    }
  }, [question.id, answersState, router]);

  useEffect(() => {
    setTheme(question.topic);

    return () => setTheme("default");
  }, [question.topic, setTheme]);

  return (
    <main
      className={cn(styles.questionContainer, {
        [styles.centered]: !!question.subtitle,
      })}
    >
      <QuestionTitle title={question.title}>
        {question.subtitle && (
          <p className={styles.subtitle}>{question.subtitle}</p>
        )}
      </QuestionTitle>

      <Answer question={question} />
    </main>
  );
}
