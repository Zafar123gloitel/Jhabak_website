'use client';
import React, { useState } from 'react';
import styles from './Equity_history.module.scss';
import SelectField from '@/components/InputField/SelectField';
import InputField from '@/components/InputField/InputField';
import TabComponent from '@/components/TabComponents';
import Equity_Card from '@/components/client/plans/cards/Equity_card/Equity_card';
import Option_card from '@/components/client/plans/cards/Option_card/Option_card';
// import PaginationComponent from '@/components/Pagination/Pagination';

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

export default function Equity_history() {
  const [activeTab, setActiveTab] = useState(tabData[0].name);

  const [searchData, setSearchData] = useState('');
  const [tradingType, setTradingType] = useState('equity');
  //   const [optionType, setOptionType] = useState('');

  const handleTabChange = (selectedTab: string) => {
    setActiveTab(selectedTab);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchData(value);
  };
  const handleTradingType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTradingType(e.target.value);
  };

  return (
    <>
      <div className={`${styles.commodity_history} element_center flex-column`}>
        <div className={styles.search_data}>
          {/* <span className={styles.type}> */}
          <div>
            <TabComponent activeKey={activeTab} tabOptions={tabData} onChangeTab={handleTabChange} />
          </div>
          {/* </span> */}
          <div className={styles.input_container}>
            {activeTab === 'equity_trading' && (
              <InputField
                type="text"
                placeholder="Search for Share name"
                name="Search for Share name"
                value={searchData}
                onChange={handleSearch}
                className={styles.search_share}
              />
            )}
            {activeTab === 'equity_trading' && (
              <SelectField
                label=""
                name="equity_trading"
                options={[
                  { label: 'Buy/Sell', value: '' },
                  { label: 'Buy', value: 'buy' },
                  { label: 'Sell', value: 'sell' },
                ]}
                value={tradingType}
                onChange={handleTradingType}
              />
            )}
            {activeTab === 'option_trading' && (
              <SelectField
                label=""
                name="option_type"
                options={[
                  { label: 'Option Type', value: '' },
                  { label: 'Open', value: 'buy' },
                  { label: 'Hedge', value: 'sell' },
                ]}
                value={tradingType}
                onChange={handleTradingType}
              />
            )}
            {activeTab === 'mcx' && (
              <SelectField
                label=""
                name="mcx"
                options={[
                  { label: 'mcx', value: '' },
                  { label: 'Equity', value: 'equity' },
                  { label: 'Option', value: 'option' },
                ]}
                value={tradingType}
                onChange={handleTradingType}
              />
            )}
            {activeTab === 'mcx' && (
              <SelectField
                label=""
                name="mcx_Type "
                options={[
                  { label: 'Buy/Sell', value: '' },
                  { label: 'Buy', value: 'buy' },
                  { label: 'Sell', value: 'sell' },
                ]}
                value={tradingType}
                onChange={handleTradingType}
              />
            )}
          </div>
        </div>

        <div className={styles.innr_trading_history}>
          {activeTab === 'equity_trading' && (
            <>
              <Equity_Card />
              <Equity_Card />
              <Equity_Card />
              <Equity_Card />
              <Equity_Card />
              <Equity_Card />
              <Equity_Card />
              <Equity_Card />
              <Equity_Card />
              <Equity_Card />
            </>
          )}
          {activeTab === 'option_trading' && (
            <>
              <Option_card />
              <Option_card />
              <Option_card />
              <Option_card />
              <Option_card />
              <Option_card />
              <Option_card />
              <Option_card />
              <Option_card />
            </>
          )}
          {activeTab === 'mcx' && (
            <>
              <Equity_Card />
              <Equity_Card />
              <Equity_Card />
              <Equity_Card />
              <Equity_Card />
              <Option_card />
              <Option_card />
              <Option_card />
              <Option_card />
              <Option_card />
            </>
          )}
          {/* 
          <PaginationComponent total={totalEvents} current={currentPage} onChange={setPage} pageSize={postsPerPage} /> */}
        </div>
      </div>
    </>
  );
}
