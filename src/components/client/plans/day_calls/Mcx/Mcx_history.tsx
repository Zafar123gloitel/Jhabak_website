'use client';
import React, { useState } from 'react';
import styles from './Equity_history.module.scss';
import SelectField from '@/components/InputField/SelectField';

import Equity_Card from '@/components/client/plans/cards/Equity_card/Equity_card';
import Option_card from '@/components/client/plans/cards/Option_card/Option_card';
// import PaginationComponent from '@/components/Pagination/Pagination';

export default function Mcx_history() {
  const [tradingType, setTradingType] = useState('equity');

  const handleTradingType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTradingType(e.target.value);
  };

  return (
    <>
      <div className={`${styles.commodity_history} element_center flex-column`}>
        <div className={styles.search_data}>
          <div className={styles.input_container}>
            <SelectField
              label=""
              name="mcx"
              options={[
                { label: 'Equity', value: 'equity' },
                { label: 'Option', value: 'option' },
              ]}
              value={tradingType}
              onChange={handleTradingType}
            />

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
          </div>
        </div>

        <div className={styles.innr_trading_history}>
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

          {/* 
          <PaginationComponent total={totalEvents} current={currentPage} onChange={setPage} pageSize={postsPerPage} /> */}
        </div>
      </div>
    </>
  );
}
