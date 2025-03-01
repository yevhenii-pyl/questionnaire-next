"use client";
import { useEffect } from "react";
import cn from "classnames";

import { useTheme } from "@/app/providers/ThemeProvider";

import { Question } from "@/types/Question";

import QuestionTitle from "@/components/QuestionTitle/QuestionTitle";
import Answer from "@/components/Answer/Answer";

import styles from "./Question.module.css";

type QuestionPrors = {
  question: Question;
};

export default function QuestionContainer({ question }: QuestionPrors) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(question.topic);
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
