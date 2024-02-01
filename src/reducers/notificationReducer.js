import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    renderNotification(state, action) {
      return action.payload;
    },
    resetNotification(state, action) {
      return initialState;
    },
  },
});

export const { renderNotification, resetNotification } =
  notificationSlice.actions;

export const callNotification = (message) => {
  return (dispatch) => {
    dispatch(renderNotification(message));

    setTimeout(() => {
      dispatch(resetNotification());
    }, 2000);
  };
};

export default notificationSlice.reducer;
