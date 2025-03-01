import { notFound } from "next/navigation";

import { Question } from "@/types/Question";

import getQuestionnaire from "@/helpers/getQuestionnaire";
import getQuestionById from "@/helpers/getQuestionById";

import QuestionContainer from "@/containers/Question/Question";

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

  return <QuestionContainer question={question} />;
}
