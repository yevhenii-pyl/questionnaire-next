import { notFound } from "next/navigation";
import cn from "classnames";

import { Question } from "@/types/Question";

import QuestionTitle from "@/components/QuestionTitle/QuestionTitle";
import Answer from "@/components/Answer/Answer";

import styles from "./page.module.css";
import getQuestionnaire from "@/helpers/getQuestionnaire";
import getQuestionById from "@/helpers/getQuestionById";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;

  return {
    title: `Question ${id} | Questionnaire`,
    description: "Answer this question to continue...",
  };
}

export async function generateStaticParams() {
  const questions = await getQuestionnaire();

  return questions.map((question: Question) => ({
    id: question.id,
  }));
}

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ id: string }>;
  questions: Question[];
}) {
  const { id } = await params;
  const question = await getQuestionById(id);

  if (!question) return notFound();

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
