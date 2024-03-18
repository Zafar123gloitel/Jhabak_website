'use client';
import React, { ComponentType, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth, useUser } from '@/hooks';

function withAuthentication<P extends object>(WrappedComponent: ComponentType<P>) {
  const EnhancedComponent: React.FC<P> = props => {
    const path = usePathname();
    const router = useRouter();
    const { IsLoggedIn } = useAuth();
    const { UserData } = useUser();
    const role = UserData()?.role;

    useEffect(() => {
      if (IsLoggedIn() === false) {
        router.replace('/login');
      } else if (role === 'admin') {
        router.push('/admin/clients');
      } else if (role === 'user') {
        router.push('/client'); // Adjust the path for user profile accordingly
      }
    }, [IsLoggedIn, path, role, router]);

    return <WrappedComponent {...props} />;
  };

  return EnhancedComponent;
}

export default withAuthentication;
