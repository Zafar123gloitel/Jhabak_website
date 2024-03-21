'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import MainLoader from '@/components/loading';
import TabComponent from '@/components/TabComponents';
import useLoading from '@/components/loading/Loader';

import AppointmentList from './appointment-list/AppointmentList';
import { IAppoitment, IContactUs } from './enquiryData';
import EnquiryList from './enquiry-list/EnquiryList';
import { apiService } from '@/utils';
import { useUser } from '@/hooks';
import { ITabData } from '@/components/admin/clientList/clientData';
import useDebounce from '@/components/Usedebounce';

const EnquiryHandleList = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(2);
  const [appoitmentDataList, setAppoitmentDataList] = useState<IAppoitment[]>([]);
  const [enquiryDataList, setEnquiryDataList] = useState<IContactUs[]>([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalEnquiryEvents, setEnquiryTotalEvents] = useState(0);
  const [activeTab, setActiveTab] = useState('appointment_list');
  const { UserData } = useUser();
  const [searchData] = useState('');
  const debounceDelay = 500; // Adjust debounce delay as needed
  const debouncedSearchQuery = useDebounce(searchData, debounceDelay);
  const [tabData] = useState<ITabData[]>([
    {
      _id: 20024,
      name: 'appointment_list',
      alt: 'Appointment List',
    },
    {
      _id: 20025,
      name: 'enquiry_list',
      alt: 'Enquiry List',
    },
  ]);

  const Reset = () => {
    setAppoitmentDataList([]);
    // setTotalEvents(0);
  };

  const AppoitmentList = async () => {
    startLoading();
    Reset();
    let data;
    try {
      if (debouncedSearchQuery) {
        data = {
          search: debouncedSearchQuery,
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.post(
        `/admin/${UserData()?._id}/all-appointment?page=${currentPage}&limit=${postsPerPage}&sort=desc`,
        data
      );
      if (response?.status === 200 && response?.success) {
        setAppoitmentDataList(response?.payload);
        setTotalEvents(response?.count);
      }
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
  const EnquiryDataList = async () => {
    startLoading();
    Reset();
    let data;
    try {
      if (debouncedSearchQuery) {
        data = {
          search: debouncedSearchQuery,
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.post(
        `/admin/${UserData()?._id}/all-contacts?page=${currentPage}&limit=${postsPerPage}&sort=desc`,
        data
      );
      if (response?.status === 200 && response?.success) {
        setEnquiryDataList(response?.payload);
        setEnquiryTotalEvents(response?.count);
      }
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
    if (activeTab === 'appointment_list') {
      AppoitmentList();
    } else {
      EnquiryDataList();
    }
  }, [currentPage, postsPerPage, activeTab]);

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
              {activeTab === 'appointment_list' && (
                <AppointmentList
                  dataList={appoitmentDataList}
                  corporateList={AppoitmentList}
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
          {!isLoading ? (
            <>
              {activeTab === 'enquiry_list' && (
                <EnquiryList
                  dataList={enquiryDataList}
                  corporateList={AppoitmentList}
                  onChange={setPage}
                  total={totalEnquiryEvents}
                  current={currentPage}
                  pageSize={postsPerPage}
                />
              )}
            </>
          ) : (
            <MainLoader />
          )}
        </div>
      </div>
    </>
  );
};

export default EnquiryHandleList;
