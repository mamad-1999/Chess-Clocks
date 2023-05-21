import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SingleTimeStateType = {
  player: "2" | "1" | "";
  showSingleTime: boolean;
};

const initialState = {
  player: "",
  showSingleTime: false,
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
    singleTimeChangePlayer: (state, action: PayloadAction<"2" | "1">) => {
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
