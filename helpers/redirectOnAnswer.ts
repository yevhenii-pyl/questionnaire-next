import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type RedirectOnAnswerProps = {
  next: Record<string, string>;
  router: AppRouterInstance;
  answer: string;
  options: string[];
};

const redirectOnAnswer = ({
  next,
  router,
  answer,
  options,
}: RedirectOnAnswerProps) => {
  if (next.default) {
    router.push(`/question/${next.default}`);
  } else {
    router.push(`/question/${next[`option-${options.indexOf(answer) + 1}`]}`);
  }
};

export default redirectOnAnswer;
