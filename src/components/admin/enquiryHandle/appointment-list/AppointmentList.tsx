// YourPage.tsx
import React from 'react';
// import { TrainingRequest } from '@/types/index';
import PaginationComponent from '@/components/Pagination/Pagination';
import styles from '@/components/TableComponent/styles.module.scss';
import { IAppoitment } from '../enquiryData';

interface ICardDeatils {
  // dataList: TrainingRequest[] | undefined;
  dataList: [] | IAppoitment[];
  corporateList: () => void;
  onChange: (i: number) => void;
  total: number;
  current: number;
  pageSize: number;
  activeTab?: string;
}
const AppointmentList = ({ dataList, onChange, total, current, pageSize }: ICardDeatils) => {
  const empcolumns: string[] = ['Name', 'Email', 'Contact Number', 'Status', 'Action'];

  return (
    <div style={{ marginTop: '50px' }} className={`${styles.main__data_container} All_content_center flex-column`}>
      {dataList !== undefined ? (
        <>
          <div className={`${styles.dashboard_data}`}>
            <table className={`${styles.table_dashboard} table responsive`}>
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
                      <td>{appointment?.email}</td>
                      <td>{appointment.phone_number && appointment?.phone_number}</td>

                      <td>{appointment.client_status ?? appointment?.client_status}</td>
                      {/* <td>{appointment?.isActive ? 'true' : 'false'}</td> */}
                      <td>
                        {/* <button
                          className={`${styles.approve_btn} ${
                            appointment.isActive && styles.approved_btn
                          } bg-transparent`}
                          // onClick={e => handleApproved(e, true, appointment?._id, appointment?.isActive)}
                          title="Approve"
                        >
                          <span></span>
                        </button> */}
                        {/* <>isActive</> */}
                        {/* {!appointment.isActive ? (
                          <button
                            className={`${styles.approve_btn} bg-transparent`}
                            title="Approve"
                            onClick={e => handleApproved(e, true, appointment?._id, appointment?.isActive)}
                          >
                            <span></span>
                          </button>
                        ) : (
                          <button
                            className={`${styles.approve_btn} ${styles.approved_btn} bg-transparents`}
                            title="Approve"
                          >
                            <span></span>
                          </button>
                        )} */}
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

export default AppointmentList;
