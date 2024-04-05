import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className={`${styles.footer_outter} element_center section_padding section_shadow`}>
      <div className={`${styles.footer_inner} element_center css_max_screen d-flex flex-wrap`}>
        <div className={`${styles.footer_1} ${styles.footer_parts}  flex-wrap`}>
          <Image src="/assets/svg/Logo.svg" alt="logo" width={150} height={50} />
          <p className={`${styles.footer_content} _css_content_`}>
            We are the most reliable stock market advisory services; in essence, we are a research company for
            technology that supports trading.
          </p>
        </div>
        <div className={`${styles.footer_2} ${styles.footer_parts}  flex-wrap`}>
          <h2 className={`${styles.footer_heading} css-f21`}> Contact information</h2>
          <p className={`${styles.footer_content} _css_content_`}>
            Building, Azad Chowk, Handipara Road, Raipur (Chhattisgarh)
          </p>
          <p className={`${styles.footer_content} _css_content_`}>D: +91 96915 02157 L: 0771 4332831</p>
          <p className={`${styles.footer_content} _css_content_`}>jhabakshares@gmail.com rahul.jhabak@gmail.com</p>
        </div>
        <div className={`${styles.footer_3} ${styles.footer_parts} flex-wrap`}>
          <h2 className={`${styles.footer_heading} css-f21`}>Quick Links</h2>
          <Link href={'/about'} className={`${styles.footer_content} _css_content_`}>
            About Us
          </Link>
          <Link href={'/services'} className={`${styles.footer_content} _css_content_`}>
            Our Services
          </Link>
          <Link href={'#'} className={`${styles.footer_content} _css_content_`}>
            Packages
          </Link>
          <Link href={'#'} className={`${styles.footer_content} _css_content_`}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Footer;
