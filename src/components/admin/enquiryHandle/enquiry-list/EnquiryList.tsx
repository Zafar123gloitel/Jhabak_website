'use client';
import React, { useState } from 'react';
// import { TrainingRequest } from '@/types/index';
import PaginationComponent from '@/components/Pagination/Pagination';
import styles from '@/components/TableComponent/styles.module.scss';
import { IContactUs } from '../enquiryData';

import LocalStyle from '../style.module.scss';
import Image from 'next/image';
import DeleteModal from '@/components/Modals/DeleteModal';

interface ICardDeatils {
  dataList: [] | IContactUs[];
  corporateList: () => void;
  onChange: (i: number) => void;
  total: number;
  current: number;
  pageSize: number;
  activeTab?: string;
}
const EnquiryList = ({ dataList, corporateList, onChange, total, current, pageSize }: ICardDeatils) => {
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState<number>();

  const empcolumns: string[] = ['First Name', 'Email', 'Phone Number', 'Action'];

  const handleDeleteModal = (id: number) => {
    setUserId(id);
    setShow(true);
  };

  return (
    <div style={{ marginTop: '50px' }} className={`${LocalStyle.main__data_container} `}>
      {dataList !== undefined ? (
        <>
          <div className={`${styles.dashboard_data} ${LocalStyle.dashboard_data} `}>
            <table className={`${styles.table_dashboard} ${LocalStyle.table_dashboard} text-white responsive `}>
              <thead>
                <tr className={`${LocalStyle.data_content}`}>
                  {empcolumns.map((column, index) => (
                    <th key={index}>
                      <span>{column}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataList?.map((appointment, index) => (
                  <>
                    <tr key={index}>
                      <td className={LocalStyle.table_data}>
                        <span>{appointment?.first_name}</span>
                      </td>
                      <td className={LocalStyle.table_data}>{appointment?.email}</td>
                      <td className={LocalStyle.table_data}>
                        {appointment.phone_number ? appointment?.phone_number : ''}
                      </td>

                      <td className={LocalStyle.table_data}>
                        <button
                          onClick={() => handleDeleteModal(appointment?._id)}
                          title="delete"
                          className="bg-transparent"
                        >
                          <Image src={'/assets/svg/admin/delete_svg.svg'} alt="delete" width={24} height={24} />
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
                {/* </>
          ))} */}
              </tbody>
            </table>
          </div>

          {dataList.length !== 0 && (
            <PaginationComponent total={total} current={current} onChange={onChange} pageSize={pageSize} />
          )}
        </>
      ) : (
        'Data Not Found!'
      )}

      <DeleteModal
        show={show}
        corporateList={corporateList}
        setShow={() => setShow(false)}
        userId={userId}
        deleteUserType="enquiry"
      />
    </div>
  );
};

export default EnquiryList;
