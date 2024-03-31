'use client';
import React, { useEffect, useState } from 'react';
import styles from './equity_history.module.scss';
import EquityCard from '@/components/cards/equity_card';
import useLoading from '@/components/loading/Loader';

import { apiService } from '@/utils';
import { useUser } from '@/hooks';
import useDebounce from '@/components/Usedebounce';
import { toast } from 'react-toastify';

import PaginationComponent from '@/components/Pagination/Pagination';
import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/InputField/SelectField';

const EquityHistory = () => {
  const [buySell, setBuySell] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataList, setDataList] = useState([]);
  const [postsPerPage] = useState<number>(10);
  const debounceDelay = 500; // Adjust debounce delay as needed
  // total no of data
  const [totalEvents, setTotalEvents] = useState(0);
  const { UserData } = useUser();
  const [searchData, setSearchData] = useState('');
  const debouncedSearchQuery = useDebounce(searchData, debounceDelay);
  const { isLoading, startLoading, stopLoading } = useLoading();

  const corporateList = async () => {
    startLoading();
    // let data;

    try {
      let data: { search?: string; filter?: { buy_sell_type: string } } = {};

      if (debouncedSearchQuery) {
        data.search = debouncedSearchQuery;
      }

      if (buySell) {
        data.filter = {
          buy_sell_type: buySell,
        };
      }

      // If both debouncedSearchQuery and buySell exist, merge them into the data object
      if (debouncedSearchQuery && buySell) {
        data = {
          ...data,
          filter: {
            buy_sell_type: buySell,
          },
        };
      }

      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.post(
        `/admin/${UserData()?._id}/get-equity-trading?page=${currentPage}&limit=${postsPerPage}&sort=desc`,
        data
      );

      if (response?.status === 200 && response?.success) {
        setDataList(response?.payload);
        setTotalEvents(response?.count);
      } else {
        toast.error('something went wrong');
      }
      setTotalEvents(2);
    } catch (error: unknown) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (error?.response?.data?.message) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return toast.error(error.response.data.message);
      }

      const typeError = error as Error;
      return toast.error(typeError.message);
    } finally {
      stopLoading();
    }
  };
  useEffect(() => {
    corporateList();
  }, [currentPage, postsPerPage, debouncedSearchQuery, buySell]);

  const setPage = (i: number) => {
    setCurrentPage(i);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchData(value);
  };
  return (
    <>
      <div className={`${styles.trading_history} element_center flex-column`}>
        <div className={styles.search_data}>
          <span className={styles.type}>Equity</span>
          <div className={styles.input_container}>
            <InputField
              type="text"
              placeholder="Search for Share name"
              name="search_data"
              value={searchData}
              onChange={handleSearch}
              className={styles.search_share}
            />
            <SelectField
              label=""
              name="buySale"
              options={[
                { label: 'Select Trading Type', value: '' },
                { label: 'Buy', value: 'buy' },
                { label: 'Sell', value: 'sell' },
              ]}
              value={buySell}
              onChange={e => setBuySell(e.target.value)}
            />
          </div>
        </div>

        {!isLoading ? (
          <div className={styles.innr_trading_history}>
            {dataList.length !== 0 ? (
              <>
                {dataList.map((item, index) => {
                  return <EquityCard key={index} dataList={item} />;
                })}

                <PaginationComponent
                  total={totalEvents}
                  current={currentPage}
                  onChange={setPage}
                  pageSize={postsPerPage}
                />
              </>
            ) : (
              'Data Not Found!'
            )}
          </div>
        ) : (
          // <MainLoader />
          'loading'
        )}
      </div>
    </>
  );
};

export default EquityHistory;
