'use client';
import React, { useEffect, useState } from 'react';
import styles from './Mcx_history.module.scss';
import SelectField from '@/components/InputField/SelectField';

import { toast } from 'react-toastify';
import { apiService } from '@/utils';
import useLoading from '@/components/Loader/Loader';

import { useUser } from '@/hooks';
import PaginationComponent from '@/components/Pagination/Pagination';
import OptionsCard from '@/components/cards/option_card';
import EquityCard from '@/components/cards/equity_card';
// import PaginationComponent from '@/components/Pagination/Pagination';

export default function Mcx_history() {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataList, setDataList] = useState([]);
  const [postsPerPage] = useState<number>(2);

  // total no of data
  const [totalEvents, setTotalEvents] = useState(0);
  const { UserData } = useUser();

  const [optionType, setOptionType] = useState('');
  const [tradingType, setTradingType] = useState('equity');

  const corporateList = async () => {
    startLoading();

    try {
      const data: { search?: string; filter?: { option_type: string }; trading_type?: string } = {};
      if (tradingType) {
        data.trading_type = tradingType;
      }

      if (tradingType && optionType) {
        data.trading_type = tradingType;
        data.filter = {
          option_type: optionType,
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
  }, [currentPage, postsPerPage, tradingType, optionType]);

  const setPage = (i: number) => {
    setCurrentPage(i);
  };

  const handleTradingType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDataList([]);
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

        <div className={styles.innr_trading_history}>
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
          {/* <>
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
          </> */}

          {/* 
          <PaginationComponent total={totalEvents} current={currentPage} onChange={setPage} pageSize={postsPerPage} /> */}
        </div>
      </div>
    </>
  );
}
