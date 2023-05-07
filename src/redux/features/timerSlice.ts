import { createSlice } from "@reduxjs/toolkit";

type TimerType = {
  timer1: number;
  timer2: number;
  currentUser: number;
  timerId: any;
};

const initialState = {
  timer1: 300,
  timer2: 300,
  currentUser: 1,
  timerId: null,
} as TimerType;

export const timer = createSlice({
  name: "timer",
  initialState: initialState,
  reducers: {},
});

export default timer.reducer;
