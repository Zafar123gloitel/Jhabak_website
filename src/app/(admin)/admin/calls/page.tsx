'use client';
import React from 'react';
import { withAuthentication } from '@/hocs';
import TradingCalls from '@/components/admin/tradingCalls';

const Calls = () => {
  return (
    <>
      <TradingCalls />
    </>
  );
};

export default withAuthentication(Calls);
