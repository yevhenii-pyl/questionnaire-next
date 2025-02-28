import { notFound } from "next/navigation";

import questions from "@/public/config/questions.json";

import { Question } from "@/types/Question";

import QuestionTitle from "@/components/QuestionTitle/QuestionTitle";
import Answer from "@/components/Answer/Answer";

import styles from "./page.module.css";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;

  return {
    title: `Question ${id} | Questionnaire`,
    description: "Answer this question to continue...",
  };
}

export async function generateStaticParams() {
  return questions.map((question) => ({
    id: question.id,
  }));
}

export default async function QuestionPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const question = questions.find((q) => q.id === id) as unknown as Question;
  if (!question) return notFound();

  return (
    <main className={styles.questionContainer}>
      <QuestionTitle title={question.title}>
        {question.subtitle && (
          <p className={styles.subtitle}>{question.subtitle}</p>
        )}
      </QuestionTitle>

      <Answer question={question} />
    </main>
  );
}
