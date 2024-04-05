'use client';
import React, { useEffect, useState } from 'react';
import styles from './equity.module.scss';
import SelectField from '@/components/InputField/SelectField';
import InputField from '@/components/InputField/InputField';
// import Equity_Card from '@/components/client/plans/cards/Equity_card/Equity_card';
import { toast } from 'react-toastify';
import useDebounce from '@/components/Usedebounce';
import useLoading from '@/components/Loader/Loader';
import { apiService } from '@/utils';
import PaginationComponent from '@/components/Pagination/Pagination';
import EquityCard from '@/components/cards/equity_card';
import { useUser } from '@/hooks';

export default function Equity_history() {
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchData(value);
  };

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

  return (
    <>
      <div className={`${styles.commodity_history} element_center flex-column`}>
        <div className={styles.equity_client_search}>
          <div className={styles.input_container}>
            <InputField
              type="text"
              placeholder="Search for Share name"
              name="Search for Share name"
              value={searchData}
              onChange={handleSearch}
              className={styles.search_share}
            />

            <SelectField
              label=""
              name="equity_trading"
              options={[
                { label: 'Buy/Sell', value: '' },
                { label: 'Buy', value: 'buy' },
                { label: 'Sell', value: 'sell' },
              ]}
              value={buySell}
              onChange={e => setBuySell(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.innr_trading_history}>
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

          {/* <>
            <h1>equity</h1>
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
          </> */}

          {/* 
          <PaginationComponent total={totalEvents} current={currentPage} onChange={setPage} pageSize={postsPerPage} /> */}
        </div>
      </div>
    </>
  );
}
