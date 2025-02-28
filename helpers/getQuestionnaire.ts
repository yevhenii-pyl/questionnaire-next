import localConfig from "@/public/config/questions.json";
import { Question } from "@/types/Question";

const { CONFIG_LOCATION } = process.env;

const getLocalConfig = (): Question[] => localConfig as unknown as Question[];

const getQuestionnaire = async (): Promise<Question[]> => {
  switch (CONFIG_LOCATION) {
    case "local":
      return getLocalConfig();
  }

  return [];
};

export default getQuestionnaire;
