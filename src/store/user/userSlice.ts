import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { ISignupPayload } from '@/types';

interface IState {
  accessToken: string;
  refreshToken: string;

  dataUser: ISignupPayload | null;
}

const initialState: IState = {
  accessToken: '',
  refreshToken: '',
  dataUser: {
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
    setDataUser: (state: IState, action: PayloadAction<ISignupPayload>) => {
      state.dataUser = action.payload;
    },
    RESET_USER_DATA: (state: IState) => {
      state.accessToken = '';
      state.refreshToken = '';
      state.dataUser = null;
    },
    setAccessToken: (state: IState, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state: IState, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
  },
});
export const { setDataUser, RESET_USER_DATA, setAccessToken, setRefreshToken } = userSlice.actions;
export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user;
