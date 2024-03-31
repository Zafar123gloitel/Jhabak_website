'use client';
import React from 'react';
import { withAuthentication } from '@/hocs';
import EquityHistory from '@/components/admin/trading_history/equity';

const Equity = () => {
  return (
    <>
      <EquityHistory />
    </>
  );
};

export default withAuthentication(Equity);
