'use client';

import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import userSlice from './slices/userSlice';
import toggleSlice from './slices/toggleSlice';

export const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  toggle: toggleSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
