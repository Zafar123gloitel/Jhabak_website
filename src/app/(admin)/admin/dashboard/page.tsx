'use client';
import React from 'react';
import { withAuthentication } from '@/hocs';
const Dashboard = () => {
  return (
    <div>
      <div>Corporate---------Wellness</div>
    </div>
  );
};

export default withAuthentication(Dashboard);
