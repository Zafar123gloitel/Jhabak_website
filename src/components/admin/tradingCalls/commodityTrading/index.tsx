'use client';
import React, { useState } from 'react';
// import { toast } from 'react-toastify';
import MainLoader from '@/components/loading';
import TabComponent from '@/components/TabComponents';
import useLoading from '@/components/loading/Loader';
import CommodityOption from './commodityOption';
import CommodityEquity from './commodityEquity';

const CommodityTrading = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [postsPerPage] = useState<number>(5);
  // const [dataList, setDataList] = useState([]);
  // const [totalEvents, setTotalEvents] = useState(0);
  startLoading;
  stopLoading;
  const [activeTab, setActiveTab] = useState('commodity_option');

  const [tabData] = useState([
    {
      _id: '',
      name: 'commodity_equity',
      alt: 'Commodity Equity',
    },
    {
      _id: '',
      name: 'commodity_option',
      alt: 'Commodity Option',
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
          {!isLoading ? <>{activeTab === 'commodity_option' && <CommodityOption />}</> : <MainLoader />}
          {!isLoading ? <>{activeTab === 'commodity_equity' && <CommodityEquity />}</> : <MainLoader />}
          {/* {activeTab === 'create_client' && <CreateClientSection />} */}
        </div>
      </div>
    </>
  );
};

export default CommodityTrading;
