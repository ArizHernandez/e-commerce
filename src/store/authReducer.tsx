/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  first_name: null,
  last_name: null,
};

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
