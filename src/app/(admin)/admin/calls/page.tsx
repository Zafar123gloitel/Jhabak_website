'use client';
import React from 'react';
import withAuthentication from '@/hoc/withAuthentication';
import TradingCalls from '@/components/admin/tradingCalls';

const Calls = () => {
  return (
    <>
      <TradingCalls />
    </>
  );
};

export default withAuthentication(Calls);
