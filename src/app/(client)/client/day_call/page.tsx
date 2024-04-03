'use client';
import React, { useState } from 'react';
import Equity_trading from '@/components/client/plans/day_calls/Equity_Trading/Equity_Trading';
import Option_trading from '@/components/client/plans/day_calls/Option_Trading/Option_trading';
import style from './call.module.scss';
import TabComponent from '@/components/TabComponents';

interface ITabData {
  _id: number;
  name: string;
  alt: string;
}

const tabData: ITabData[] = [
  {
    _id: 3121,
    name: 'equity_trading',
    alt: 'Equity Trading',
  },
  {
    _id: 3122,
    name: 'option_trading',
    alt: 'Options Trading',
  },
  {
    _id: 3123,
    name: 'mcx',
    alt: 'MCX',
  },
];

const PageCom = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].name);

  const handleTabChange = (selectedTab: string) => {
    setActiveTab(selectedTab);
  };

  return (
    <>
      <section className={`${style.maincontainer}`}>
        <div className={`${style.hedaingcontainer}`}>
          <TabComponent activeKey={activeTab} tabOptions={tabData} onChangeTab={handleTabChange} />
        </div>

        <div className={`${style.daycallcontainer}`}>
          {activeTab === 'equity_trading' && <Equity_trading />}
          {activeTab === 'option_trading' && <Option_trading />}
          {activeTab === 'mcx' && <Equity_trading />}
        </div>
      </section>
    </>
  );
};

export default PageCom;
