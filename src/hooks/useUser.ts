import { useAppDispatch, useAppSelector } from '@/store';
import { resetUser_, selectUser, setUser_ } from '@/store/slices/userSlice';
import { ISignupPayload } from '@/types';

export default function useUser() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  function SetUser(_user: ISignupPayload): void {
    dispatch(setUser_(_user));
  }

  function ResetUser(): void {
    dispatch(resetUser_());
  }

  function UserData(): ISignupPayload | null {
    return user.user;
  }

  return { SetUser, ResetUser, UserData };
}
