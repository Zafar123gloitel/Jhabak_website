'use client';
import React from 'react';
import { withAuthentication } from '@/hocs';
import EnquiryHandleList from '@/components/admin/enquiryHandle';

const Inquerypage = () => {
  return <EnquiryHandleList />;
};

export default withAuthentication(Inquerypage);
