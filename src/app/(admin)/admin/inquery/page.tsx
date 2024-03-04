'use client';
import React from 'react';
import withAuthentication from '@/hoc/withAuthentication';
import EnquiryHandleList from '@/components/uiAdmin/enquiryHandle';

const Inquerypage = () => {
  return <EnquiryHandleList />;
};

export default withAuthentication(Inquerypage);
