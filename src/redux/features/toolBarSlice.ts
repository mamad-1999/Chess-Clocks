import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ToolBarSliceType = {
  soundStatus: boolean;
  playStatus: boolean;
};

const initialState = {
  soundStatus: true,
  playStatus: false,
} as ToolBarSliceType;

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
