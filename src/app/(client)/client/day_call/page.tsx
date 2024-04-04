'use client';
import React, { useEffect, useState } from 'react';
import Equity_trading from '@/components/client/plans/day_calls/Equity/Equity_history';
import Option_trading from '@/components/client/plans/day_calls/Option/Option_history';
import Mcx_trading from '@/components/client/plans/day_calls/Mcx/Mcx_history';

import style from '@/components/client/plans/day_calls/Equity/Equity_history.module.scss';
import TabComponent from '@/components/TabComponents';
import { useUser } from '@/hooks';

interface ITabData {
  _id: number;
  name: string;
  alt: string;
}

const tabData1: ITabData[] = [
  {
    _id: 3121,
    name: 'equity_trading',
    alt: 'Equity Trading',
  },
];
const tabData2: ITabData[] = [
  {
    _id: 3122,
    name: 'option_trading',
    alt: 'Options Trading',
  },
];
const tabData3: ITabData[] = [
  {
    _id: 3123,
    name: 'mcx',
    alt: 'MCX',
  },
];

const DayCall = () => {
  const { getUsersPlans } = useUser();
  const [activeTab, setActiveTab] = useState<string>();

  useEffect(() => {
    if (getUsersPlans()?.[0].trading_type.includes('equity')) {
      setActiveTab(tabData1[0].name);
    } else if (getUsersPlans()?.[0].trading_type.includes('option')) {
      setActiveTab(tabData2[0].name);
    } else if (getUsersPlans()?.[0].trading_type.includes('commodity')) {
      setActiveTab(tabData3[0].name);
    }
  }, []);

  const handleTabChange = (selectedTab: string) => {
    setActiveTab(selectedTab);
  };

  return (
    <>
      <section className={`${style.maincontainer}`}>
        <div className={`${style.hedaingcontainer} d-flex`}>
          {getUsersPlans()?.[0].trading_type.includes('equity') && (
            <TabComponent activeKey={activeTab} tabOptions={tabData1} onChangeTab={handleTabChange} />
          )}
          {getUsersPlans()?.[0].trading_type.includes('option') && (
            <TabComponent activeKey={activeTab} tabOptions={tabData2} onChangeTab={handleTabChange} />
          )}
          {getUsersPlans()?.[0].trading_type.includes('commodity') && (
            <TabComponent activeKey={activeTab} tabOptions={tabData3} onChangeTab={handleTabChange} />
          )}
        </div>
        <div className={`${style.daycallcontainer}`}>
          {activeTab === 'equity_trading' && getUsersPlans()?.[0].trading_type.includes('equity') && <Equity_trading />}
          {activeTab === 'option_trading' && getUsersPlans()?.[0].trading_type.includes('option') && <Option_trading />}
          {activeTab === 'mcx' && getUsersPlans()?.[0].trading_type.includes('commodity') && <Mcx_trading />}
        </div>
      </section>
    </>
  );
};

export default DayCall;
