'use client';
import React from 'react';
import withAuthentication from '@/hoc/withAuthentication';
import CreateClient from '@/components/uiAdmin/clientList';
const Clientsss = () => {
  return <CreateClient />;
};
export default withAuthentication(Clientsss);
