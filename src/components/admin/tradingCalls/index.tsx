'use client';
import React, { useState } from 'react';
// import { toast } from 'react-toastify';
import MainLoader from '@/components/loading';
import TabComponent from '@/components/TabComponents';
import useLoading from '@/components/loading/Loader';
import EquityTrading from './equityTrading';
import OptionTrading from './optionTrading';
import CommodityTrading from './commodityTrading';

const TradingCalls = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [postsPerPage] = useState<number>(5);
  // const [dataList, setDataList] = useState([]);
  // const [totalEvents, setTotalEvents] = useState(0);
  startLoading;
  stopLoading;
  const [activeTab, setActiveTab] = useState('equity_trading');

  const [tabData] = useState([
    {
      _id: '',
      name: 'equity_trading',
      alt: 'Equity Trading',
    },
    {
      _id: '',
      name: 'option_trading',
      alt: 'Option Trading',
    },
    {
      _id: '',
      name: 'commodity_trading',
      alt: 'Commodity Trading',
    },
    {
      _id: '',
      name: 'equity_option_list',
      alt: 'Equity/Option List',
    },
  ]);

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
