// YourPage.tsx
import React from 'react';
// import { TrainingRequest } from '@/types/index';
import PaginationComponent from '@/components/Pagination/Pagination';
import styles from './client_details.module.scss';
import { IPlan, IUserSchema } from '../clientData';
import Image from 'next/image';
import InputField from '@/components/InputField/InputField';
import moment from 'moment';
// import ActivationModal from '../../Modals/ActivationModal';

interface ICardDeatils {
  dataList: [] | IUserSchema[];
  searchData: string;
  setSearchData: (e: string) => void;
  corporateList: () => void;
  onChange: (i: number) => void;
  total: number;
  current: number;
  pageSize: number;
  activeTab?: string;
}

const ClientDetails = ({ dataList, onChange, total, current, pageSize, searchData, setSearchData }: ICardDeatils) => {
  // const formatStartDateRange = (startDateString: Date) => {
  //   return moment(startDateString).format('DD MMMM YYYY');
  // };
  const formatEndDateRange = (endDateString: Date) => {
    return moment(endDateString).format('DD.MM.YYYY');
  };

  const convertLatter = (plan_type: string) => {
    if (plan_type === 'day_call') return 'Day Call';
    if (plan_type === 'week_call') return 'Week Call';
    if (plan_type === 'month_call') return 'Month Call';
    if (plan_type === 'long_term') return 'Long Call';
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearchData(value);
  };

  return (
    <div style={{ marginTop: '50px' }} className={`${styles.main__data_container} element_center flex-column`}>
      <div className={`${styles.search_filter} d-flex`}>
        <div className={`${styles.search} `}>
          <InputField
            label=""
            type="text"
            placeholder="Search"
            value={searchData}
            onChange={handleSearch}
            name="search"
            className={`${styles.searchInput}`}
          />
        </div>

        {/* <div className={`${styles.filter} All_content_center `}>
          <button className="outline_button">
            <span>Filter</span>
          </button>
        </div> */}
      </div>
      {dataList.length !== 0 ? (
        <>
          <div className={`${styles.dashboard_data}`}>
            <div className={`${styles.details_card_container} flex-wrap`}>
              {dataList?.map((appointment: IUserSchema) => (
                <div className={styles.client_details_card} key={appointment?.phone_number}>
                  <div className={`${styles.innr_client_card} element_center flex-column`}>
                    <div className={`${styles.detail_part} `}>
                      <span className={`${styles.user_img} element_center flex-column`}>
                        <Image src={'/assets/svg/user_default_img.png'} alt="user" width={67} height={67} />
                        <p>
                          <span className="css-f12">{appointment.name}</span>
                        </p>
                      </span>
                      <div className={`${styles.details}`}>
                        <p>
                          <span>Phone:</span>
                          <span>{appointment.phone_number}</span>
                        </p>
                        <p>
                          <span>Addhar:</span>
                          <span>{appointment.aadhar_number}</span>
                        </p>
                        <p>
                          <span>PAN:</span>
                          <span className={`${styles.PAN}`}>{appointment.pan_number}</span>
                        </p>
                        <p>
                          <span>Email:</span>
                          <span>{appointment.email}</span>
                        </p>
                      </div>
                    </div>

                    <table className={`${styles.suscription_details} `}>
                      <thead>
                        <tr>
                          <th className={styles.plan_type_col}>Plans Type</th>
                          <th className={styles.call_type_col}>Call Type</th>
                          <th className={styles.plan_exp_col}>Expiry</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointment.plans.map((planValue: IPlan) => {
                          return (
                            <React.Fragment key={planValue?._id}>
                              <tr>
                                <td className={`${styles.plan_type_col} element_center`}>
                                  {convertLatter(planValue.plan_type)}
                                </td>
                                <td className={`${styles.call_type_col} element_center`}>
                                  <span className={styles.calltype_data}>
                                    {planValue.trading_type[0].includes('equity') && (
                                      <>
                                        <Image
                                          src="/assets/svg/admin/equity_calls.svg"
                                          alt="Equtiy Trading"
                                          title="Equtiy Trading"
                                          width={20}
                                          height={20}
                                        />
                                        <span className={styles.calltype}>Equity</span>
                                      </>
                                    )}
                                  </span>
                                  <span className={styles.calltype_data}>
                                    {planValue.trading_type[1].includes('option') && (
                                      <>
                                        <Image
                                          src="/assets/svg/admin/option_trading.svg"
                                          alt="Option Trading"
                                          title="Option Trading"
                                          width={20}
                                          height={20}
                                        />
                                        <span className={styles.calltype}>Option</span>
                                      </>
                                    )}
                                  </span>
                                  <span className={styles.calltype_data}>
                                    {planValue.trading_type[2].includes('commodity') && (
                                      <>
                                        <Image
                                          src="/assets/svg/admin/commodity_trading.svg"
                                          alt="Commodity Trading"
                                          title="Commodity Trading"
                                          width={20}
                                          height={20}
                                        />
                                        <span className={styles.calltype}>Commodity</span>
                                      </>
                                    )}
                                  </span>
                                </td>

                                <td className={`${styles.plan_exp_col} element_center`}>
                                  {formatEndDateRange(planValue.end_plan)}
                                </td>
                              </tr>
                            </React.Fragment>
                          );
                        })}
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
