export type PlayerType = {
  isPlaying: boolean;
  time: number;
  move: number;
};

export type TimerStateType = {
  player1: PlayerType;
  player2: PlayerType;
  startTime: boolean;
  endTime: boolean;
  whoLost: number;
};

export type ToolBarStateType = {
  soundStatus: boolean;
  playStatus: boolean;
};
