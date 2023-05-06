import { configureStore } from "@reduxjs/toolkit";
import toolBarSlice from "./features/toolBarSlice";

export const store = configureStore({
  reducer: {
    toolBar: toolBarSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
