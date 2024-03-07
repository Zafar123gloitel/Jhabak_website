'use client';

import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import userSlice from './slices/userSlice';

export const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
