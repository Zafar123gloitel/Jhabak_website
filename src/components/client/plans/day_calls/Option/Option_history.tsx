'use client';
import React, { useEffect, useState } from 'react';
// import styles from './Equity_history.module.scss';
import SelectField from '@/components/InputField/SelectField';
// import Option_card from '@/components/client/plans/cards/Option_card/Option_card';
import { toast } from 'react-toastify';
import styles from './Option.module.scss';
import OptionsCard from '@/components/cards/option_card';

import { apiService } from '@/utils';
import useLoading from '@/components/Loader/Loader';
import { useUser } from '@/hooks';
import PaginationComponent from '@/components/Pagination/Pagination';

export default function Option_history() {
  const { isLoading, startLoading, stopLoading } = useLoading();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataList, setDataList] = useState([]);
  const [postsPerPage] = useState<number>(10);

  // total no of data
  const [totalEvents, setTotalEvents] = useState(0);
  const { UserData } = useUser();

  const [optionType, setOptionType] = useState('');

  const corporateList = async () => {
    startLoading();
    // let data;

    try {
      const data: { filter?: { option_type: string } } = {};

      // if (debouncedSearchQuery) {
      //   data.search = debouncedSearchQuery;
      // }

      if (optionType) {
        data.filter = {
          option_type: optionType,
        };
      }

      // If both debouncedSearchQuery and buySell exist, merge them into the data object
      // if (debouncedSearchQuery && optionType) {
      //   data = {
      //     ...data,
      //     filter: {
      //       option_type: optionType,
      //     },
      //   };
      // }

      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.post(
        `/admin/${UserData()?._id}/get-option-trading?page=${currentPage}&limit=${postsPerPage}&sort=desc`,
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
  }, [currentPage, postsPerPage, optionType]);

  const setPage = (i: number) => {
    setCurrentPage(i);
  };

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setSearchData(value);
  // };

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
                { label: 'Open', value: 'open' },
                { label: 'Hedge', value: 'hedge' },
              ]}
              value={optionType}
              onChange={e => setOptionType(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.innr_trading_history}>
          {!isLoading ? (
            <div className={styles.innr_option_history}>
              {dataList.length !== 0 ? (
                <>
                  {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    dataList.map((item: any, index: React.Key | null | undefined) => {
                      return (
                        <>
                          <div className={`${styles.optiondiv}`}>
                            {item.option_type === 'hedge' ? (
                              <OptionsCard dataList={item.hedge} key={index} option_type={item.option_type} />
                            ) : (
                              <OptionsCard dataList={item.open} key={index} option_type={item.option_type} />
                            )}
                          </div>
                        </>
                      );
                    })
                  }

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
            <Option_card />
            <Option_card />
            <Option_card />
            <Option_card />
            <Option_card />
            <Option_card />
            <Option_card />
            <Option_card />
            <Option_card />
          </> */}

          {/* 
          <PaginationComponent total={totalEvents} current={currentPage} onChange={setPage} pageSize={postsPerPage} /> */}
        </div>
      </div>
    </>
  );
}
