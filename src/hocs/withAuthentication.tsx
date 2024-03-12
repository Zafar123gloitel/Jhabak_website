'use client';
import React, { ComponentType, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth, useUser } from '@/hooks';

function withAuthentication<P extends object>(WrappedComponent: ComponentType<P>) {
  const EnhancedComponent: React.FC<P> = props => {
    const path = usePathname();
    const router = useRouter();
    const { IsLoggedIn } = useAuth();
    const { ResetUser, UserData } = useUser();
    const role = UserData()?.role;

    useEffect(() => {
      if (!IsLoggedIn()) {
        ResetUser();
        router.push('/login');
      } else {
        if (role === 'admin' && path.startsWith('/admin')) {
          router.push(path);
        } else if (role === 'user' && path.startsWith('/client')) {
          router.push(path); // Adjust the path for user profile accordingly
        } else {
          router.push('/');
        }
      }
    }, [IsLoggedIn, ResetUser, path, role, router]);

    return <WrappedComponent {...props} />;
  };

  return EnhancedComponent;
}

export default withAuthentication;
