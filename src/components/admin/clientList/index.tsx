'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import MainLoader from '@/components/loading';
import TabComponent from '@/components/TabComponents';
import useLoading from '@/components/loading/Loader';
import { tabData } from './clientData';
// import ClientList from './client-list/ClientList';
import { apiService } from '@/utils';
import useDebounce from '@/components/Usedebounce';
import { useUser } from '@/hooks';
// import ClientList from './client-list/ClientList';
import CreateClientForm from './CreateClient';
import ClientDetails from './client-list/ClientDetails';
const CreateClient = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(2);
  const [dataList, setDataList] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [activeTab, setActiveTab] = useState('create_client');
  const [searchData] = useState('');
  const debounceDelay = 500; // Adjust debounce delay as needed
  const debouncedSearchQuery = useDebounce(searchData, debounceDelay);
  const { UserData } = useUser();

  // console.log(setSearchData);
  const corporateList = async () => {
    startLoading();
    let data;

    try {
      if (debouncedSearchQuery) {
        data = {
          search: debouncedSearchQuery,
        };
      }
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.post(
        `/admin/${UserData()?._id}/get-users?page=${currentPage}&limit=${postsPerPage}&sort=desc`,
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
      if (error.response.data.message) {
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
  const handleTabChange = (selectedTab: string) => {
    setActiveTab(selectedTab);
  };
  useEffect(() => {
    corporateList();
  }, [currentPage, postsPerPage]);

  const setPage = (i: number) => {
    setCurrentPage(i);
  };
  return (
    <>
      <div className={`create_employee`}>
        <div>
          <TabComponent activeKey={activeTab} tabOptions={tabData} onChangeTab={handleTabChange} />
          {!isLoading ? (
            <>
              {activeTab === 'client_list' && (
                // <ClientList
                //   dataList={ClientData}
                //   corporateList={corporateList}
                //   onChange={setPage}
                //   total={totalEvents}
                //   current={currentPage}
                //   pageSize={postsPerPage}
                // />
                <ClientDetails
                  dataList={dataList}
                  corporateList={corporateList}
                  onChange={setPage}
                  total={totalEvents}
                  current={currentPage}
                  pageSize={postsPerPage}
                />
              )}
            </>
          ) : (
            <MainLoader />
          )}
          {activeTab === 'create_client' && <CreateClientForm />}
        </div>
      </div>
    </>
  );
};

export default CreateClient;
