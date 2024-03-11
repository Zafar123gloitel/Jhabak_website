'use client';
import React, { useState } from 'react';

import { toast } from 'react-toastify';

import styles from '../style.module.scss';
// import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/InputField/SelectField';
import optionStyles from './option.module.scss';
import OptionData from './singleOptionInputs';
import useLoading from '@/components/loading/Loader';
import { DefaultBaseType, DefaultEquityTrading, DefaultError, callTypeOption } from './optionConfig';

const OptionTrading = () => {
  const [optionType, setOptionType] = useState<typeof DefaultBaseType>(DefaultBaseType);
  const [formDataOpen, setFormDataOpen] = useState<typeof DefaultEquityTrading>(DefaultEquityTrading);
  const [formDataHedge, setFormDataHedge] = useState<typeof DefaultEquityTrading>({ ...DefaultEquityTrading });
  const [errorInput, setErrorInput] = useState<typeof DefaultError>(DefaultError);
  const { isLoading, stopLoading, startLoading } = useLoading();

  function onBaseChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setErrorInput(DefaultError); // clearing all the errors
    const { name, value } = e.target;
    setOptionType(prevData => ({ ...prevData, [name]: value }));
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setErrorInput(DefaultError); // clearing all the errors
    const { name, value } = e.target;
    setFormDataOpen(prevData => ({ ...prevData, [name]: value }));
  }

  function onChange2(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setErrorInput(DefaultError); // clearing all the errors
    const { name, value } = e.target;
    setFormDataHedge(prevData => ({ ...prevData, [name]: value }));
  }

  // function onError(key: string, msg: string) {
  //   setErrorInput(prev => ({ ...prev, [key]: msg }));
  // }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      startLoading();
      // setIsLoading(true);

      // console.log('<<<baseType>>>', baseType);
      // console.log('<<<formData>>>', formData);
      // console.log('<<<formData2>>>', formData2);
      setErrorInput(DefaultError);
    } catch (error) {
      const _e = error as Error;
      toast.error(_e.message);
    } finally {
      // setIsLoading(false);
      stopLoading();
    }
  }

  return (
    <>
      <div className={`${styles.create_form} element_center`}>
        <form
          className={`${styles.create_Client_section} ${optionStyles.create_Client_section} ${optionType.options_type === 'hedge' && optionStyles.hedgeDesign}`}
          onSubmit={handleFormSubmit}
        >
          <div className={`${styles.inr_create_Client_section} element_center`}>
            {/* section 1 */}

            <div
              className={`${styles.Client_input_container}  d-flex  ${optionType.options_type === 'hedge' ? optionStyles.hedge_input : optionStyles.top_inputs}`}
            >
              <div className={optionStyles.top_single_input}>
                <SelectField
                  label={'Option Type *'}
                  options={[
                    { label: 'Open', value: 'open' },
                    { label: 'Hedge', value: 'hedge' },
                  ]}
                  name="options_type"
                  value={optionType.options_type}
                  onChange={onBaseChange}
                  error={errorInput.options_type}
                  className={`${styles.Client_input_section}  ${optionStyles.Client_input_container} ${optionStyles.Client_input_section}`}
                />
              </div>
              <div className={`${optionStyles.top_single_input}`}>
                <SelectField
                  label={'Select Plan *'}
                  options={callTypeOption}
                  name="plan_name"
                  value={optionType.plan_name}
                  onChange={onBaseChange}
                  error={errorInput.plan_name}
                  className={`${styles.Client_input_section} ${optionStyles.Client_input_section}`}
                />
              </div>
            </div>

            <div className={`${styles.Client_input_container} ${optionStyles.Client_input_container}`}>
              {/* section 2 */}
              <OptionData formData={formDataOpen} getError={errorInput} onChange={onChange} />

              {/* section 3 */}
              {optionType.options_type === 'hedge' && (
                <OptionData formData={formDataHedge} getError={errorInput} onChange={onChange2} />
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
