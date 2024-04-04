'use client';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { contactDetails } from './config';
import { ddItems } from '@/services/country';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import InputField from '../InputField/InputField';
import TextAreaInput from '../InputField/TextAreaInput';
import validation from '@/services/validation';
import { apiService } from '@/utils';
import useLoading from '../Loader/Loader';
import { toast } from 'react-toastify';

const defaultContactData = {
  fName: '',
  lName: '',
  email: '',
  mobile: '',
  message: '',
};

export const ContactForm = () => {
  const [data, setData] = useState(ddItems);
  const [searchValue, setSearchValue] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [contactData, setContactData] = useState(defaultContactData);
  const [error, setError] = useState(defaultContactData);
  const { isLoading, startLoading, stopLoading } = useLoading();
  function onHandleValue(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setError(defaultContactData);
    setContactData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!validation.requied(contactData?.fName)) {
        setError(prev => ({ ...prev, fName: 'First Name Require' }));
        return false;
      }
      if (!validation.requied(contactData?.lName)) {
        setError(prev => ({ ...prev, lName: 'Last Name Require' }));
        return false;
      }
      if (!validation.email(contactData?.email)) {
        setError(prev => ({ ...prev, email: 'Invalid Email Format' }));
        return false;
      }
      if (!validation.mobile(countryCode + contactData?.mobile)) {
        setError(prev => ({ ...prev, mobile: 'Invalid Phone Number' }));
        return false;
      }
      if (!validation.requied(contactData?.message)) {
        setError(prev => ({ ...prev, message: 'Message Required' }));
        return false;
      }

      const data = {
        first_name: contactData.fName,
        last_name: contactData.lName,
        email: contactData.email,
        phone_number: countryCode + contactData.mobile,
        message: contactData.message,
      };
      startLoading();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.post('/contact-us', data);
      if (response?.success && response?.status === 201) {
        toast.success('your details has been submited');
      }

      // console.log(contactData, 'contactData');
      // setError(defaultContactData);
    } catch (error: unknown) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (error?.response?.data?.message) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return toast.error(error?.response?.data?.message);
      }

      const typeError = error as Error;
      return toast.error(typeError.message);
    } finally {
      stopLoading();
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
    <section className={`${styles.contact} w-100 element_center flex-column section_padding`}>
      <span className={styles.heading}>
        <h2 className={`${styles.section_heading} section_heading_css`}>Get in Touch</h2>
        <p className={`${styles.section_para} _css_content_`}>
          Reach out to us today for expert guidance and personalized investment solutions in the ever-evolving world of
          the stock market.
        </p>
      </span>
      <div className={`${styles.contactForm} css_max_screen `}>
        <div className={`${styles.details} _css_left`}>
          <div className={`${styles.map} element_center`}>
            <iframe
              title="address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.137501008186!2d81.62634552828317!3d21.23921648938207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd2b52613ae5%3A0x8d2be6b0db8be9b4!2sShare%20Building!5e0!3m2!1sen!2sin!4v1707980382518!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={`${styles.contact} element_center `}>
            {contactDetails &&
              contactDetails.map(item => {
                return (
                  <>
                    <div className={styles.contact_inner}>
                      <div className={styles.contact_icon}>
                        <Image src={item.imgSrc} alt={item.heading} width={175} height={175} />
                      </div>
                      <div className={`${styles.contact_content} _css_content_`}>
                        <h2 className={`${styles.office_heading_css} text-white`}>{item.heading}</h2>
                        <p className={`${styles.office_para_css} text-white`}>{item.content}</p>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <div className={`${styles.contact_form} _css_right element_center`}>
          <form className={`${styles.inner_contact_form}`} onSubmit={onSubmit}>
            <div className={`${styles['name_css']}`}>
              <div className={`${styles['first_name_div']}`}>
                <InputField
                  type="text"
                  name="fName"
                  label="First Name"
                  value={contactData.fName}
                  onChange={onHandleValue}
                  placeholder="Eg. John"
                  error={error.fName}
                />
              </div>
              <div className={`${styles['last_name_div']}`}>
                <InputField
                  type="text"
                  name="lName"
                  label="Last Name"
                  value={contactData.lName}
                  onChange={onHandleValue}
                  placeholder="Eg. Doe"
                  error={error.lName}
                />
              </div>
            </div>
            <div className={`${styles['info_css']}`}>
              <div className={`${styles['detail_css']}`}>
                <InputField
                  type="email"
                  name="email"
                  label="Email"
                  value={contactData.email}
                  onChange={onHandleValue}
                  placeholder="Eg. you@example.com"
                  error={error.email}
                />
              </div>
              <div className={`${styles['detail_css']}`}>
                <label className={`${styles['phone_code_lable_css']} css-f14`} htmlFor="firstname">
                  Phone number
                </label>
                <div className={`${styles['phone_number']} ${styles['enquiry_phone_number']}`}>
                  <div className={`${styles['enquiry_phone_number_collection']} All_content_center country-collection`}>
                    <DropdownButton id="dropdown-basic-button" title={countryCode} className="dropdown-btn-phn">
                      <input
                        type="text"
                        className="search drop_search dark_input"
                        placeholder="Search"
                        name="countryCode"
                        value={searchValue}
                        onChange={filterHandler}
                      />
                      <div className="dd-item-wrp">
                        {data.map((d: Record<string, string>, index: number) => {
                          return (
                            <Dropdown.Item key={index} onClick={() => handleCountry(d.code)}>
                              <span className="left">{d.country}</span>
                              <span className="right">{d.code}</span>
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
                      value={contactData.mobile}
                      onChange={onHandleValue}
                      error={error.mobile}
                      className={`${styles.consultant_phone} phone_input ${styles.phone_input} dark_input`}
                    />
                  </div>
                </div>
              </div>

              <div className={`${styles['detail_css']}`}>
                <TextAreaInput
                  name="message"
                  label="Message"
                  placeholder="Your Message"
                  value={contactData.message}
                  onChange={onHandleValue}
                  error={error.message}
                  require={true}
                />
              </div>
              <button className={` Dark_button`} type="submit">
                {isLoading ? 'waiting...' : 'Book an appointment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
