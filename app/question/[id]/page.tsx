import Image from "next/image";
import { notFound } from "next/navigation";

import Logo from "@/public/logo-black.svg";
import questions from "@/public/config/questions.json";

import { Question } from "@/types/Question";

import Title from "@/components/Title/Title";
import Answer from "@/components/Answer/Answer";

import styles from "./page.module.css";

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

  const question = questions.find((q) => q.id === id);
  if (!question) return notFound();

  const {
    title,
    type,
    id: questionId,
    topic,
    next,
  } = question as unknown as Question;

  return (
    <div className={styles.questionContainer}>
      <Image src={Logo} width={24} height={24} alt="Nebula Logo" />
      <Title title={title} />

      <Answer type={type} id={questionId} topic={topic} next={next} />
    </div>
  );
}
