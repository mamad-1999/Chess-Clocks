import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

type settingState = {
  themeColor: string;
};

const initialState = {
  themeColor: "bg-lime-700",
} as settingState;

export const settingSlice = createSlice({
  name: "setting",
  initialState: initialState,
  reducers: {
    setThemeColor: (state, action: PayloadAction<string>) => {
      state.themeColor = action.payload;
    },
  },
});

export const { setThemeColor } = settingSlice.actions;

export default settingSlice.reducer;
