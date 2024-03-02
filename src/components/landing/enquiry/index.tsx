import React from 'react';
import styles from './enquiry.module.scss';
import { EnquiryForm } from './enquiryForm/EnquiryForm';
import Image from 'next/image';
const Enquiry = () => {
  return (
    <section className={`${styles.enquiry} element_center section_padding`}>
      <div className={`${styles.innr_enquiry} css_max_screen element_center flex-wrap`}>
        <div className={`${styles.enquiry_container} _css_left element_center flex-column`}>
          <p className="small_heading text-left w-75">Reach us</p>
          <h1 className="section_heading_css w-75">We Would Love to Hear from Our Clients</h1>
          <div
            className={`${styles.enquiry_form} mt-1
          `}
          >
            <EnquiryForm />
          </div>
        </div>
        <div className={`${styles.form_sct} _css_right`}>
          {/* <span className="small_heading">CONTACT US</span>
          <h3 className="section_heading_css mt-1">We Would Love to Hear from Our Clients</h3> */}
          <span className={styles.enquiry_image}>
            <Image src={'/assets/svg/landing/enquiry_svg.svg'} alt="loading" fill={true} />
          </span>
        </div>
      </div>
    </section>
  );
};
export default Enquiry;
