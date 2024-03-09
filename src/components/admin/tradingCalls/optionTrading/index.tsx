'use client';
import React, { useState } from 'react';

import { toast } from 'react-toastify';

import styles from '../style.module.scss';
import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/InputField/SelectField';
import optionStyles from './option.module.scss';

const callTypeOption = [
  { label: 'Select Plan', value: '' },
  { label: 'Day Calls', value: 'day_calls' },
  { label: 'Weekly Calls', value: 'week_calls' },
  { label: 'Monthly Calls', value: 'month_calls' },
  { label: 'Long Term Calls', value: 'year_calls' },
];

const DefaultBaseType = {
  plan_name: '',
  options_type: '',
};

const DefaultEquityTrading = {
  share_name: '',
  buy_cell: '',
  price_from: 0,
  price_to: 0,
  target: 0,
  stoploss: 0,
  minimum_quantity: 0,
};

const DefaultError = {
  plan_name: '',
  options_type: '',
  buy_cell: '',
  share_name: '',
  price_from: '',
  price_to: '',
  stoploss: '',
  target: '',
  minimum_quantity: '',
};

const OptionTrading = () => {
  const [baseType, setBaseType] = useState<typeof DefaultBaseType>(DefaultBaseType);
  const [formData, setFormData] = useState<typeof DefaultEquityTrading>(DefaultEquityTrading);
  const [formData2, setFormData2] = useState<typeof DefaultEquityTrading>({ ...DefaultEquityTrading });
  const [getError, setGetError] = useState<typeof DefaultError>(DefaultError);
  const [isLoading, setIsLoading] = useState(false);

  function onBaseChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setGetError(DefaultError); // clearing all the errors
    const { name, value } = e.target;
    setBaseType(prevData => ({ ...prevData, [name]: value }));
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setGetError(DefaultError); // clearing all the errors
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  function onChange2(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setGetError(DefaultError); // clearing all the errors
    const { name, value } = e.target;
    setFormData2(prevData => ({ ...prevData, [name]: value }));
  }

  // function onError(key: string, msg: string) {
  //   setGetError(prev => ({ ...prev, [key]: msg }));
  // }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setIsLoading(true);

      // console.log('<<<baseType>>>', baseType);
      // console.log('<<<formData>>>', formData);
      // console.log('<<<formData2>>>', formData2);
      setGetError(DefaultError);
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
          className={`${styles.create_Client_section} ${optionStyles.create_Client_section} ${baseType.options_type === 'hedge' && optionStyles.hedgeDesign}`}
          onSubmit={handleFormSubmit}
        >
          <div className={`${styles.inr_create_Client_section} d-flex`}>
            {/* section 1 */}
            <div className={`${styles.Client_input_container}`}>
              <SelectField
                label={'Select Plan *'}
                options={callTypeOption}
                name="plan_name"
                value={baseType.plan_name}
                onChange={onBaseChange}
                error={getError.plan_name}
                className={`${styles.Client_input_section}  ${optionStyles.Client_input_container}`}
              />

              <SelectField
                label={'Option Type *'}
                options={[
                  { label: 'Open', value: 'open' },
                  { label: 'Hedge', value: 'hedge' },
                ]}
                name="options_type"
                value={baseType.options_type}
                onChange={onBaseChange}
                error={getError.options_type}
                className={`${styles.Client_input_section}  ${optionStyles.Client_input_container}`}
              />
            </div>

            <div className={`${styles.Client_input_container} ${optionStyles.Client_input_container}`}>
              {/* section 2 */}
              <div className={`${styles.single_side_option} ${optionStyles.single_side_option}`}>
                <div className={`${styles.Client_input_container}`}>
                  <InputField
                    label={'Share Name *'}
                    type="text"
                    name="share_name"
                    value={formData.share_name}
                    onChange={onChange}
                    error={getError.share_name}
                    placeholder="Ex : Nifty 50"
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
                    error={getError.buy_cell}
                    className={`${styles.Client_input_section}  ${optionStyles.Client_input_container}`}
                  />
                </div>
                <div className={`${styles.Client_input_container} ${styles.price_range}`}>
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

                <div className={`${styles.Client_input_container} ${styles.price_actions}`}>
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
                      label={'Minimum Quantity *'}
                      type="number"
                      name="minimum_quantity"
                      value={formData.minimum_quantity}
                      onChange={onChange}
                      error={getError.minimum_quantity}
                      placeholder="Eg: 5"
                      className={`${styles.Client_input_section}`}
                    />
                  </div>
                </div>
              </div>

              {/* section 3 */}
              {baseType.options_type === 'hedge' && (
                <div className={`${styles.single_side_option} ${optionStyles.single_side_option}`}>
                  <div className={`${styles.Client_input_container}`}>
                    <InputField
                      label="Share Name *"
                      type="text"
                      name="share_name"
                      value={formData2.share_name}
                      onChange={onChange2}
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
                      value={formData2.buy_cell}
                      onChange={onChange2}
                      error={getError.buy_cell}
                      className={`${styles.Client_input_section}`}
                    />
                  </div>
                  <div className={`${styles.Client_input_container}`}>
                    <InputField
                      label={'Price Range From *'}
                      type="number"
                      name="price_from"
                      value={formData2.price_from}
                      onChange={onChange2}
                      error={getError.price_from}
                      placeholder="Eg: 275"
                      className={`${styles.Client_input_section}`}
                    />
                    <InputField
                      label={'Price Range To *'}
                      type="number"
                      name="price_to"
                      value={formData2.price_to}
                      onChange={onChange2}
                      error={getError.price_to}
                      placeholder="Eg: 280"
                      className={`${styles.Client_input_section}`}
                    />
                  </div>

                  <div className={`${styles.Client_input_container}`}>
                    <div>
                      <InputField
                        label={'Target *'}
                        type="number"
                        name="target"
                        value={formData2.target}
                        onChange={onChange2}
                        error={getError.target}
                        placeholder="Eg: 350"
                        className={`${styles.Client_input_section}`}
                      />
                    </div>
                    <div>
                      <InputField
                        label={'Stoploss *'}
                        type="number"
                        name="stoploss"
                        value={formData2.stoploss}
                        onChange={onChange2}
                        error={getError.stoploss}
                        placeholder="Eg: 245"
                        className={`${styles.Client_input_section}`}
                      />
                    </div>

                    <div>
                      <InputField
                        label={'Minimum Quantity *'}
                        type="number"
                        name="minimum_quantity"
                        value={formData2.minimum_quantity}
                        onChange={onChange2}
                        error={getError.minimum_quantity}
                        placeholder="Eg: 5"
                        className={`${styles.Client_input_section}`}
                      />
                    </div>
                  </div>
                </div>
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
