"use client";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { resetStore } from "@/lib/features/AnswersState/AnswersSlice";

import Button from "@/components/Button/Button";

import mapQuestionTopicToName, {
  Topic,
} from "@/helpers/mapQuestionTopicToName";

import styles from "./page.module.css";
import useMounted from "@/hooks/useMounted";

export default function Summary() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const answersState = useAppSelector((state) => state.answers);
  const { hasMounted } = useMounted();

  const handleRestart = () => {
    dispatch(resetStore());
    router.push(`/`);
  };

  const userAnswers = Object.entries(answersState);

  if (!hasMounted) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h2>Your answers:</h2>
      {!!userAnswers.length ? (
        <ul className={styles.answersList}>
          {userAnswers.map(([question, answer], id) => (
            <li className={styles.answer} key={`${answer}-${id}`}>
              {mapQuestionTopicToName(question as Topic)}: {answer}
            </li>
          ))}
        </ul>
      ) : (
        <div>Looks like no answers were saved, lets try again: </div>
      )}
      <Button onClick={handleRestart}>Take Quiz again!</Button>
    </div>
  );
}
