'use client';
import React from 'react';

import styles from '@/components/admin/tradingCalls/style.module.scss';
// import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/InputField/SelectField';
import commodityStyles from './commodityTrading.module.scss';
// import EquityTrading from '../equityTrading';

const CommodityTrading = () => {
  return (
    <>
      <div className={`${styles.create_form} element_center`}>
        <form
          className={`${styles.create_Client_section} ${commodityStyles.create_Client_section} `}
          // onSubmit={}
        >
          <div className={`${styles.inr_create_Client_section} element_center `}>
            {/* section 1 */}
            <div className={`${styles.Client_input_container}  d-flex `}>
              <div className={`${commodityStyles.top_single_input}`}>
                <SelectField
                  label={'Select Plan *'}
                  options={[
                    { label: 'Equity', value: 'equity' },
                    { label: 'Option', value: 'option' },
                  ]}
                  name="plan_name"
                  value={''}
                  // onChange={onBaseChange}
                  // error={errorInput.plan_name}
                  className={`${styles.Client_input_section} ${commodityStyles.Client_input_section}`}
                />
              </div>
            </div>
            {/* <div className={`${styles.Client_input_container}`}></div> */}
          </div>

          <div className="w-100 element_center ">
            <button type="submit" className={`${styles.smt_btn} Dark_button float-right`}>
              {/* {isLoading ? 'Loading...' : 'Create Call'} */}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommodityTrading;
