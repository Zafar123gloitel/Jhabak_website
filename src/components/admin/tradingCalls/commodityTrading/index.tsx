'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmptyString } from 'regexx';

import styles from '@/components/admin/tradingCalls/style.module.scss';
import SelectField from '@/components/InputField/SelectField';
import commodityStyles from './commodityTrading.module.scss';
import optionStyles from '../style.module.scss';
import Equity from '../equity';
import OptionData from '../optionTrading/singleOptionInputs';
import { Hedge } from '../optionTrading/Hedge';
import {
  DefaultCommodityTrading,
  DefaultCommodityTradingError,
  DefaultEquitError,
  callTypeOption,
  DefaultEquityTrading,
  DefaultOptionTrading,
  DefaultOptionError,
} from '@/components/admin/tradingCalls/options.constant';
import { IMessageResponse } from '@/types';
import { apiService } from '@/utils';
import { useUser } from '@/hooks';

const CommodityTrading = () => {
  const { UserData } = useUser();
  const [commodityTrading, setCommodityTrading] = useState<typeof DefaultCommodityTrading>(DefaultCommodityTrading);
  const [commodityError, setCommodityError] =
    useState<typeof DefaultCommodityTradingError>(DefaultCommodityTradingError);
  const [isLoading, setIsLoading] = useState(false);

  const [equityFormData, setEquityFormData] = useState<typeof DefaultEquityTrading>(DefaultEquityTrading);
  const [equityError, setEquityError] = useState<typeof DefaultEquitError>(DefaultEquitError);

  const [optionFormData, setOptionFormData] = useState<typeof DefaultOptionTrading>(DefaultOptionTrading);
  const [optionError, setOptionError] = useState<typeof DefaultOptionError>(DefaultOptionError);

  const [hedgeformData, setHedgeFormData] = useState<typeof DefaultOptionTrading>(DefaultOptionTrading);
  const [hedgeError, setHedgeError] = useState<typeof DefaultOptionError>(DefaultOptionError);

  const [hedge2formData, setHedge2FormData] = useState<typeof DefaultOptionTrading>(DefaultOptionTrading);
  const [hedge2Error, setHedge2Error] = useState<typeof DefaultOptionError>(DefaultOptionError);

  function ClearError() {
    setCommodityError(DefaultCommodityTradingError);
    setEquityError(DefaultEquitError);
    setOptionError(DefaultOptionError);
    setHedgeError(DefaultOptionError);
    setHedge2Error(DefaultOptionError);
  }

  function ClearFormData() {
    setCommodityTrading(DefaultCommodityTrading);
    setEquityFormData(DefaultEquityTrading);
    setOptionFormData(DefaultOptionTrading);
    setHedgeError(DefaultOptionError);
    setHedge2Error(DefaultOptionError);
  }

  function onBaseChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    ClearError(); // clearing all the errors
    const { name, value } = e.target;
    setCommodityTrading(prevData => ({ ...prevData, [name]: value }));
  }

  function onBaseError(key: string, message: string) {
    setCommodityError(prevData => ({ ...prevData, [key]: message }));
  }

  function onEquityChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    ClearError(); // clearing all the errors
    const { name, value } = e.target;
    setEquityFormData(prevData => ({ ...prevData, [name]: value }));
  }

  function onOptionChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    ClearError(); // clearing all the errors
    const { name, value } = e.target;
    setOptionFormData(prevData => ({ ...prevData, [name]: value }));
  }

  function onHedgeChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    ClearError(); // clearing all the errors
    const { name, value } = e.target;
    setHedgeFormData(prevData => ({ ...prevData, [name]: value }));
  }

  function onHedge2Change(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    ClearError(); // clearing all the errors
    const { name, value } = e.target;
    setHedge2FormData(prevData => ({ ...prevData, [name]: value }));
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (validateEmptyString(UserData()?._id ?? '')) return toast.error('Invalid Admin Id.');
      if (validateEmptyString(commodityTrading.trading_type))
        return onBaseError('trading_type', 'Trading type is required.');
      setIsLoading(true);

      let data;
      if (commodityTrading.trading_type === 'equity') {
        data = {
          trading_type: commodityTrading.trading_type,
          equity: {
            plan_type: commodityTrading.plan_type,
            share_name: equityFormData.share_name,
            buy_sell_type: equityFormData.buy_cell,
            price_range_from: Number(equityFormData.price_from),
            price_range_to: Number(equityFormData.price_to),
            min_quantity: Number(equityFormData.minimum_quantity),
            target_set: Number(equityFormData.target),
            stop_loss: Number(equityFormData.stoploss),
          },
        };
      } else if (commodityTrading.trading_type === 'option') {
        // for open and hedge
        if (commodityTrading.option_type === 'open') {
          data = {
            trading_type: commodityTrading.trading_type,
            options: {
              plan_type: commodityTrading.plan_type,
              option_type: commodityTrading.option_type,
              open: {
                share_name: optionFormData.share_name,
                buy_sell_type: optionFormData.buy_cell,
                option_call: optionFormData.ce_pe_type,
                strike_price: Number(optionFormData.strick_price),
                price_range_from: Number(optionFormData.price_from),
                price_range_to: Number(optionFormData.price_to),
                min_quantity: Number(optionFormData.minimum_quantity),
                target_set: Number(optionFormData.target),
                stop_loss: Number(optionFormData.stoploss),
              },
            },
          };
        } else if (commodityTrading.option_type === 'hedge') {
          data = {
            trading_type: commodityTrading.trading_type,
            options: {
              plan_type: commodityTrading.plan_type,
              option_type: commodityTrading.option_type,
              hedge: {
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
              },
            },
          };
        }
      }

      const response: IMessageResponse = await apiService.post(`/admin/${UserData()?._id}/create-mcx`, data);
      if (response.success && response.status === 201) {
        ClearError();
        ClearFormData();
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
        <form
          className={`${styles.create_Client_section} ${commodityStyles.create_Client_section} ${commodityTrading.option_type === 'hedge' ? commodityStyles.hedgeForm : commodityStyles.open} `}
          onSubmit={handleFormSubmit}
        >
          <div className={`${optionStyles.inr_create_Client_section} element_center `}>
            {/* section 1 */}
            <div className={`${styles.Client_input_container}  d-flex  flex-wrap `}>
              <div className={`${commodityStyles.top_single_input}`}>
                <SelectField
                  label={''}
                  options={[
                    { label: 'Select Trading Type', value: '' },
                    { label: 'Equity Trading', value: 'equity' },
                    { label: 'Option Trading', value: 'option' },
                  ]}
                  name="trading_type"
                  value={commodityTrading.trading_type}
                  onChange={onBaseChange}
                  error={commodityError.trading_type}
                  className={`${styles.Client_input_section} ${commodityStyles.Client_input_section} my-2`}
                />
              </div>
              <div className={`${commodityStyles.top_single_input}`}>
                <SelectField
                  label={''}
                  options={callTypeOption}
                  name="plan_type"
                  value={commodityTrading.plan_type}
                  onChange={onBaseChange}
                  error={commodityError.plan_type}
                  className={`${styles.Client_input_section} ${commodityStyles.Client_input_section}`}
                />
              </div>
            </div>

            <div
              className={`${styles.Client_input_container} w-100 d-flex flex-column element_center ${commodityStyles.all_inputs}`}
            >
              {commodityTrading.trading_type == 'equity' ? (
                <Equity formData={equityFormData} getError={equityError} onChange={onEquityChange} />
              ) : (
                <>
                  <div className={`${styles.inr_create_Client_section} element_center w-100`}>
                    {/* section 1 */}
                    <div className={`${styles.Client_input_container}  d-flex  justify-content-between `}>
                      <div className={`${commodityStyles.top_single_input} w-100`}>
                        <SelectField
                          label={''}
                          options={[
                            { label: 'Select Option Type', value: '' },
                            { label: 'Open', value: 'open' },
                            { label: 'Hedge', value: 'hedge' },
                          ]}
                          name="option_type"
                          value={commodityTrading.option_type}
                          onChange={onBaseChange}
                          error={commodityError.option_type}
                          className={`${styles.Client_input_section} ${commodityStyles.Client_input_container} ${commodityStyles.Client_input_section}`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={commodityStyles.defaultInputs}>
                    {commodityTrading.option_type == 'open' ? (
                      <OptionData formData={optionFormData} getError={optionError} onChange={onOptionChange} />
                    ) : (
                      <div className={commodityStyles.hedgeData}>
                        <Hedge
                          formData={hedgeformData}
                          formData2={hedge2formData}
                          getError={hedgeError}
                          getError2={hedge2Error}
                          onChange={onHedgeChange}
                          onChange2={onHedge2Change}
                        />
                      </div>
                    )}
                  </div>
                </>
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
