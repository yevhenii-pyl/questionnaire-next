import { Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

import {
  saveAnswer,
  AnswersState,
} from "@/lib/features/AnswersState/AnswersSlice";

type SaveUserAnswerProps = {
  topic: string;
  answer: string;
  dispatch: ThunkDispatch<
    {
      answers: AnswersState;
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>;
};

const saveUserAnswer = ({ topic, answer, dispatch }: SaveUserAnswerProps) => {
  if (topic !== "info") {
    dispatch(saveAnswer({ topic, answer }));
  }
};

export default saveUserAnswer;
