import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  player1: {
    isPlaying: false,
    time: 3000,
  },
  player2: {
    isPlaying: false,
    time: 3000,
  },
  endTime: false,
  whoLost: 0,
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
    startTime2: (state) => {
      state.player2.isPlaying = true;
    },
    stopTime2: (state) => {
      state.player2.isPlaying = false;
    },
    decrementPlayer2: (state, action: PayloadAction<number>) => {
      state.player2.time -= action.payload;
    },
    endTimeHandler: (state) => {
      state.endTime = true;
    },
    setLostPlayer: (state, action: PayloadAction<number>) => {
      state.whoLost = action.payload;
    },
    reset: () => initialState,
  },
});

export const {
  decrementPlayer1,
  decrementPlayer2,
  startTime1,
  startTime2,
  stopTime1,
  stopTime2,
  endTimeHandler,
  setLostPlayer,
  reset,
} = timer.actions;
export default timer.reducer;
