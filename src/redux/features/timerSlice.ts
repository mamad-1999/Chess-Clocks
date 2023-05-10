import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  player1: {
    isPlaying: false,
    time: 3000,
    move: 0,
  },
  player2: {
    isPlaying: false,
    time: 3000,
    move: 0,
  },
  startTime: false,
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
    incrementMove1: (state) => {
      state.player1.move += 1;
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
    incrementMove2: (state) => {
      state.player2.move += 1;
    },
    endTimeHandler: (state) => {
      state.endTime = true;
    },
    startTimerHandler: (state) => {
      state.startTime = true;
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
  incrementMove1,
  incrementMove2,
  endTimeHandler,
  startTimerHandler,
  setLostPlayer,
  reset,
} = timer.actions;
export default timer.reducer;
