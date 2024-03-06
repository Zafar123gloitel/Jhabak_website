'use client';
import React from 'react';
import { Login } from '@/components';
import withAuthentication from '@/hoc/withAuthentication';

const LoginPage = () => {
  return <Login />;
};

export default withAuthentication(LoginPage);
