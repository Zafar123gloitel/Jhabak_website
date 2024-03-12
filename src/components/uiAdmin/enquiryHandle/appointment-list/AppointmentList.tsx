// YourPage.tsx
import React from 'react';
import LocalStyle from './styles.module.scss';
import Image from 'next/image';
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
const AppointmentList = ({ dataList, onChange, total, current, pageSize }: ICardDeatils) => {
  const empcolumns: string[] = ['Name', 'Contact Number', 'Email', 'Message', 'Action'];

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
    <div style={{ marginTop: '50px' }} className={`${LocalStyle.main__data_container} All_content_center flex-column`}>
      {dataList !== undefined ? (
        <>
          <div className={`${LocalStyle.dashboard_data} text-white  element_center `}>
            <table className={`${LocalStyle.table_dashboard} `}>
              <thead className={`${LocalStyle.table_head}`}>
                <tr>
                  {empcolumns.map((column, index) => (
                    <th className={`${LocalStyle.data_content} `} key={index}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataList?.map((appointment, index) => (
                  <>
                    <tr className={`${LocalStyle.table_data}`} key={index}>
                      <td className={`${LocalStyle.table_data}`}>{appointment?.name}</td>
                      <td className={`${LocalStyle.table_data}`}>{appointment.contact ? appointment.contact : ''}</td>

                      <td className={`${LocalStyle.table_data}`}>{appointment?.email}</td>
                      <td className={`${LocalStyle.table_data}`}>
                        {appointment.status ? appointment.status : 'hello'}
                        <Image
                          className={styles.delete_icon}
                          src="/assets/svg/chevron-up.svg"
                          alt="image back"
                          width={12}
                          height={7}
                        />
                      </td>

                      {/* <td>{appointment?.isActive ? 'true' : 'false'}</td> */}
                      <td className={`${LocalStyle.table_data}`}>
                        {/* <button
                          className={`${styles.approve_btn} ${
                            appointment.isActive && styles.approved_btn
                          } bg-transparent`}
                          // onClick={e => handleApproved(e, true, appointment?._id, appointment?.isActive)}
                          title="Approve"
                        >
                          <span></span>
                        </button> */}
                        <>
                          {/* isActive */}
                          <Image
                            className={styles.delete_icon}
                            src="/assets/svg/delete_icon/delete.svg"
                            alt="image back"
                            width={20}
                            height={20}
                          />
                        </>
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
