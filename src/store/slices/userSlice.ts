import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { ISignupPayload } from '@/types';

interface IState {
  user: ISignupPayload | null;
}

const initialState: IState = {
  user: {
    isActive: false,
    role: '',
    name: '',
    email: '',
    phone_number: null,
    isEmailSet: false,
    isPhoneNumberVerified: false,
    isEmailVerified: false,
    isPasswordVerified: false,
    _id: '',
    createdAt: '',
    updatedAt: '',
    avatar: null,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser_: (state: IState, action: PayloadAction<ISignupPayload>) => {
      state.user = action.payload;
    },
    resetUser_: (state: IState) => {
      state.user = null;
    },
  },
});
export const { setUser_, resetUser_ } = userSlice.actions;

export const selectUser = (state: RootState) => state.user as IState;

export default userSlice.reducer satisfies Reducer<IState>;
