import { notFound } from "next/navigation";

import { Question } from "@/types/Question";

import QuestionContainer from "@/containers/Question/Question";
import localConfig from "@/public/config/questions.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return {
    title: `Question ${id} | Questionnaire`,
    description: "Answer this question to continue...",
  };
}

export async function generateStaticParams() {
  const questions = localConfig as unknown as Question[];

  return questions.map((question: Question) => ({
    id: question.id,
  }));
}

async function getQuestion(id: string): Promise<Question> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/question/${id}`,
    {
      method: "GET",
      credentials: "same-origin",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch the question");
  }

  const questionData: Question = await response.json();

  return questionData;
}

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = await getQuestion(id);

  if (!question) return notFound();

  return <QuestionContainer question={question} />;
}
