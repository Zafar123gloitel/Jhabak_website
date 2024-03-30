import { useAppDispatch, useAppSelector } from '@/store';
import { resetUser_, selectUser, setUserPlans_, setUser_ } from '@/store/slices/userSlice';
import { IPlans, ISignupPayload } from '@/types';

export default function useUser() {
  const dispatch = useAppDispatch();
  const { user, plans } = useAppSelector(selectUser);

  function SetUser(_user: ISignupPayload): void {
    dispatch(setUser_(_user));
  }
  function SetUserPlans(plans_: IPlans[]): void {
    dispatch(setUserPlans_(plans_));
  }

  function ResetUser(): void {
    dispatch(resetUser_());
  }

  function UserData(): ISignupPayload | null {
    return user;
  }
  function getUsersPlans(): IPlans[] | null {
    return plans;
  }

  return { SetUser, ResetUser, UserData, getUsersPlans, SetUserPlans };
}
