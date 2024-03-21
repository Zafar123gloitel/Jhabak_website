'use client';
import React from 'react';
import { withAuthentication } from '@/hocs';
import CreateClient from '@/components/admin/clientList';

const Clientsss = () => {
  return <CreateClient />;
};
export default withAuthentication(Clientsss);
