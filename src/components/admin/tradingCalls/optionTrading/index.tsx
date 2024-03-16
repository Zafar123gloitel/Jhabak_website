'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmptyString } from 'regexx';
import styles from '../style.module.scss';

import SelectField from '@/components/InputField/SelectField';
import optionStyles from './option.module.scss';
import OptionData from './singleOptionInputs';
import useLoading from '@/components/loading/Loader';
import { useUser } from '@/hooks';
import {
  DefaultBaseTrading,
  DefaultBaseTradingError,
  DefaultOptionTrading,
  callTypeOption,
  DefaultOptionError,
} from '../options.constant';
import { apiService } from '@/utils';
import { IMessageResponse } from '@/types';
import { Hedge } from './Hedge';

const OptionTrading = () => {
  const { UserData } = useUser();
  const { isLoading, stopLoading, startLoading } = useLoading();

  const [baseFormData, setBaseFormData] = useState<typeof DefaultBaseTrading>(DefaultBaseTrading);
  const [baseError, setBaseError] = useState<typeof DefaultBaseTradingError>(DefaultBaseTradingError);

  const [openFormData, setOpenFormData] = useState<typeof DefaultOptionTrading>(DefaultOptionTrading);
  const [openError, setOpenError] = useState<typeof DefaultOptionError>(DefaultOptionError);

  const [hedgeformData, setHedgeFormData] = useState<typeof DefaultOptionTrading>(DefaultOptionTrading);
  const [hedgeError, setHedgeError] = useState<typeof DefaultOptionError>(DefaultOptionError);

  const [hedge2formData, setHedge2FormData] = useState<typeof DefaultOptionTrading>(DefaultOptionTrading);
  const [hedge2Error, setHedge2Error] = useState<typeof DefaultOptionError>(DefaultOptionError);

  function ClearError() {
    setBaseError(DefaultBaseTradingError);
    setOpenError(DefaultOptionError);
    setHedgeError(DefaultOptionError);
    setHedge2Error(DefaultOptionError);
    stopLoading();
  }

  function ClearFormData() {
    setBaseFormData(DefaultBaseTrading);
    setOpenFormData(DefaultOptionTrading);
    setHedgeFormData(DefaultOptionTrading);
    setHedge2FormData(DefaultOptionTrading);
    stopLoading();
  }

  function onBaseChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    ClearError(); // clearing all the errors
    const { name, value } = e.target;
    setBaseFormData(prevData => ({ ...prevData, [name]: value }));
  }

  function onBaseError(key: string, msg: string) {
    setBaseError(prev => ({ ...prev, [key]: msg }));
  }

  function onOpenChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    ClearError(); // clearing all the errors
    const { name, value } = e.target;
    setOpenFormData(prevData => ({ ...prevData, [name]: value }));
  }

  // function onOpenError(key: string, msg: string) {
  //   setOpenError(prev => ({ ...prev, [key]: msg }));
  // }

  function onHedgeChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    ClearError(); // clearing all the errors
    const { name, value } = e.target;
    setHedgeFormData(prevData => ({ ...prevData, [name]: value }));
  }

  // function onHedgeError(key: string, msg: string) {
  //   setHedgeError(prev => ({ ...prev, [key]: msg }));
  // }

  function onHedge2Change(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    ClearError(); // clearing all the errors
    const { name, value } = e.target;
    setHedge2FormData(prevData => ({ ...prevData, [name]: value }));
  }

  // function onHedge2Error(key: string, msg: string) {
  //   setHedgeError(prev => ({ ...prev, [key]: msg }));
  // }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (validateEmptyString(UserData()?._id ?? '')) return toast.error('Invalid Admin Id.');
      if (validateEmptyString(baseFormData.option_type)) return onBaseError('options_type', 'Option is required.');
      if (validateEmptyString(baseFormData.plan_type)) return onBaseError('plan_type', 'Plan is required.');
      startLoading();
      const open = {
        share_name: openFormData.share_name,
        buy_sell_type: openFormData.buy_cell,
        option_call: openFormData.ce_pe_type,
        strike_price: Number(openFormData.strick_price),
        price_range_from: Number(openFormData.price_from),
        price_range_to: Number(openFormData.price_to),
        min_quantity: Number(openFormData.minimum_quantity),
        target_set: Number(openFormData.target),
        stop_loss: Number(openFormData.stoploss),
      };
      const hedge = {
        first_share_name: hedgeformData.share_name,
        first_option_call: hedgeformData.ce_pe_type,
        first_buy_sell_type: hedgeformData.buy_cell,
        first_strike_price: Number(hedgeformData.strick_price),
        first_price_range_from: Number(hedgeformData.price_from),
        first_price_range_to: Number(hedgeformData.price_to),
        first_min_quantity: Number(hedgeformData.minimum_quantity),
        first_target_set: Number(hedgeformData.target),
        first_stop_loss: Number(hedgeformData.stoploss),

        second_share_name: hedge2formData.share_name,
        second_option_call: hedge2formData.ce_pe_type,
        second_buy_sell_type: hedge2formData.buy_cell,
        second_strike_price: Number(hedge2formData.strick_price),
        second_price_range_from: Number(hedge2formData.price_from),
        second_price_range_to: Number(hedge2formData.price_to),
        second_min_quantity: Number(hedge2formData.minimum_quantity),
        second_target_set: Number(hedge2formData.target),
        second_stop_loss: Number(hedge2formData.stoploss),
      };

      let data;
      if (baseFormData.option_type === 'open') {
        data = { ...baseFormData, open };
      } else if (baseFormData.option_type === 'hedge') {
        data = { ...baseFormData, hedge };
      }

      const response: IMessageResponse = await apiService.post(`/admin/${UserData()?._id}/create-options`, data);
      if (response.success && response.status === 201) {
        ClearFormData(); // reset all form data
        ClearError(); // rest all error
        toast.success(response.message);
      }
    } catch (error) {
      const _e = error as Error;
      toast.error(_e.message);
    } finally {
      stopLoading();
    }
  }

  return (
    <>
      <div className={`${styles.create_form} element_center`}>
        <form
          className={`${styles.create_Client_section} ${optionStyles.create_Client_section} ${baseFormData.option_type === 'hedge' && optionStyles.hedge_design}`}
          onSubmit={handleFormSubmit}
        >
          <div className={`${styles.inr_create_Client_section} element_center`}>
            {/* section 1 */}

            <div
              className={`${styles.Client_input_container}  d-flex  ${baseFormData.option_type === 'hedge' ? optionStyles.hedge_input : optionStyles.top_inputs}`}
            >
              <div className={optionStyles.top_single_input}>
                <SelectField
                  label={''}
                  options={[
                    { label: 'Option Type', value: '' },
                    { label: 'Open', value: 'open' },
                    { label: 'Hedge', value: 'hedge' },
                  ]}
                  name="option_type"
                  value={baseFormData.option_type}
                  onChange={onBaseChange}
                  error={baseError.option_type}
                  className={`${styles.Client_input_section}  ${optionStyles.Client_input_container} ${optionStyles.Client_input_section}`}
                />
              </div>
              <div className={`${optionStyles.top_single_input}`}>
                <SelectField
                  label={''}
                  options={callTypeOption}
                  name="plan_type"
                  value={baseFormData.plan_type}
                  onChange={onBaseChange}
                  error={baseError.plan_type}
                  className={`${styles.Client_input_section} ${optionStyles.Client_input_section}`}
                />
              </div>
            </div>

            <div className={`${styles.Client_input_container} ${optionStyles.Client_input_container}`}>
              {/* section 2 */}
              {baseFormData.option_type === 'open' && (
                <OptionData formData={openFormData} getError={openError} onChange={onOpenChange} />
              )}

              {/* section 3 */}
              {baseFormData.option_type === 'hedge' && (
                <Hedge
                  formData={hedgeformData}
                  getError={hedgeError}
                  onChange={onHedgeChange}
                  formData2={hedge2formData}
                  getError2={hedge2Error}
                  onChange2={onHedge2Change}
                />
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

export default OptionTrading;
