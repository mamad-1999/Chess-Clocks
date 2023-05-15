import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToolBarStateType } from "../state.type";

const initialState = {
  soundStatus: true,
  playStatus: false,
} as ToolBarStateType;

export const toolBar = createSlice({
  name: "tools",
  initialState: initialState,
  reducers: {
    soundControl: (state) => {
      state.soundStatus = !state.soundStatus;
    },
    playStatusOn: (state) => {
      state.playStatus = true;
    },
    playStatusOff: (state) => {
      state.playStatus = false;
    },
  },
});

export const { soundControl, playStatusOn, playStatusOff } = toolBar.actions;
export default toolBar.reducer;
