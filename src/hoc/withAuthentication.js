'use client';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, RESET_USER_DATA } from '@/store/user/userSlice';

function withAuthentication(WrappedComponent) {
  function WithAuth(props) {
    const path = usePathname();
    const router = useRouter();
    const dispatch = useDispatch();
    const { accessToken, refreshToken, dataUser } = useSelector(selectUser);
    useEffect(() => {
      if (!accessToken || !refreshToken || !dataUser?.role) {
        dispatch(RESET_USER_DATA());
        router.push('/login');
      } else if (accessToken && refreshToken) {
        if (dataUser?.role === 'admin' && path.startsWith('/admin')) {
          router.push(path);
          // eslint-disable-next-line sonarjs/no-duplicated-branches
        } else if (dataUser?.role === 'user' && path.startsWith('/client')) {
          router.push(path); // Adjust the path for user profile accordingly
        }
        // else if (path === '/login') {
        //   router.push('/'); // Adjust the path for user profile accordingly
        // }
        else {
          router.push('/');
        }
      }
    }, [accessToken, refreshToken, dataUser?.role, path, router, dispatch]);

    return <WrappedComponent {...props} />;
  }

  return WithAuth;
}

export default withAuthentication;
