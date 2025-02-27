"use client";

import withAnswerLogic from "@/HOCs/withAnswerLogic";

import Button from "@/components/Button/Button";

import styles from "./SelectOne.module.css";

function SelectOne({
  answers,
  onAnswer,
}: {
  answers: string[];
  onAnswer: (answer: string) => void;
}) {
  return (
    <div className={styles.container}>
      {answers.map((answer) => (
        <Button key={answer} onClick={() => onAnswer(answer)}>
          {answer}
        </Button>
      ))}
    </div>
  );
}

export default withAnswerLogic(SelectOne);
