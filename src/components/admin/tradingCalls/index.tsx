'use client';
import React, { useState } from 'react';
// import { toast } from 'react-toastify';
import MainLoader from '@/components/loading';
import TabComponent from '@/components/TabComponents';
import useLoading from '@/components/loading/Loader';
import EquityTrading from './equityTrading';
import OptionTrading from './optionTrading';
import CommodityTrading from './commodityTrading';
import { tradingCallsTab } from './optionConfig';

const TradingCalls = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [postsPerPage] = useState<number>(5);
  // const [dataList, setDataList] = useState([]);
  // const [totalEvents, setTotalEvents] = useState(0);
  startLoading;
  stopLoading;
  const [activeTab, setActiveTab] = useState('equity_trading');

  const [tabData] = useState(tradingCallsTab);

  const handleTabChange = (selectedTab: string) => {
    setActiveTab(selectedTab);
  };
  // useEffect(() => {
  //   corporateList();
  // }, [currentPage, postsPerPage]);

  return (
    <>
      <div className={`create_employee`}>
        <div>
          <TabComponent activeKey={activeTab} tabOptions={tabData} onChangeTab={handleTabChange} />
          {!isLoading ? <>{activeTab === 'equity_trading' && <EquityTrading />}</> : <MainLoader />}
          {!isLoading ? <>{activeTab === 'option_trading' && <OptionTrading />}</> : <MainLoader />}
          {!isLoading ? <>{activeTab === 'commodity_trading' && <CommodityTrading />}</> : <MainLoader />}
          {/* {activeTab === 'create_client' && <CreateClientSection />} */}
        </div>
      </div>
    </>
  );
};

export default TradingCalls;
