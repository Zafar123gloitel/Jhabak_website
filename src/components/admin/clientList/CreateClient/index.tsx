'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { validateEmail, validateIndianPhoneNumber } from 'regexx';
import styles from './styles.module.scss';
import InputField from '@/components/InputField/InputField';
import { inputsDetails } from './inputConfig';
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

const CreateClientForm = () => {
  const [formData, setFormData] = useState(CREATE_CORPORATE_CLIENT);
  // const [isLoading, setIsLoading] = useState(false);
  const [getError, setGetError] = useState({ ...CREATE_CORPORATE_CLIENT });

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
      // setIsLoading(true);

      setGetError({ ...CREATE_CORPORATE_CLIENT });
    } catch (error) {
      const _e = error as Error;
      toast.error(_e.message);
    } finally {
      // setIsLoading(false);
    }
  }

  return (
    <>
      <div className={`${styles.create_form} element_center`}>
        <form className={`${styles.create_Client_section} element_center flex-column`} onSubmit={handleFormSubmit}>
          <div className={`${styles.inr_create_Client_section}`}>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                label={'Complete Name *'}
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
                placeholder="Ex : John Doe"
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
                label={'PAN Card Number *'}
                type="text"
                name="pan_number"
                value={formData.pan_number}
                onChange={onChange}
                placeholder="Eg: DX5648594525"
                className={`${styles.Client_input_section}`}
                error={getError.pan_number}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                label={'Adhaar Number *'}
                type="text"
                name="aadhar_card"
                value={formData.aadhar_card}
                onChange={onChange}
                placeholder="Eg: 5648594525"
                className={`${styles.Client_input_section}`}
                error={getError.aadhar_card}
              />
            </div>

            <div className={`${styles.Client_input_container}`}>
              <fieldset>
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
              <strong className={` ${styles.single_plan} css-f15 `}>Select Plan </strong>
              <strong className={`  ${styles.single_plan} css-f15`}>Select Duration </strong>
              <strong className={`  ${styles.single_plan} css-f15`}>Select Trade Type</strong>
            </div>
          </div>
          <div
            className={`${styles.Client_input_container} ${styles.plans_details} w-100 element_center flex-column mt-2`}
          >
            {inputsDetails &&
              inputsDetails.map(item => {
                return (
                  <>
                    <TradeTypeInput
                      key={item.callTypeName}
                      callTypeName={item.callTypeName}
                      callTypeLabel={item.callTypeLabel}
                      planDurationName={item.planDurationName}
                      planDuration={item.planDuration}
                      tradeTypeName={item.tradeTypeName}
                    />
                  </>
                );
              })}
          </div>

          <div className={`${styles.sbt_button} w-100 d-flex element_center`}>
            <button type="submit" className={`${styles.smt_btn} Dark_button css-f16`}>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateClientForm;
