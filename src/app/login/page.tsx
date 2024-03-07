'use client';
import React from 'react';
import { Login } from '@/components';
import { withAuthentication } from '@/hocs';

const LoginPage = () => {
  return <Login />;
};

export default withAuthentication(LoginPage);
