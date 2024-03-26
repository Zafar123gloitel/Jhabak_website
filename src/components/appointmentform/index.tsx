'use client';
import React, { useState } from 'react';
import styles from './appointment.module.scss';
import InputField from '@/components/InputField/InputField';
// import TextAreaInput from '@/components/InputField/TextAreaInput';
import useLoading from '../Loader/Loader';
import { toast } from 'react-toastify';
import { apiService } from '@/utils';
import validation from '@/services/validation';
const defaultContactData = {
  Name: '',
  email: '',
  mobile: '',
};

export const Appointmentform = () => {
  const [contactData, setContactData] = useState(defaultContactData);
  const [error, setError] = useState(defaultContactData);

  const { isLoading, startLoading, stopLoading } = useLoading();
  // const router = useRouter();

  // const handleRoute = (path: string) => {
  //   router.push(path);
  // };

  function onHandleValue(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setError(defaultContactData);
    setContactData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!validation.requied(contactData?.Name)) {
        setError(prev => ({ ...prev, fName: 'First Name Require' }));
        return false;
      }
      if (!validation.email(contactData?.email)) {
        setError(prev => ({ ...prev, email: 'Invalid Email Format' }));
        return false;
      }
      if (!validation.mobile('+91' + contactData?.mobile)) {
        setError(prev => ({ ...prev, mobile: 'Invalid Phone Number' }));
        return false;
      }

      const data = {
        name: contactData.Name,
        email: contactData.email,
        phone_number: '+91' + contactData.mobile,
      };
      startLoading();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.post('/book-appoitment', data);
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
  return (
    <div className={`${styles.main_form} element_center`}>
      <div className={`${styles.inner_form} element_center`}>
        <ul className={`${styles.form}  element_center`}>
          <li className={`${styles.li_content} element_center `}>
            <form
              className={`${styles.form_info} ${styles.no_margin_padding} bg-transparent text-white `}
              onSubmit={onSubmit}
            >
              <div className={styles.input_container}>
                <span>
                  <InputField
                    label="Fullname"
                    type="text"
                    placeholder="Enter Your Name"
                    name="Name"
                    className={styles.appointment_input}
                    value={contactData.Name}
                    onChange={onHandleValue}
                    error={error.Name}
                  />
                </span>
              </div>

              <div className={styles.input_container}>
                <span>
                  <InputField
                    label="Email"
                    type="email"
                    placeholder="email"
                    name="email"
                    className={styles.enquiry_input}
                    value={contactData.email}
                    onChange={onHandleValue}
                    error={error.email}
                  />
                </span>
              </div>

              <div className={styles.input_container}>
                <span>
                  <InputField
                    label="Phone number"
                    type="number"
                    placeholder="Number"
                    // error="error"
                    name="mobile"
                    className={styles.enquiry_input}
                    value={contactData.mobile}
                    onChange={onHandleValue}
                    error={error.mobile}
                  />
                </span>
              </div>

              {/* <div className={styles.input_container}>
                <TextAreaInput
                  label="Message"
                  placeholder=""
                  // error="error"
                  name="message"
                  className={styles.enquiry_input}
                  value=""
                />
              </div> */}
              <div className={'${styles.input_container} element_center'}>
                <button className={`${styles.Button} Dark_button  element_center`} type="submit">
                  {isLoading ? 'waiting...' : 'Book an appointment'}
                </button>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};
//  <div className={styles.input_container}>
//    <TextAreaInput placeholder="Message" error="error" name="message" className={styles.enquiry_input} value="" />
//  </div>;
