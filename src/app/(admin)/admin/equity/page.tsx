'use client';
import React from 'react';
import { withAuthentication } from '@/hocs';
import EquityHistory from '@/components/admin/trading_history/equity';

const Calls = () => {
  return (
    <>
      <EquityHistory />
    </>
  );
};

export default withAuthentication(Calls);
