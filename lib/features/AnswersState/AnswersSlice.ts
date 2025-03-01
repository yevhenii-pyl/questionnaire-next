"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AnswersState = {
  [topic: string]: string;
};

const initialState: AnswersState =
  typeof window !== "undefined"
    ? JSON.parse(sessionStorage.getItem("answers") || "{}")
    : {};

const AnswersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    saveAnswer: (
      state,
      action: PayloadAction<{ topic: string; answer: string }>
    ) => {
      const { topic, answer } = action.payload;
      state[topic] = answer;
      if (typeof window !== "undefined") {
        sessionStorage.setItem("answers", JSON.stringify(state));
      }
    },
    resetStore: () => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("answers", JSON.stringify({}));
      }

      return {};
    },
  },
});

export const { saveAnswer, resetStore } = AnswersSlice.actions;
export default AnswersSlice.reducer;
