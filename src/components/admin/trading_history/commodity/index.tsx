'use client';
import React, { useEffect, useState } from 'react';
import styles from './commodity_history.module.scss';
import EquityCard from '@/components/cards/equity_card';
import useLoading from '@/components/loading/Loader';
import { apiService } from '@/utils';
import { useUser } from '@/hooks';
import useDebounce from '@/components/Usedebounce';
import { toast } from 'react-toastify';

import PaginationComponent from '@/components/Pagination/Pagination';
import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/InputField/SelectField';
import OptionsCard from '@/components/cards/option_card';

const CommodityHistory = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataList, setDataList] = useState([]);
  const [postsPerPage] = useState<number>(2);
  const debounceDelay = 500; // Adjust debounce delay as needed
  // total no of data
  const [totalEvents, setTotalEvents] = useState(0);
  const { UserData } = useUser();
  const [searchData, setSearchData] = useState('');
  const debouncedSearchQuery = useDebounce(searchData, debounceDelay);
  const [optionType, setOptionType] = useState('');
  const [tradingType, setTradingType] = useState('equity');

  const corporateList = async () => {
    startLoading();

    try {
      let data: { search?: string; filter?: { option_type: string }; trading_type?: string } = {};
      if (tradingType) {
        data.trading_type = tradingType;
      }
      if (tradingType && debouncedSearchQuery) {
        data.trading_type = tradingType;
        data.search = debouncedSearchQuery;
      }

      if (tradingType && optionType) {
        data.trading_type = tradingType;
        data.filter = {
          option_type: optionType,
        };
      }

      if (debouncedSearchQuery && optionType) {
        data = {
          ...data,
          filter: {
            option_type: optionType,
          },
        };
      }
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.post(`/admin/${UserData()?._id}/get-mcx-trading`, data);

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
  }, [currentPage, postsPerPage, debouncedSearchQuery, tradingType]);

  const setPage = (i: number) => {
    setCurrentPage(i);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchData(value);
  };
  const handleTradingType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDataList([]);
    setTradingType(e.target.value);
  };

  return (
    <>
      <div className={`${styles.commodity_history} element_center flex-column`}>
        <div className={styles.search_data}>
          <span className={styles.type}>Commodity</span>
          <div className={styles.input_container}>
            <SelectField
              label=""
              name="trading_type"
              options={[
                { label: 'Option', value: 'option' },
                { label: 'Equity', value: 'equity' },
              ]}
              value={tradingType}
              onChange={handleTradingType}
            />
            <InputField
              type="text"
              placeholder="Search for Share name"
              name="search_data"
              value={searchData}
              onChange={handleSearch}
              className={styles.search_share}
            />
            {tradingType === 'option' && (
              <SelectField
                label=""
                name="buySale"
                options={[
                  { label: 'Select option', value: '' },
                  { label: 'Open', value: 'open' },
                  { label: 'Hedge', value: 'hedge' },
                ]}
                value={optionType}
                onChange={e => setOptionType(e.target.value)}
              />
            )}
          </div>
        </div>
        {!isLoading ? (
          <div className={styles.innr_trading_history}>
            {dataList.length !== 0 ? (
              <>
                {tradingType === 'equity'
                  ? dataList.map((item, index) => {
                      return <EquityCard key={index} dataList={item} />;
                    })
                  : // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    dataList.map((item: any, index: React.Key | null | undefined) => {
                      return (
                        <>
                          {item.option_type === 'hedge' ? (
                            <OptionsCard dataList={item.hedge} key={index} option_type={item.option_type} />
                          ) : (
                            <OptionsCard dataList={item.open} key={index} option_type={item.option_type} />
                          )}
                        </>
                      );
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

export default CommodityHistory;
