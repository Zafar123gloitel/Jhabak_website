'use client';
import { type Reducer, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

export interface IToggleState {
  toggle: boolean;
}

const initialState: IToggleState = {
  toggle: true,
};

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    setToggle_: (state: IToggleState) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { setToggle_ } = toggleSlice.actions;

export const selectToggle = (state: RootState) => state.toggle as IToggleState;

export default toggleSlice.reducer satisfies Reducer<IToggleState>;
