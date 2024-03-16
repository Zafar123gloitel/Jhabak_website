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
                  <div className={`${styles.innr_client_card} element_center flex-column`}>
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
                          <span>Phone:</span>
                          <span>{appointment.contact}</span>
                        </p>
                        <p>
                          <span>Email:</span>
                          <span>{appointment.email}</span>
                        </p>
                        <p>
                          <span>Addhar:</span>
                          <span>{appointment.Aadhar}</span>
                        </p>
                        <p>
                          <span>PAN:</span>
                          <span>{appointment.panCard}</span>
                        </p>
                      </div>
                    </div>

                    <table className={`${styles.suscription_details} `}>
                      <thead>
                        <tr>
                          <th>Plans Type</th>
                          <th>Call Type</th>
                          <th>Start</th>
                          <th>Expiry</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Day Call</td>
                          <td>
                            <Image
                              src="/assets/svg/admin/equity_calls.svg"
                              alt="Equtiy Trading"
                              title="Equtiy Trading"
                              width={30}
                              height={30}
                            />
                            <Image
                              src="/assets/svg/admin/option_trading.svg"
                              alt="Option Trading"
                              title="Option Trading"
                              width={30}
                              height={30}
                            />
                            <Image
                              src="/assets/svg/admin/commodity_trading.svg"
                              alt="Commodity Trading"
                              title="Commodity Trading"
                              width={30}
                              height={30}
                            />
                          </td>
                          <td>22/03/2024</td>
                          <td>22/06/2024</td>
                        </tr>
                        <tr>
                          <td>Day Call</td>
                          <td>
                            <Image
                              src="/assets/svg/admin/equity_calls.svg"
                              alt="Equtiy Trading"
                              title="Equtiy Trading"
                              width={30}
                              height={30}
                            />
                            <Image
                              src="/assets/svg/admin/option_trading.svg"
                              alt="Option Trading"
                              title="Option Trading"
                              width={30}
                              height={30}
                            />
                            <Image
                              src="/assets/svg/admin/commodity_trading.svg"
                              alt="Commodity Trading"
                              title="Commodity Trading"
                              width={30}
                              height={30}
                            />
                          </td>
                          <td>22/03/2024</td>
                          <td>22/06/2024</td>
                        </tr>
                        <tr>
                          <td>Day Call</td>
                          <td>
                            <Image
                              src="/assets/svg/admin/equity_calls.svg"
                              alt="Equtiy Trading"
                              title="Equtiy Trading"
                              width={30}
                              height={30}
                            />
                            <Image
                              src="/assets/svg/admin/option_trading.svg"
                              alt="Option Trading"
                              title="Option Trading"
                              width={30}
                              height={30}
                            />
                            <Image
                              src="/assets/svg/admin/commodity_trading.svg"
                              alt="Commodity Trading"
                              title="Commodity Trading"
                              width={30}
                              height={30}
                            />
                          </td>
                          <td>22/03/2024</td>
                          <td>22/06/2024</td>
                        </tr>
                        <tr>
                          <td>Day Call</td>
                          <td>
                            <Image
                              src="/assets/svg/admin/equity_calls.svg"
                              alt="Equtiy Trading"
                              title="Equtiy Trading"
                              width={30}
                              height={30}
                            />
                            <Image
                              src="/assets/svg/admin/option_trading.svg"
                              alt="Option Trading"
                              title="Option Trading"
                              width={30}
                              height={30}
                            />
                            <Image
                              src="/assets/svg/admin/commodity_trading.svg"
                              alt="Commodity Trading"
                              title="Commodity Trading"
                              width={30}
                              height={30}
                            />
                          </td>
                          <td>22/03/2024</td>
                          <td>22/06/2024</td>
                        </tr>
                      </tbody>
                    </table>
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
