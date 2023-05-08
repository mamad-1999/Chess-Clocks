import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  player1: {
    isPlaying: false,
    time: 300000,
    timerId: "",
  },
  player2: {
    isPlaying: false,
    time: 300000,
    timerId: "",
  },
};

export const timer = createSlice({
  name: "timer",
  initialState: initialState,
  reducers: {
    startTime1: (state) => {
      state.player1.isPlaying = true;
    },
    stopTime1: (state) => {
      state.player1.isPlaying = false;
    },
    decrementPlayer1: (state, action: PayloadAction<number>) => {
      state.player1.isPlaying = true;
      state.player1.time -= action.payload;
    },
    setTimeId1: (state, action) => {
      state.player1.timerId = action.payload;
    },
    startTime2: (state) => {
      state.player2.isPlaying = true;
    },
    stopTime2: (state) => {
      state.player2.isPlaying = false;
    },
    decrementPlayer2: (state, action: PayloadAction<number>) => {
      state.player2.time -= action.payload;
    },
    setTimeId2: (state, action) => {
      state.player2.timerId = action.payload;
    },
  },
});

export const {
  decrementPlayer1,
  decrementPlayer2,
  startTime1,
  startTime2,
  stopTime1,
  stopTime2,
  setTimeId1,
  setTimeId2,
} = timer.actions;
export default timer.reducer;
