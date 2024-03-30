import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { ISignupPayload, IPlans } from '@/types';

interface IState {
  user: ISignupPayload | null;
  plans: IPlans | null;
}

const initialState: IState = {
  user: null,
  plans: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser_: (state: IState, action: PayloadAction<ISignupPayload>) => {
      state.user = action.payload;
    },
    setUserPlans_: (state: IState, action: PayloadAction<IPlans>) => {
      state.plans = action.payload;
    },
    resetUser_: (state: IState) => {
      state.user = null;
      state.plans = null;
    },
  },
});
export const { setUser_, resetUser_, setUserPlans_ } = userSlice.actions;

export const selectUser = (state: RootState) => state.user as IState;

export default userSlice.reducer satisfies Reducer<IState>;
