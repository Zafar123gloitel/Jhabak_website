import React from 'react';
import styles from './styles.module.scss';

// import { industryTypeOptions } from '@/types';
import InputField from '@/components/InputField/InputField';
// import SelectField from '@/components/InputField/SelectField';
import Image from 'next/image';
import SelectField from '@/components/InputField/SelectField';

const callTypeOption = [
  { label: 'Select Plan', value: '' },
  { label: 'Day Calls', value: 'day_calls' },
  { label: 'Weekly Calls', value: 'week_calls' },
  { label: 'Monthly Calls', value: 'month_calls' },
  { label: 'Long Term Calls', value: 'year_calls' },
];
const CommodityEquity = () => {
  // const { dataUser } = useSelector(selectUser);

  return (
    <>
      <div className={`${styles.create_form} All_content_center`}>
        <form className={`${styles.create_Client_section}`}>
          <div className={`${styles.create_client_img} w-100 All_content_center flex-column`}>
            <Image src={'/assets/svg/admin/client_form.svg'} alt={'Create Client'} width={80} height={80} />
            <h5>Commodity Equity Trading </h5>
          </div>
          <div className={`${styles.inr_create_Client_section}`}>
            <div className={`${styles.Client_input_container}`}>
              <SelectField
                name="plans"
                label={'Select Plan *'}
                options={callTypeOption}
                // onChange={onChange}
                value={callTypeOption[0].value}
                className={`${styles.Client_input_section}`}
                error={'inputError.plans'}
              />
            </div>

            <div className={`${styles.Client_input_container}`}>
              <InputField
                name="shareName"
                label={'Share Name *'}
                type="text"
                value={''}
                // onChange={onChange}
                placeholder="Ex : TATA Motors"
                className={`${styles.Client_input_section}`}
                error={'inputError.shareName'}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <SelectField
                name="buySell"
                label={'Buy/Sell *'}
                options={[
                  { label: 'Buy', value: 'buy' },
                  { label: 'Sell', value: 'sell' },
                ]}
                // onChange={onChange}
                value={''}
                className={`${styles.Client_input_section}`}
                error={'inputError.buySell'}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                name="priceRangeTo"
                label={'Price Range From *'}
                type="text"
                value={''}
                // onChange={onChange}
                placeholder="Eg: 275"
                className={`${styles.Client_input_section}`}
                error={'inputError.priceRange1'}
              />
              <InputField
                name="priceRangeFrom"
                label={'Price Range To *'}
                type="text"
                value={''}
                // onChange={onChange}
                placeholder="Eg: 280"
                className={`${styles.Client_input_section}`}
                error={'inputError.priceRange2'}
              />
            </div>

            <div className={`${styles.Client_input_container}`}>
              <div>
                <InputField
                  name="stoploss"
                  label={'Stoploss *'}
                  type="text"
                  value={''}
                  // onChange={onChange}
                  placeholder="Eg: 245"
                  className={`${styles.Client_input_section}`}
                  error={'inputError.stoploss'}
                />
              </div>
              <div>
                <InputField
                  name="target"
                  label={'Target *'}
                  type="text"
                  value={''}
                  // onChange={onChange}
                  placeholder="Eg: 350"
                  className={`${styles.Client_input_section}`}
                  error={'inputError.target'}
                />
              </div>
              <div>
                <InputField
                  name="minQuantity"
                  label={'Minimum Quantity *'}
                  type="text"
                  value={''}
                  // onChange={onChange}
                  placeholder="Eg: 5"
                  className={`${styles.Client_input_section}`}
                  error={'inputError.minQuantity'}
                />
              </div>
            </div>
          </div>

          {/* {isLoading ? ( */}
          {/* <div className="w-100 d-flex justify-content-end ">
            <button
              type="submit"
              className={`${styles.smt_btn} ${styles.smt_btn_loader} Dark_button float-right All_content_center`}
            >
              <div className="custom-loader"></div>
            </button>
          </div> */}
          {/* ) : ( */}
          <div className="w-100 d-flex justify-content-end ">
            <button type="submit" className={`${styles.smt_btn} Dark_button float-right`}>
              Create Call
            </button>
          </div>
          {/* )} */}
        </form>
      </div>
    </>
  );
};

export default CommodityEquity;
