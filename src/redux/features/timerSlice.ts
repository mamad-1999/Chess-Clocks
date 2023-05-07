import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TimerType = {
  isPlaying: boolean;
  timer1: number;
  timer2: number;
  currentUser: number;
  timerId: any;
};

const initialState = {
  isPlaying: false,
  timer1: 20,
  timer2: 20,
  currentUser: 1,
  timerId: null,
} as TimerType;

export const timer = createSlice({
  name: "timer",
  initialState: initialState,
  reducers: {
    timeOneControl: (state) => {
      state.timer1 = state.timer1 - 1;
    },
    timeTwoControl: (state) => {
      state.timer2 = state.timer2 - 1;
    },
    timerIdControl: (state, action) => {
      state.timerId = action.payload;
    },
    currentUserSwitch: (state) => {
      state.currentUser = state.currentUser === 1 ? 2 : 1;
    },
    changeIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const {
  timeOneControl,
  timeTwoControl,
  timerIdControl,
  currentUserSwitch,
  changeIsPlaying,
} = timer.actions;
export default timer.reducer;
