'use client';
import React, { useState } from 'react';
import styles from './enquiryForm.module.scss';
import InputField from '@/components/InputField/InputField';
import TextAreaInput from '@/components/InputField/TextAreaInput';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { ddItems } from '@/services/country';
import validation from '@/services/validation';

const defaultEnquiryData = {
  fname: '',
  lname: '',
  email: '',
  mobile: '',
  message: '',
};

export const EnquiryForm = () => {
  const [data, setData] = useState(ddItems);
  const [countryCode, setCountryCode] = useState('+91');
  const [searchValue, setSearchValue] = useState('');
  const [enquiryData, setEnquiryData] = useState(defaultEnquiryData);
  const [enquiryDataError, setEnquiryDataError] = useState(defaultEnquiryData);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setEnquiryDataError(defaultEnquiryData);
    setEnquiryData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!validation.requied(enquiryData?.fname)) {
        setEnquiryDataError(prev => ({ ...prev, fname: 'First Name Require' }));
      }
      if (!validation.requied(enquiryData?.lname)) {
        setEnquiryDataError(prev => ({ ...prev, lname: 'Last Name Require' }));
      }

      if (!validation.email(enquiryData?.email)) {
        setEnquiryDataError(prev => ({ ...prev, email: 'Invalid Email Form' }));
      }
      if (!validation.mobile(countryCode + enquiryData?.mobile)) {
        setEnquiryDataError(prev => ({ ...prev, mobile: 'Invalid Phone Number' }));
      }
      if (!validation.requied(enquiryData?.message)) {
        setEnquiryDataError(prev => ({ ...prev, message: 'Message Required' }));
      }

      // setEnquiryDataError(defaultenquiryData);
    } catch (error) {
      const typeError = error as Error;

      return new Error(typeError.message);
    }
  }

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value === '') {
      setData(ddItems);
    } else {
      const filterResult = ddItems.filter(item => item.country.toLowerCase().includes(e.target.value.toLowerCase()));
      setData(filterResult);
    }
    setSearchValue(e.target.value);
  };
  const handleCountry = (code: string) => {
    setCountryCode(code);
  };
  return (
    <form className={styles.form_enquiry} onSubmit={onSubmit}>
      <div className={styles.input_container}>
        <div className={`${styles.names} d-flex`}>
          <span>
            <InputField
              label="First Name"
              type="text"
              placeholder="Enter First Name"
              error={enquiryDataError.fname}
              name="fname"
              className={styles.enquiry_input}
              onChange={onChange}
              value={enquiryData.fname}
            />
          </span>
          <span>
            <InputField
              label="Last Name"
              type="text"
              placeholder="Enter Last Name"
              error={enquiryDataError.lname}
              name="lname"
              className={styles.enquiry_input}
              onChange={onChange}
              value={enquiryData.lname}
            />
          </span>
        </div>
        <span>
          <div className={`${styles['detail_css']}`}>
            <label className={`${styles['phone_code_lable_css']} text-white css-f14`} htmlFor="phone">
              Phone number
            </label>
            <div className="country_code">
              <div className=" country-collection">
                <DropdownButton id="dropdown-basic-button" title={countryCode} className="dropdown-btn-phn ">
                  <input
                    type="text"
                    className="search drop_search dark_input bg-transparent text-dark"
                    placeholder="Search"
                    name="countryCode"
                    value={searchValue}
                    onChange={filterHandler}
                  />
                  <div className="dd-item-wrp">
                    {data.map((d: Record<string, string>, index: number) => {
                      return (
                        <Dropdown.Item key={index} onClick={() => handleCountry(d.code)}>
                          <span className="right">{d.code}</span>
                          <span className="left ">{d.country}</span>
                        </Dropdown.Item>
                      );
                    })}
                  </div>
                </DropdownButton>
                <InputField
                  type="number"
                  label=""
                  name="mobile"
                  placeholder="Enter your mobile"
                  onChange={onChange}
                  value={enquiryData.mobile}
                  error={enquiryDataError.mobile}
                  className={`${styles.consultant_phone} phone_input ${styles.phone_input} dark_input`}
                />
              </div>
            </div>
          </div>
        </span>
      </div>
      <div className={styles.input_container}>
        <span className="w-100">
          <InputField
            label="Email"
            type="email"
            placeholder="email"
            error={enquiryDataError.email}
            name="email"
            className={styles.enquiry_input}
            onChange={onChange}
            value={enquiryData.email}
          />
        </span>
      </div>
      <div className={styles.input_container}>
        <TextAreaInput
          label="Enter Your Message"
          placeholder="Message"
          error={enquiryDataError.message}
          name="message"
          className={styles.enquiry_input}
          onChange={onChange}
          value={enquiryData.message}
        />
      </div>
      {/* <div className={`${styles.checkbox} w-100`}>
        <input type="checkbox" name="terms" value="Bike" />
        <label htmlFor="vehicle1" className="css-f16">
          Accept <span className="text-green">Terms & Conditions</span> And
          <span className="text-green"> Privacy Policy</span>.
        </label>
      </div> */}
      <button type="submit" className={`${styles.enquiry_btn} Dark_button mt-3 `}>
        Submit Now
      </button>
    </form>
  );
};
