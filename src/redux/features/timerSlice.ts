import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimerStateType } from "../state.type";
import { getLocalStorageItem } from "../../../util/storage";

const preLoadTime = getLocalStorageItem("time");

const initialState = {
  player1: {
    isPlaying: false,
    time: preLoadTime ? preLoadTime : 300000,
    move: 0,
  },
  player2: {
    isPlaying: false,
    time: preLoadTime ? preLoadTime : 300000,
    move: 0,
  },
  startTime: false,
  endTime: false,
  whoLost: 0,
} as TimerStateType;

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
    setTimer: (state, action: PayloadAction<number>) => {
      state.player1.time = action.payload;
      state.player2.time = action.payload;
    },
    reset: (state) => {
      state.player1.isPlaying = false;
      state.player2.isPlaying = false;
      state.endTime = false;
      state.startTime = false;
      state.whoLost = 0;
      state.player1.move = 0;
      state.player2.move = 0;
      state.player1.time = Number(getLocalStorageItem("time")) || 300000;
      state.player2.time = Number(getLocalStorageItem("time")) || 300000;
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
  incrementMove1,
  incrementMove2,
  endTimeHandler,
  startTimerHandler,
  setLostPlayer,
  setTimer,
  reset,
} = timer.actions;
export default timer.reducer;
