// YourPage.tsx
import React from 'react';
// import { TrainingRequest } from '@/types/index';
import PaginationComponent from '@/components/Pagination/Pagination';
import styles from '@/components/TableComponent/styles.module.scss';
import { IEnquiryData } from '../enquiryData';
// import ActivationModal from '../../Modals/ActivationModal';
// import { apiService } from '@/utils/index';
// import { useSelector } from 'react-redux';
// import { selectUser } from '@/store/User/userSlice';
// import { toast } from 'react-toastify';
// import useLoading from '@/components/loading/Loader';
interface ICardDeatils {
  // dataList: TrainingRequest[] | undefined;
  dataList: [] | IEnquiryData[];
  corporateList: () => void;
  onChange: (i: number) => void;
  total: number;
  current: number;
  pageSize: number;
  activeTab?: string;
}
const EnquiryList = ({ dataList, onChange, total, current, pageSize }: ICardDeatils) => {
  const empcolumns: string[] = ['Name', 'Contact Number', 'Subscription', 'Expiry Date', 'Action'];

  // const [show, setShow] = useState(false);
  // const [employeeId, setEmployeeId] = useState<string | undefined>();

  // const [approved, setApproved] = useState<boolean | undefined>();
  // const { isLoading, startLoading, stopLoading } = useLoading();
  // const { dataUser } = useSelector(selectUser);

  // const handleApproved = (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  //   val: boolean,
  //   id: string,
  //   isApproved: boolean | undefined
  // ): void => {
  //   e.stopPropagation();
  //   setShow(val);
  //   setEmployeeId(id);
  //   setApproved(isApproved);
  // };
  // const handleApprove = async () => {
  //   startLoading();
  //   // const data = {
  //   //   isActive: !approved,
  //   // };
  //   try {
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     const response: any = await apiService.post(
  //       `/${dataUser?._id}/activate-or-deactivate/corporate-wellness/client/${employeeId}`,
  //       data
  //     );
  //     if (response?.status === 200 && response?.success) {
  //       toast.success(response?.message);
  //       corporateList();
  //       setShow(false);
  //     } else {
  //       toast.error('please check your network');
  //       setShow(false);
  //     }
  //   } catch (e) {
  //     toast.error('something went wrong');
  //     stopLoading();
  //   } finally {
  //     stopLoading();
  //   }
  // };

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
                      <td>{appointment.contact ? appointment.contact : ''}</td>

                      <td>{appointment?.email}</td>
                      <td>{appointment.message ? appointment.message : 'hello'}</td>
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
                        isActive
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

export default EnquiryList;
