'use client';
import React from 'react';
import { withAuthentication } from '@/hocs';
import OptionHistory from '@/components/admin/trading_history/options';

const Option = () => {
  return (
    <>
      <OptionHistory />
    </>
  );
};

export default withAuthentication(Option);
