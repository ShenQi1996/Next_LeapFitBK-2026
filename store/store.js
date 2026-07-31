import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const initialState = {
    username: null,
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    appointmentDate: null,
    appointmentTime: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        console.log(action)
        return { ...state, ...action.payload };
    },
    clearUser: (state) => {
        return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

const makeStore = () =>
  configureStore({
    reducer: {
      user: userSlice.reducer,
    },
  });

export const wrapper = createWrapper(makeStore);
