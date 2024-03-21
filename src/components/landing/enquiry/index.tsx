import React from 'react';
import styles from './enquiry.module.scss';
import { EnquiryForm } from './enquiryForm/EnquiryForm';
import Image from 'next/image';
const Enquiry = () => {
  return (
    <section className={`${styles.enquiry} element_center section_padding  flex-column`}>
      <h1 className="section_heading_css mb-2">Contact us</h1>
      <div className={`${styles.innr_enquiry} css_max_screen element_center flex-wrap`}>
        <div className={`${styles.form_sct} _css_right element_center`}>
          <span className={styles.enquiry_image}>
            <Image src={'/assets/svg/landing/contact-us2.webp'} alt="loading" fill={true} />
          </span>
        </div>
        <div className={`${styles.enquiry_container} _css_left element_center flex-column`}>
          <div
            className={`${styles.enquiry_form}  mt-1
          `}
          >
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Enquiry;
