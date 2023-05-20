import { createSlice } from "@reduxjs/toolkit";

type ModalStateType = {
  showModal: boolean;
};

const initialState = {
  showModal: false,
} as ModalStateType;

export const modal = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    showModalHandler: (state) => {
      state.showModal = true;
    },
    closeModalHandler: (state) => {
      state.showModal = false;
    },
  },
});

export const { showModalHandler, closeModalHandler } = modal.actions;
export default modal.reducer;
