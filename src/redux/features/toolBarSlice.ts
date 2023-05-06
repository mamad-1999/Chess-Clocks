import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ToolBarSliceType = {
  soundStatus: boolean;
};

const initialState = {
  soundStatus: true,
} as ToolBarSliceType;

export const toolBar = createSlice({
  name: "tools",
  initialState: initialState,
  reducers: {
    soundControl: (state) => {
      state.soundStatus = !state.soundStatus;
    },
    reset: () => initialState,
  },
});

export const { soundControl, reset } = toolBar.actions;
export default toolBar.reducer;
