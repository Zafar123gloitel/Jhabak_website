'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { validateEmail, validateIndianPhoneNumber } from 'regexx';
import styles from './styles.module.scss';
import InputField from '@/components/InputField/InputField';

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
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);

      setGetError({ ...CREATE_CORPORATE_CLIENT });
    } catch (error) {
      const _e = error as Error;
      toast.error(_e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className={`${styles.create_form} All_content_center`}>
        <form className={`${styles.create_Client_section}`} onSubmit={handleFormSubmit}>
          <div className={`${styles.create_client_img} w-100 All_content_center flex-column`}>
            <Image src={'/assets/svg/admin/client_form.svg'} alt={'Create Client'} width={80} height={80} />
            <h5>Create Corporate Client </h5>
          </div>
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
                <div>
                  <input
                    type="checkbox"
                    id="isActive"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={onChange}
                  />
                  <label htmlFor="isActive">isActive</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="subscription"
                    name="isSubscription"
                    checked={formData.isSubscription}
                    onChange={onChange}
                  />
                  <label htmlFor="subscription">Subscription</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div className={`${styles.Client_input_container} ${styles.plans_details} w-100`}>
            <fieldset className="d-flex justify-content-around">
              <div>
                <input type="checkbox" id="day_call" name="day_call" />
                <label htmlFor="day_call">Day Call</label>
              </div>

              <div className="d-flex justify-content-around">
                <input type="radio" id="1mth" name="duration" value="1mth" />
                <label htmlFor="1mth">1 Mth</label>
                <br />
                <input type="radio" id="2mth" name="duration" value="2mth" />
                <label htmlFor="2mth">2Mth</label>
                <br />
                <input type="radio" id="3mth" name="duration" value="3mth" />
                <label htmlFor="javascript">3mth</label>
              </div>
              <div>
                <select id="trade_type" name="callType">
                  <option value="">Select an option</option>
                  <option value="equity">Equity</option>
                  <option value="option">Option</option>
                  <option value="MCX">MCX</option>
                </select>
              </div>
            </fieldset>

            <fieldset className="d-flex justify-content-around">
              <div>
                <input type="checkbox" id="weekly_call" name="day_call" />
                <label htmlFor="weekly_call">Weekly Call</label>
              </div>

              <div className="d-flex justify-content-around">
                <input type="radio" id="week_1mth" name="select_duration" value="week_1mth" />
                <label htmlFor="week_1mth">1 Mth</label>
                <br />
                <input type="radio" id="week_2mth" name="select_duration" value="week_2mth" />
                <label htmlFor="week_2mth">2Mth</label>
                <br />
                <input type="radio" id="week_3mth" name="select_duration" value="week_3mth" />
                <label htmlFor="week_3mth">3mth</label>
              </div>
              <div>
                <select name="trade_type" id="trade_type">
                  <option value="equity">Equity</option>
                  <option value="option">Option</option>
                  <option value="MCX">MCX</option>
                </select>
              </div>
            </fieldset>

            <fieldset className="d-flex justify-content-around">
              <div>
                <input type="checkbox" id="monthly_call" name="monthly_call" />
                <label htmlFor="monthly_call">Monthly Call</label>
              </div>

              <div className="d-flex justify-content-around">
                <input type="radio" id="mon_1mth" name="select_duration" value="mon_1mth" />
                <label htmlFor="mon_1mth">1 Mth</label>
                <br />
                <input type="radio" id="mon_2mth" name="select_duration" value="mon_2mth" />
                <label htmlFor="mon_2mth">2Mth</label>
                <br />
                <input type="radio" id="mon_3mth" name="select_duration" value="mon_3mth" />
                <label htmlFor="mon_3mth">3mth</label>
                <input type="radio" id="mon_1yr" name="select_duration" value="mon_1yr" />
                <label htmlFor="mon_1yr">1yr</label>
              </div>
              <div>
                <select name="trade_type" id="trade_type">
                  <option value="equity">Equity</option>
                  <option value="option">Option</option>
                  <option value="MCX">MCX</option>
                </select>
              </div>
            </fieldset>

            <fieldset className="d-flex justify-content-around">
              <div>
                <input type="checkbox" id="year_call" name="year_call" />
                <label htmlFor="year_call">Year Call</label>
              </div>

              <div className="d-flex justify-content-around">
                <input type="radio" id="1mth" name="select_duration" value="year_1mth" />
                <label htmlFor="year_1mth">1 Mth</label>
                <br />
                <input type="radio" id="year_2mth" name="select_duration" value="year_2mth" />
                <label htmlFor="year_2mth">2Mth</label>
                <br />
                <input type="radio" id="year_3mth" name="select_duration" value="year_3mth" />
                <label htmlFor="javascript">year_3mth</label>
              </div>
              <div>
                <select name="trade_type" id="trade_type">
                  <option value="equity">Equity</option>
                  <option value="option">Option</option>
                  <option value="MCX">MCX</option>
                </select>
              </div>
            </fieldset>
          </div>

          <div className="w-100 d-flex justify-content-end ">
            <button type="submit" className={`${styles.smt_btn} Dark_button float-right`}>
              {isLoading ? 'Loading...' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateClientForm;
