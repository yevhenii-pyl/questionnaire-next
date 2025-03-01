import { Question } from "@/types/Question";
import { NextResponse } from "next/server";

import config from "@/public/config/questions.json";

async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  let question;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api`, {
      method: "GET",
      credentials: "same-origin",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch the questions");
    }

    const questions: Question[] = config as unknown as Question[];

    question = questions.find((q) => q.id === id);
  } catch (err) {
    throw new Error(`Error fetching questions: ${err}`);
  }

  return NextResponse.json({ ...question });
}

export { GET };
