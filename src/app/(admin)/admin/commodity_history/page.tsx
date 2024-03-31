'use client';
import React from 'react';
import { withAuthentication } from '@/hocs';

import CommodityHistory from '@/components/admin/trading_history/commodity';

const Equity = () => {
  return (
    <>
      <CommodityHistory />
    </>
  );
};

export default withAuthentication(Equity);
