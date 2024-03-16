// YourPage.tsx
import React from 'react';
// import { TrainingRequest } from '@/types/index';
import PaginationComponent from '@/components/Pagination/Pagination';
import styles from './client_details.module.scss';
import { IClientData } from '../clientData';
import Image from 'next/image';
// import ActivationModal from '../../Modals/ActivationModal';
// import { apiService } from '@/utils/index';
// import { useSelector } from 'react-redux';
// import { selectUser } from '@/store/User/userSlice';
// import { toast } from 'react-toastify';
// import useLoading from '@/components/loading/Loader';

interface ICardDeatils {
  // dataList: TrainingRequest[] | undefined;
  dataList: [] | IClientData[];
  corporateList: () => void;
  onChange: (i: number) => void;
  total: number;
  current: number;
  pageSize: number;
  activeTab?: string;
}
const ClientDetails = ({ dataList, onChange, total, current, pageSize }: ICardDeatils) => {
  // const empcolumns: string[] = ['Name', 'Contact Number', 'Subscription', 'Expiry Date', 'Action'];

  return (
    <div style={{ marginTop: '50px' }} className={`${styles.main__data_container} All_content_center flex-column`}>
      {dataList !== undefined ? (
        <>
          <div className={`${styles.dashboard_data}`}>
            {/* <table className={`${styles.table_dashboard} table responsive`}>
              <thead>
                <tr>
                  {empcolumns.map((column, index) => (
                    <th key={index}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataList?.map((appointment, index) => (
                  <>
                    <tr key={index}>
                      <td>{appointment?.name}</td>
                      <td>{appointment.contact ? appointment.contact : 'Default'}</td>
                      <td>{appointment?.subscription ? appointment?.subscription : 'false'}</td>
                      <td>{appointment?.expiry}</td>
                      <td></td>
                    </tr>
                  </>
                ))}
                {/* </>
          ))} */}
            {/* </tbody>
            </table> */}
            <div className={`${styles.details_card_container} element_center flex-wrap`}>
              {dataList?.map(appointment => (
                <div className={styles.client_details_card} key={appointment.contact}>
                  <div className={styles.innr_client_card}>
                    <div className={`${styles.detail_part} `}>
                      <span className={`${styles.user_img} element_center`}>
                        <Image src={'/assets/svg/user_default_img.png'} alt="user" width={100} height={100} />
                      </span>
                      <div className={`${styles.details} d-flex`}>
                        <p>
                          <span>Name:</span>
                          <span>{appointment.name}</span>
                        </p>
                        <p>
                          <span>Name:</span>
                          <span>{appointment.name}</span>
                        </p>
                        <p>
                          <span>Name:</span>
                          <span>{appointment.name}</span>
                        </p>
                        <p>
                          <span>Name:</span>
                          <span>{appointment.name}</span>
                        </p>
                        <p>
                          <span>Name:</span>
                          <span>{appointment.name}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {dataList.length !== 0 && (
            <PaginationComponent total={total} current={current} onChange={onChange} pageSize={pageSize} />
          )}
        </>
      ) : (
        'Data Not Found!'
      )}

      {/* <ActivationModal
        show={show}
        setShow={() => setShow(false)}
        handleApprove={handleApprove}
        isLoading={isLoading}
        approved={approved}
      /> */}
    </div>
  );
};

export default ClientDetails;
