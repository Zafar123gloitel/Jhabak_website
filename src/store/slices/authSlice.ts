'use client';
import { type PayloadAction, type Reducer, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

export interface IAuthInitialState {
  role: string;
  accessToken: string;
  refreshToken: string;
}

const initialState: IAuthInitialState = {
  role: '',
  accessToken: '',
  refreshToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth_: (state, action: PayloadAction<IAuthInitialState>) => {
      state.role = action.payload.role;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    updateRefreshToken_: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    updateAccessToken_: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    resetAuth_: state => {
      state.role = '';
      state.accessToken = '';
      state.refreshToken = '';
    },
  },
});

export const { setAuth_, updateRefreshToken_, updateAccessToken_, resetAuth_ } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth as IAuthInitialState;

export default authSlice.reducer satisfies Reducer<IAuthInitialState>;
