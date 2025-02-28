import { Question } from "@/types/Question";
import getQuestionnaire from "@/helpers/getQuestionnaire";

const getQuestionById = async (id: string): Promise<Question | undefined> => {
  try {
    const questions = await getQuestionnaire();
    const question = questions.find((q) => q.id === id);

    return question;
  } catch (err) {
    throw new Error(`Error fetching questions: ${err}`);
  }

  return undefined;
};

export default getQuestionById;
