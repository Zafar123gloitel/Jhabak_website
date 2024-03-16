'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmptyString } from 'regexx';

import styles from '../style.module.scss';
import Equity from '../equity';
import SelectField from '@/components/InputField/SelectField';
import { apiService } from '@/utils';
import { useUser } from '@/hooks';
import { IMessageResponse } from '@/types';
import { DefaultEquityTrading, DefaultEquitError, callTypeOption } from '../options.constant';

const EquityTrading = () => {
  const { UserData } = useUser();
  const [formData, setFormData] = useState<typeof DefaultEquityTrading>(DefaultEquityTrading);
  const [getError, setGetError] = useState<typeof DefaultEquitError>(DefaultEquitError);
  const [isLoading, setIsLoading] = useState(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setGetError(DefaultEquitError); // clearing all the errors
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  function onError(key: string, msg: string) {
    setGetError(prev => ({ ...prev, [key]: msg }));
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (validateEmptyString(UserData()?._id ?? '')) return toast.error('Invalid Admin Id.');
      if (validateEmptyString(formData.plan_name)) return onError('plan_name', 'Plan is required.');
      if (validateEmptyString(formData.share_name)) return onError('share_name', 'Share is required.');
      setIsLoading(true);
      const data = {
        plan_type: formData.plan_name,
        share_name: formData.share_name,
        buy_sell_type: formData.buy_cell,
        price_range_from: Number(formData.price_from),
        price_range_to: Number(formData.price_to),
        min_quantity: Number(formData.minimum_quantity),
        target_set: Number(formData.target),
        stop_loss: Number(formData.stoploss),
      };

      const response: IMessageResponse = await apiService.post(`/admin/${UserData()?._id}/create-equity`, data);
      if (response.success && response.status === 201) {
        setGetError(DefaultEquitError);
        setFormData(DefaultEquityTrading);
        toast.success(response.message);
      }
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
                label={''}
                options={callTypeOption}
                name="plan_name"
                value={formData.plan_name}
                onChange={onChange}
                className={`${styles.Client_input_section}`}
                error={getError.plan_name}
              />
            </div>

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

export default EquityTrading;
