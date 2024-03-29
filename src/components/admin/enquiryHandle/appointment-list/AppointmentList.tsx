// YourPage.tsx
import React from 'react';
// import { TrainingRequest } from '@/types/index';
import PaginationComponent from '@/components/Pagination/Pagination';
import styles from '@/components/TableComponent/styles.module.scss';
import { IAppoitment } from '../enquiryData';
import { apiService } from '@/utils';
import { useUser } from '@/hooks';
import { toast } from 'react-toastify';

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

  const handleDelete = async (id: number) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.delete(`/admin/${UserData()?._id}/deleteAppointment/${id}`);
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

                      <td>
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

                      <td>
                        <button onClick={() => handleDelete(appointment._id)}>Delete</button>
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
