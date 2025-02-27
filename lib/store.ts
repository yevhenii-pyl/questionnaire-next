import { configureStore } from "@reduxjs/toolkit";

import AnswersSlice from "@/lib/features/AnswersState/AnswersSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      answers: AnswersSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
