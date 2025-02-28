import { questionComponents, QuestionType } from "@/types/Question";

export default function getComponentFromQuestionType(
  value: QuestionType
): keyof typeof questionComponents | undefined {
  for (const key in questionComponents) {
    if (questionComponents[key as keyof typeof questionComponents] === value) {
      return key as keyof typeof questionComponents;
    }
  }
  return undefined;
}
