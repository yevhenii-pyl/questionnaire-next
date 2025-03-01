import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { AnswersState } from "@/lib/features/AnswersState/AnswersSlice";

type RedirectOnAnswerProps = {
  next: Record<string, Record<string, string>>;
  router: AppRouterInstance;
  answer: string;
  answersState: AnswersState;
};

const redirectOnAnswer = ({
  next,
  router,
  answer,
  answersState,
}: RedirectOnAnswerProps) => {
  if (next.default) {
    if (typeof next.default === "string") {
      if (next.default === "summary") {
        router.push(`/summary`);
      } else {
        router.push(`/question/${next.default}`);
      }
    }
  } else {
    const connectedTopic = Object.keys(next)[0];

    const connectedTopicAnswer = Object.keys(next[connectedTopic]).includes(
      answer
    )
      ? answer
      : (answersState[connectedTopic] as string);

    const nextQuestionID = next[connectedTopic][connectedTopicAnswer];

    router.push(`/question/${nextQuestionID}`);
  }
};

export default redirectOnAnswer;
