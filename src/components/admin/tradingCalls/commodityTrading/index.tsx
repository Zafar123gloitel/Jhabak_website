'use client';
import React, { useState } from 'react';

import styles from '@/components/admin/tradingCalls/style.module.scss';
// import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/InputField/SelectField';
import commodityStyles from './commodityTrading.module.scss';

import {
  DefaultCommodityError,
  DefaultCommodityTrading,
  callTypeOption,
} from '@/components/admin/tradingCalls/options.constant';
import Equity from '../equity';
import { toast } from 'react-toastify';

const CommodityTrading = () => {
  const [formData, setFormData] = useState<typeof DefaultCommodityTrading>(DefaultCommodityTrading);
  const [isLoading, setIsLoading] = useState(false);
  const [getError, setGetError] = useState<typeof DefaultCommodityError>(DefaultCommodityError);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setGetError(DefaultCommodityError); // clearing all the errors
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    // console.log(e.target.value, '');
  }
  // console.log(formData.trading_type, '');
  // function onError(key: string, msg: string) {
  //   setGetError(prev => ({ ...prev, [key]: msg }));
  // }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setIsLoading(true);

      // console.log('<<<formData>>>', formData);
      setGetError(DefaultCommodityError);
    } catch (error) {
      const _e = error as Error;
      toast.error(_e.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className={`${styles.create_form} element_center`}>
        <form
          className={`${styles.create_Client_section} ${commodityStyles.create_Client_section} `}
          onSubmit={handleFormSubmit}
        >
          <div className={`${styles.inr_create_Client_section} element_center `}>
            {/* section 1 */}
            <div className={`${styles.Client_input_container}  d-flex justify-content-between `}>
              <div className={`${commodityStyles.top_single_input}`}>
                <SelectField
                  label={'Select Trading Type *'}
                  options={[
                    { label: 'Select Trading Type', value: '' },
                    { label: 'Equity Trading', value: 'equity' },
                    { label: 'Option Trading', value: 'option' },
                  ]}
                  name="plan_name"
                  value={formData.trading_type}
                  onChange={onChange}
                  // error={errorInput.plan_name}
                  className={`${styles.Client_input_section} ${commodityStyles.Client_input_section}`}
                />
              </div>
              <div className={`${commodityStyles.top_single_input}`}>
                <SelectField
                  label={'Select Plan *'}
                  options={callTypeOption}
                  name="plan_name"
                  value={''}
                  // onChange={onBaseChange}
                  // error={errorInput.plan_name}
                  className={`${styles.Client_input_section} ${commodityStyles.Client_input_section}`}
                />
              </div>
            </div>

            <div className={`${styles.Client_input_container} w-100`}>
              {formData.trading_type === 'equity' ? (
                <Equity formData={formData} getError={getError} onChange={onChange} />
              ) : (
                'sdfgdfg'
              )}
            </div>
          </div>

          <div className="w-100 element_center ">
            <button type="submit" className={`${styles.smt_btn} Dark_button float-right`}>
              {isLoading ? 'Loading...' : 'Create Call'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommodityTrading;
