'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import MainLoader from '@/components/loading';
import TabComponent from '@/components/TabComponents';
import useLoading from '@/components/loading/Loader';
import { ClientData } from './clientData';
import ClientList from './client-list/ClientList';
import CreateClientForm from './CreateClient';

const CreateClient = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);
  // const [dataList, setDataList] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [activeTab, setActiveTab] = useState('create_client');

  const [tabData] = useState([
    {
      _id: '2122',
      name: 'create_client',
      alt: 'Create Client',
    },
    {
      _id: '2121',
      name: 'client_list',
      alt: 'Client List',
    },
  ]);

  const corporateList = async () => {
    startLoading();
    // let data;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // const response: any = await apiService.post(
      //   `/${dataUser?._id}/corporate-wellness/clients?page=${currentPage}&limit=${postsPerPage}&sort=desc`,
      //   data
      // );
      // if (response?.status === 200 && response?.success) {
      //   setDataList(response?.payload);
      //   setTotalEvents(response?.count);
      // } else {
      //   toast.error('something went wrong');
      // console.log(data, 'Show Data');
      setTotalEvents(2);

      // }
    } catch (e) {
      toast.error('something went wrong');
      stopLoading();
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
                <ClientList
                  dataList={ClientData}
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
