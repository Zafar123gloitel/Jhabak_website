'use client';
import React, { useEffect } from 'react';
import { Login } from '@/components';
import { useRouter } from 'next/navigation';
import { useAuth, useUser } from '@/hooks';

const LoginPage = () => {
  const { IsLoggedIn } = useAuth();
  const { UserData } = useUser();
  const role = UserData()?.role;
  const router = useRouter();

  useEffect(() => {
    if (IsLoggedIn() && role === 'admin') {
      router.push('/admin/clients');
    } else if (IsLoggedIn() && role === 'user') {
      router.push('/client/dashboard');
    } else {
      router.replace('/login');
    }
  }, [IsLoggedIn, role, router]);

  return <Login />;
};

export default LoginPage;
