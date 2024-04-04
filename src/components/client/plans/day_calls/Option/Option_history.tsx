'use client';
import React, { useState } from 'react';
import styles from './Equity_history.module.scss';
import SelectField from '@/components/InputField/SelectField';
import Option_card from '@/components/client/plans/cards/Option_card/Option_card';
// import PaginationComponent from '@/components/Pagination/Pagination';

export default function Option_history() {
  const [tradingType, setTradingType] = useState('equity');
  //   const [optionType, setOptionType] = useState('');

  const handleTradingType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTradingType(e.target.value);
  };

  return (
    <>
      <div className={`${styles.commodity_history} element_center flex-column`}>
        <div className={styles.search_data}>
          {/* <span className={styles.type}> */}

          {/* </span> */}
          <div className={styles.input_container}>
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
          </div>
        </div>

        <div className={styles.innr_trading_history}>
          <>
            <h1>option</h1>
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

          {/* 
          <PaginationComponent total={totalEvents} current={currentPage} onChange={setPage} pageSize={postsPerPage} /> */}
        </div>
      </div>
    </>
  );
}
