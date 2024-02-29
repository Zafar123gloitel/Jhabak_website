'use client';
import React from 'react';
import styles from './appointment.module.scss';
import InputField from '@/components/InputField/InputField';
import TextAreaInput from '@/components/InputField/TextAreaInput';

export const Appointmentform = () => {
  // const router = useRouter();

  // const handleRoute = (path: string) => {
  //   router.push(path);
  // };

  return (
    <div className={`${styles.main_form} element_center`}>
      <div className={`${styles.inner_form} element_center`}>
        <ul className={`${styles.form}  element_center`}>
          <li className={`${styles.li_content} element_center `}>
            <form className={`${styles.form_info} ${styles.no_margin_padding} bg-transparent text-white `}>
              <div className={styles.input_container}>
                <span>
                  <InputField
                    label="Fullname"
                    type="text"
                    placeholder="Enter Your Name"
                    // error="error"
                    name="enquiryName"
                    className={styles.appointment_input}
                    value=""
                  />
                </span>
              </div>

              <div className={styles.input_container}>
                <span>
                  <InputField
                    // key={value.id}
                    label="Email"
                    type="email"
                    placeholder="email"
                    className={styles.input}
                    // error="error"
                    name="enquiryEmail"
                    // className={styles.enquiry_input}
                    value=""
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
                    name="enquiryName"
                    className={styles.enquiry_input}
                    value=""
                  />
                </span>
              </div>

              <div className={styles.input_container}>
                <TextAreaInput
                  label="Message"
                  placeholder=""
                  // error="error"
                  name="message"
                  className={styles.enquiry_input}
                  value=""
                />
              </div>
              <div className={'${styles.input_container} element_center'}>
                <button className={`${styles.Button} Dark_button  element_center`} type="submit">
                  Book an appointment
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
