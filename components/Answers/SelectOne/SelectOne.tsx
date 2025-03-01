"use client";

import withAnswerLogic from "@/HOCs/withAnswerLogic";

import Button from "@/components/Button/Button";

import styles from "./SelectOne.module.css";
import { Question } from "@/types/Question";

function SelectOne({
  question,
  onAnswer,
  isLoading,
}: {
  question: Question;
  onAnswer: (answer: string) => void;
  isLoading: boolean;
}) {
  const answers = question.options || [];

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Loading next question...</p>
      ) : (
        answers.map((answer) => (
          <Button key={answer} onClick={() => onAnswer(answer)}>
            {answer}
          </Button>
        ))
      )}
    </div>
  );
}

export default withAnswerLogic(SelectOne);
