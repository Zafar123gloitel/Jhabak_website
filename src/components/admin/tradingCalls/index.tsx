'use client';
import React, { useState } from 'react';
import MainLoader from '@/components/loading';
import TabComponent from '@/components/TabComponents';
import useLoading from '@/components/loading/Loader';
import EquityTrading from './equityTrading';
import OptionTrading from './optionTrading';
import CommodityTrading from './commodityTrading';
import { tradingCallsTab } from './optionConfig';

const TradingCalls = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();

  startLoading;
  stopLoading;
  const [activeTab, setActiveTab] = useState('equity_trading');

  const [tabData] = useState(tradingCallsTab);

  const handleTabChange = (selectedTab: string) => {
    setActiveTab(selectedTab);
  };

  return (
    <>
      <div className={`create_employee`}>
        <div>
          <TabComponent activeKey={activeTab} tabOptions={tabData} onChangeTab={handleTabChange} />
          {!isLoading ? <>{activeTab === 'equity_trading' && <EquityTrading />}</> : <MainLoader />}
          {!isLoading ? <>{activeTab === 'option_trading' && <OptionTrading />}</> : <MainLoader />}
          {!isLoading ? <>{activeTab === 'commodity_trading' && <CommodityTrading />}</> : <MainLoader />}
        </div>
      </div>
    </>
  );
};

export default TradingCalls;
