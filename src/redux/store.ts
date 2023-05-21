import { configureStore } from "@reduxjs/toolkit";
import toolBarSlice from "./features/toolBarSlice";
import timerSlice from "./features/timerSlice";
import settingSlice from "./features/settingSlice";
import modalSlice from "./features/modalSlice";
import singleTime from "./features/singleTimeSlice";

export const store = configureStore({
  reducer: {
    toolBar: toolBarSlice,
    timer: timerSlice,
    setting: settingSlice,
    modal: modalSlice,
    singleTime: singleTime,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
