'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import styles from '../style.module.scss';
// import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/InputField/SelectField';
import { DefaultCommodityError, DefaultCommodityTrading, callTypeOption } from '../../options.constant';
import Equity from '../../equity';

const CommodityEquity = () => {
  const [formData, setFormData] = useState<typeof DefaultCommodityTrading>(DefaultCommodityTrading);
  const [isLoading, setIsLoading] = useState(false);
  const [getError, setGetError] = useState<typeof DefaultCommodityError>(DefaultCommodityError);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setGetError(DefaultCommodityError); // clearing all the errors
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

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
        <form className={`${styles.create_Client_section}`} onSubmit={handleFormSubmit}>
          <div className={`${styles.inr_create_Client_section}`}>
            <div className={`${styles.Client_input_container}`}>
              <SelectField
                label={'Select Plan *'}
                options={callTypeOption}
                name="plan_name"
                value={formData.plan_name}
                onChange={onChange}
                className={`${styles.Client_input_section}`}
                error={getError.plan_name}
              />
            </div>

            {/* <div className={`${styles.Client_input_container}`}>
              <InputField
                label={'Share Name *'}
                type="text"
                name="share_name"
                value={formData.share_name}
                onChange={onChange}
                error={getError.share_name}
                placeholder="Ex : TATA Motors"
                className={`${styles.Client_input_section}`}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <SelectField
                label={'Buy/Sell *'}
                options={[
                  { label: 'Buy', value: 'buy' },
                  { label: 'Sell', value: 'sell' },
                ]}
                name="buy_cell"
                value={formData.buy_cell}
                onChange={onChange}
                className={`${styles.Client_input_section}`}
                error={getError.buy_cell}
              />
            </div>
            <div className={`${styles.price_range} ${styles.Client_input_container}`}>
              <InputField
                label={'Price Range From *'}
                type="number"
                name="price_from"
                value={formData.price_from}
                onChange={onChange}
                error={getError.price_from}
                placeholder="Eg: 275"
                className={`${styles.Client_input_section}`}
              />
              <InputField
                label={'Price Range To *'}
                type="number"
                name="price_to"
                value={formData.price_to}
                onChange={onChange}
                error={getError.price_to}
                placeholder="Eg: 280"
                className={`${styles.Client_input_section}`}
              />
            </div>

            <div className={` ${styles.price_actions} ${styles.Client_input_container}`}>
              <div className={`${styles.single_price_actions}`}>
                <InputField
                  label={'Stoploss *'}
                  type="number"
                  name="stoploss"
                  value={formData.stoploss}
                  onChange={onChange}
                  error={getError.stoploss}
                  placeholder="Eg: 245"
                  className={`${styles.Client_input_section}`}
                />
              </div>
              <div className={`${styles.single_price_actions}`}>
                <InputField
                  label={'Target *'}
                  type="number"
                  name="target"
                  value={formData.target}
                  onChange={onChange}
                  error={getError.target}
                  placeholder="Eg: 350"
                  className={`${styles.Client_input_section}`}
                />
              </div>
              <div className={`${styles.single_price_actions}`}>
                <InputField
                  label={'Min Qty *'}
                  type="number"
                  name="minimum_quantity"
                  value={formData.minimum_quantity}
                  onChange={onChange}
                  error={getError.minimum_quantity}
                  placeholder="Eg: 5"
                  className={`${styles.Client_input_section}`}
                />
              </div>
            </div> */}
            <Equity formData={formData} getError={getError} onChange={onChange} />
          </div>

          <div className={`w-100 element_center`}>
            <button type="submit" className={`${styles.smt_btn} Dark_button float-right`}>
              {isLoading ? 'Loading...' : 'Create Call'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommodityEquity;
