import { useAppDispatch, useAppSelector } from '@/store';
import { type IAuthInitialState, resetAuth_, setAuth_, selectAuth } from '@/store/slices/authSlice';

export default function useAuth() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);

  function Auth(_auth: IAuthInitialState): void {
    dispatch(setAuth_(_auth));
  }

  function ResetAuth(): void {
    dispatch(resetAuth_());
  }

  function IsLoggedIn(): boolean {
    return !!(auth.role !== '' && auth.accessToken !== '' && auth.refreshToken !== '');
  }

  return { Auth, ResetAuth, IsLoggedIn };
}
