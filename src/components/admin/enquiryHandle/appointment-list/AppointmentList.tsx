// YourPage.tsx
import React, { useState } from 'react';
// import { TrainingRequest } from '@/types/index';
import PaginationComponent from '@/components/Pagination/Pagination';
import styles from '@/components/TableComponent/styles.module.scss';
import { IAppoitment } from '../enquiryData';
import { apiService } from '@/utils';
import { useUser } from '@/hooks';
import { toast } from 'react-toastify';
import LocalStyle from '../style.module.scss';
import DeleteModal from '@/components/Modals/DeleteModal';
import Image from 'next/image';

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
const AppointmentList = ({ dataList, corporateList, onChange, total, current, pageSize }: ICardDeatils) => {
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState<number>();
  const { UserData } = useUser();
  const empcolumns: string[] = ['Name', 'Email', 'Contact Number', 'Status', 'Action'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelect = async (e: any, value: number) => {
    const val = e.target.value;
    const data = {
      clientStatus: val,
    };
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.patch(`/admin/${UserData()?._id}/updateStatusAppointment/${value}`, data);
      if (response?.status === 200 && response?.success) {
        corporateList();
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
    }
  };

  const handleDeleteModal = (id: number) => {
    setUserId(id);
    setShow(true);
  };

  return (
    <div style={{ marginTop: '50px' }} className={`${LocalStyle.main__data_container}`}>
      {dataList !== undefined ? (
        <>
          <div className={`${styles.dashboard_data} ${LocalStyle.dashboard_data} `}>
            <table className={`${styles.table_dashboard} ${LocalStyle.table_dashboard} text-white responsive `}>
              <thead>
                <tr className={LocalStyle.data_content}>
                  {empcolumns.map((column, index) => (
                    <th key={index}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataList?.map((appointment, index) => (
                  <>
                    <tr key={index}>
                      <td className={LocalStyle.table_data}>{appointment?.name}</td>
                      <td className={LocalStyle.table_data}>{appointment?.email}</td>
                      <td className={LocalStyle.table_data}>{appointment.phone_number && appointment?.phone_number}</td>

                      <td className={LocalStyle.table_data}>
                        <select name="" id="" onChange={e => handleSelect(e, appointment._id)}>
                          <option value="prospects" selected={appointment?.client_status === 'prospects'}>
                            prospects
                          </option>
                          <option value="cancel" selected={appointment?.client_status === 'cancel'}>
                            cancel
                          </option>
                          <option value="document_process" selected={appointment?.client_status === 'document_process'}>
                            document_process
                          </option>
                          <option
                            value="verification_completed"
                            selected={appointment?.client_status === 'verification_completed'}
                          >
                            verification_completed
                          </option>
                        </select>
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
        deleteUserType="appointment"
      />
    </div>
  );
};

export default AppointmentList;
