'use client';
import React, { useState } from 'react';

import styles from '@/components/admin/tradingCalls/style.module.scss';
// import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/InputField/SelectField';
import commodityStyles from './commodityTrading.module.scss';
import optionStyles from '../style.module.scss';

import {
  DefaultCommodityTrading,
  DefaultCommodityTradingError,
  DefaultEquitError,
  callTypeOption,
  DefaultEquityTrading,
  DefaultOptionTrading,
  DefaultOptionError,
} from '@/components/admin/tradingCalls/options.constant';
import Equity from '../equity';
import { toast } from 'react-toastify';
import OptionData from '../optionTrading/singleOptionInputs';
import { Hedge } from '../optionTrading/Hedge';

const CommodityTrading = () => {
  // default equity
  const [defaultEquityData, setDefaultEquityData] = useState<typeof DefaultEquityTrading>(DefaultEquityTrading);
  // default equity Error
  const [defaultEquityError, setDefaultEquityError] = useState<typeof DefaultEquitError>(DefaultEquitError);

  //default Option
  const [defaultOptionData, setDefaultOptionData] = useState<typeof DefaultOptionTrading>(DefaultOptionTrading);
  //default Option
  const [defaultOptionDataError, setDefaultOptionDataError] = useState<typeof DefaultOptionError>(DefaultOptionError);

  // commodity equity
  const [defaultCommodityTrading, setDefaultCommodityTrading] =
    useState<typeof DefaultCommodityTrading>(DefaultCommodityTrading);

  // commodity equity Error
  const [defaultCommodityError, setDefaultCommodityError] =
    useState<typeof DefaultCommodityTradingError>(DefaultCommodityTradingError);

  // for hedge Option Data
  const [hedgeformData, setHedgeFormData] = useState<typeof DefaultOptionTrading>(DefaultOptionTrading);
  const [hedgeError, setHedgeError] = useState<typeof DefaultOptionError>(DefaultOptionError);

  const [hedge2formData, setHedge2FormData] = useState<typeof DefaultOptionTrading>(DefaultOptionTrading);
  const [hedge2Error, setHedge2Error] = useState<typeof DefaultOptionError>(DefaultOptionError);

  const [isLoading, setIsLoading] = useState(false);

  function ClearError() {
    setDefaultCommodityError(defaultCommodityError);
    setDefaultOptionDataError(defaultOptionDataError);
    setHedgeError(DefaultOptionError);
    setHedge2Error(DefaultOptionError);
    // stopLoading();
    setDefaultOptionData(defaultOptionData);
  }

  // function ClearFormData() {
  //   setDefaultOptionData(defaultOptionData);
  //   setDefaultEquityData(defaultEquityData);
  //   setHedgeFormData(DefaultOptionTrading);
  //   setHedge2FormData(DefaultOptionTrading);
  //   // stopLoading();
  // }

  function onBaseChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    {
      e.target.name === 'trading_type' && setDefaultCommodityTrading(defaultCommodityTrading);
    }
    setDefaultCommodityError(defaultCommodityError);
    const { name, value } = e.target;

    setDefaultCommodityTrading(prevData => ({ ...prevData, [name]: value }));
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setDefaultEquityError(defaultEquityError); // clearing all the errors

    const { name, value } = e.target;
    setDefaultEquityData(prevData => ({ ...prevData, [name]: value }));
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

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setIsLoading(true);

      // console.log('<<<formData>>>', formData);
      setDefaultEquityError(defaultEquityError);
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
          className={`${styles.create_Client_section} ${commodityStyles.create_Client_section} ${defaultCommodityTrading.option_type === 'hedge' && commodityStyles.hedgeForm} `}
          onSubmit={handleFormSubmit}
        >
          <div className={`${optionStyles.inr_create_Client_section} element_center `}>
            {/* section 1 */}
            <div className={`${styles.Client_input_container}  d-flex justify-content-between `}>
              <div className={`${commodityStyles.top_single_input}`}>
                <SelectField
                  label={''}
                  options={[
                    { label: 'Select Trading Type', value: '' },
                    { label: 'Equity Trading', value: 'equity' },
                    { label: 'Option Trading', value: 'option' },
                  ]}
                  name="trading_type"
                  value={defaultCommodityTrading.trading_type}
                  onChange={onBaseChange}
                  // error={errorInput.plan_name}
                  className={`${styles.Client_input_section} ${commodityStyles.Client_input_section} my-2`}
                />
              </div>
              <div className={`${commodityStyles.top_single_input}`}>
                <SelectField
                  label={''}
                  options={callTypeOption}
                  name="plan_name"
                  value={defaultCommodityTrading.plan_type}
                  onChange={onBaseChange}
                  // error={errorInput.plan_name}
                  className={`${styles.Client_input_section} ${commodityStyles.Client_input_section}`}
                />
              </div>
            </div>

            <div className={`${styles.Client_input_container} w-100 d-flex flex-column element_center`}>
              {defaultCommodityTrading.trading_type == 'equity' ? (
                <Equity formData={defaultEquityData} getError={defaultEquityError} onChange={onChange} />
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
                          value={defaultCommodityTrading.option_type}
                          onChange={onBaseChange}
                          error={defaultCommodityError.option_type}
                          className={`${styles.Client_input_section} ${commodityStyles.Client_input_container} ${commodityStyles.Client_input_section}`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={commodityStyles.defaultInputs}>
                    {defaultCommodityTrading.option_type == 'open' ? (
                      <OptionData formData={defaultOptionData} getError={defaultOptionDataError} onChange={onChange} />
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
