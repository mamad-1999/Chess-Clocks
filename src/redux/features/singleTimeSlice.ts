import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SingleTimeStateType = {
  player: string;
  showSingleTime: boolean;
};

const initialState = {
  player: "",
  showSingleTime: true,
} as SingleTimeStateType;

export const singleTime = createSlice({
  name: "singleTime",
  initialState: initialState,
  reducers: {
    showSingleTimeHandler: (state) => {
      state.showSingleTime = true;
    },
    closeSingleTimeHandler: (state) => {
      state.showSingleTime = false;
    },
    singleTimeChangePlayer: (state, action: PayloadAction<string>) => {
      state.player = action.payload;
    },
  },
});

export const {
  showSingleTimeHandler,
  closeSingleTimeHandler,
  singleTimeChangePlayer,
} = singleTime.actions;

export default singleTime.reducer;
