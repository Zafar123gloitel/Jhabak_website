'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { validateEmail, validateIndianPhoneNumber } from 'regexx';
import styles from './styles.module.scss';
import InputField from '@/components/InputField/InputField';
import TradeTypeInput from './tradeTypeInput';

const CREATE_CORPORATE_CLIENT = {
  name: '',
  email: '',
  phone_number: '',
  pan_number: '',
  aadhar_card: '',
  isActive: true,
  isSubscription: false,
};

const DEFAULT_SELECT = { duration: '', trade_type: '' };

const CreateClientForm = () => {
  const [formData, setFormData] = useState(CREATE_CORPORATE_CLIENT);
  const [getError, setGetError] = useState({ ...CREATE_CORPORATE_CLIENT });
  const [isLoading, setIsLoading] = useState(false);

  const [isDayChecked, setIsDayChecked] = useState(false);
  const [selectedDayOption, setSelectedDayOption] = useState({ ...DEFAULT_SELECT });

  const [isWeekChecked, setIsWeekChecked] = useState(false);
  const [selectedWeekOption, setSelectedWeekOption] = useState({ ...DEFAULT_SELECT });

  const [isMonthChecked, setIsMonthChecked] = useState(false);
  const [selectedMonthOption, setSelectedMonthOption] = useState({ ...DEFAULT_SELECT });

  const [isYearChecked, setIsYearChecked] = useState(false);
  const [selectedYearOption, setSelectedYearOption] = useState({ ...DEFAULT_SELECT });

  function Reset() {
    setGetError({ ...CREATE_CORPORATE_CLIENT });
    setFormData(CREATE_CORPORATE_CLIENT);
    setIsLoading(false);
    setIsDayChecked(false);
    setIsWeekChecked(false);
    setIsMonthChecked(false);
    setIsYearChecked(false);
    setSelectedDayOption({ ...DEFAULT_SELECT });
    setSelectedWeekOption({ ...DEFAULT_SELECT });
    setSelectedMonthOption({ ...DEFAULT_SELECT });
    setSelectedYearOption({ ...DEFAULT_SELECT });
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setGetError({ ...CREATE_CORPORATE_CLIENT }); // clearing all the errors
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevData => ({ ...prevData, [name]: newValue }));
  }

  function onError(key: string, msg: string) {
    setGetError(prev => ({ ...prev, [key]: msg }));
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!validateEmail(formData.email)) return onError('email', 'Invalide Email Address.');
      if (!validateIndianPhoneNumber(formData.phone_number)) return onError('phone_number', 'Invalide Phone Number.');
      setIsLoading(true);
      const day = { isDayChecked, ...selectedDayOption };
      const week = { isWeekChecked, ...selectedWeekOption };
      const month = { isMonthChecked, ...selectedMonthOption };
      const year = { isYearChecked, ...selectedYearOption };

      // eslint-disable-next-line no-console
      console.log('<<<<formData>>>>', { ...formData, day, week, month, year });

      Reset();
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
        <form className={`${styles.create_Client_section} element_center flex-column`} onSubmit={handleFormSubmit}>
          <div className={`${styles.inr_create_Client_section}`}>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                label={'Full Name *'}
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                placeholder="Ex : John Doe"
                className={`${styles.Client_input_section}`}
                error={getError.name}
              />
            </div>

            <div className={`${styles.Client_input_container}`}>
              <InputField
                label={'Email Address *'}
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="Enter Email Address"
                className={`${styles.Client_input_section}`}
                error={getError.email}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                label={'Phone Number *'}
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={onChange}
                placeholder="Eg: +918648594525"
                className={`${styles.Client_input_section}`}
                error={getError.phone_number}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                label={'PAN Number *'}
                type="text"
                name="pan_number"
                value={formData.pan_number}
                onChange={onChange}
                placeholder="Enter Your PAN Number"
                className={`${styles.Client_input_section}`}
                error={getError.pan_number}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                label={'Adhaar *'}
                type="text"
                name="aadhar_card"
                value={formData.aadhar_card}
                onChange={onChange}
                placeholder="Enter Your Addhar Number"
                className={`${styles.Client_input_section}`}
                error={getError.aadhar_card}
              />
            </div>

            <div className={`${styles.Client_input_container}`}>
              <fieldset className="mt-4">
                <span>
                  <input
                    type="checkbox"
                    id="isActive"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={onChange}
                  />
                  <label htmlFor="isActive">isActive</label>
                </span>

                <span>
                  <input
                    type="checkbox"
                    id="subscription"
                    name="isSubscription"
                    checked={formData.isSubscription}
                    onChange={onChange}
                  />
                  <label htmlFor="subscription">Subscription</label>
                </span>
              </fieldset>
            </div>
          </div>
          <div className={` ${styles.plan_headings} d-flex mt-3 text-white w-100 element_center`}>
            <div className="d-flex">
              <span className={` ${styles.single_plan} css-f15 `}>Select Plan </span>
              <span className={` ${styles.single_plan} css-f15`}>Select Duration </span>
              <span className={` ${styles.single_plan} css-f15 d-flex  justify-content-center`}>Select Trade Type</span>
            </div>
          </div>

          <div
            className={`${styles.Client_input_container} ${styles.plans_details} w-100 element_center flex-column mt-2`}
          >
            <div className={`${styles.single_plan_field}`}>
              <Checkbox label="Day Call" isChecked={isDayChecked} setIsChecked={setIsDayChecked} />
              <TradeTypeInput setSelectedOptions={setSelectedDayOption} />
            </div>

            <div className={`${styles.single_plan_field}`}>
              <Checkbox label="Weekly Call" isChecked={isWeekChecked} setIsChecked={setIsWeekChecked} />
              <TradeTypeInput setSelectedOptions={setSelectedWeekOption} />
            </div>

            <div className={`${styles.single_plan_field}`}>
              <Checkbox label="Monthly Call" isChecked={isMonthChecked} setIsChecked={setIsMonthChecked} />
              <TradeTypeInput setSelectedOptions={setSelectedMonthOption} />
            </div>

            <div className={`${styles.single_plan_field}`}>
              <Checkbox label="Year Call" isChecked={isYearChecked} setIsChecked={setIsYearChecked} />
              <TradeTypeInput setSelectedOptions={setSelectedYearOption} />
            </div>
          </div>

          <div className={`${styles.sbt_button} w-100 d-flex element_center`}>
            <button type="submit" className={`${styles.smt_btn} Dark_button css-f16`}>
              {isLoading ? 'Loading...' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

function Checkbox({
  label,
  isChecked,
  setIsChecked,
}: {
  label: string;
  isChecked: boolean;
  setIsChecked: (prev: boolean) => void;
}) {
  return (
    <div className={`${styles.single_plan}`}>
      <input type="checkbox" id={label} onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
      <label htmlFor={label} className="css-f12">
        {label}
      </label>
    </div>
  );
}

export default CreateClientForm;
