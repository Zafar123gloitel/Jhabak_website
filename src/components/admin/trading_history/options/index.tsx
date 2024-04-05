'use client';
import React, { useEffect, useState } from 'react';
import styles from './options.module.scss';
import OptionsCard from '@/components/cards/option_card';

import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/InputField/SelectField';
import { toast } from 'react-toastify';
import { apiService } from '@/utils';
import useLoading from '@/components/Loader/Loader';
import { useUser } from '@/hooks';
import useDebounce from '@/components/Usedebounce';
import PaginationComponent from '@/components/Pagination/Pagination';

const OptionHistory = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataList, setDataList] = useState([]);
  const [postsPerPage] = useState<number>(8);
  const debounceDelay = 500; // Adjust debounce delay as needed
  // total no of data
  const [totalEvents, setTotalEvents] = useState(0);
  const { UserData } = useUser();
  const [searchData, setSearchData] = useState('');
  const debouncedSearchQuery = useDebounce(searchData, debounceDelay);
  const [optionType, setOptionType] = useState('');

  const corporateList = async () => {
    startLoading();
    // let data;

    try {
      let data: { search?: string; filter?: { option_type: string }; trading_type?: string } = {};

      if (debouncedSearchQuery) {
        data.search = debouncedSearchQuery;
      }

      if (optionType) {
        data.filter = {
          option_type: optionType,
        };
      }

      // If both debouncedSearchQuery and buySell exist, merge them into the data object
      if (debouncedSearchQuery && optionType) {
        data = {
          ...data,
          filter: {
            option_type: optionType,
          },
        };
      }

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
  }, [currentPage, postsPerPage, debouncedSearchQuery, optionType]);

  const setPage = (i: number) => {
    setCurrentPage(i);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchData(value);
  };
  return (
    <section className={`${styles.option_history} flex-column element_center`}>
      <div className={styles.search_data}>
        <span className={styles.type}>Option</span>
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
              { label: 'Select option', value: '' },
              { label: 'Open', value: 'open' },
              { label: 'Hedge', value: 'hedge' },
            ]}
            value={optionType}
            onChange={e => setOptionType(e.target.value)}
          />
        </div>
      </div>

      {!isLoading ? (
        <div className={styles.innr_option_history}>
          {dataList.length !== 0 ? (
            <>
              {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    </section>
  );
};

export default OptionHistory;
