import React from 'react';
import styles from './enquiryForm.module.scss';
import InputField from '@/components/InputField/InputField';
import TextAreaInput from '@/components/InputField/TextAreaInput';
export const EnquiryForm = () => {
  return (
    <div className={styles.form_enquiry}>
      <div className={styles.input_container}>
        <span>
          <InputField
            type="text"
            placeholder="Enter Your Name"
            error="error"
            name="enquiryName"
            className={styles.enquiry_input}
            value="value"
          />
        </span>
        <span>
          <InputField
            type="email"
            placeholder="email"
            error="error"
            name="enquiryEmail"
            className={styles.enquiry_input}
            value=""
          />
        </span>
      </div>
      <div className={styles.input_container}>
        <span>
          <InputField
            type="number"
            placeholder="Number"
            error="error"
            name="enquiryName"
            className={styles.enquiry_input}
            value=""
          />
        </span>
        <span>
          <InputField
            type="email"
            placeholder="email"
            error="error"
            name="enquiryEmail"
            className={styles.enquiry_input}
            value="value"
          />
        </span>
      </div>
      <div className={styles.input_container}>
        <TextAreaInput placeholder="Message" error="error" name="message" className={styles.enquiry_input} value="" />
      </div>
      {/* <div className={`${styles.checkbox} w-100`}>
        <input type="checkbox" name="terms" value="Bike" />
        <label htmlFor="vehicle1" className="css-f16">
          Accept <span className="text-green">Terms & Conditions</span> And
          <span className="text-green"> Privacy Policy</span>.
        </label>
      </div> */}
      <button type="submit" className={`${styles.enquiry_btn} Dark_button mt-3`}>
        Submit Now
      </button>
    </div>
  );
};
