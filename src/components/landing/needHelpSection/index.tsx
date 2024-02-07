import React from 'react';
import styles from './help.module.scss';
import Image from 'next/image';
const NeedHelpSection = () => {
  return (
    <div className={`${styles.need_help} element_center section_padding mt-1 section_shadow`}>
      <div className={`${styles.innr_need_help} css_max_screen element_center flex-column`}>
        <h1 className="section_heading_css text-center text-white w-75">
          <Image
            className={styles.need_help_img}
            src="/assets/svg/landing/need_help_bg.svg"
            alt="need help"
            width={1000}
            height={700}
          />
          Need help finding the right <span>Advisory</span>
        </h1>
        <p className="text-white text-center w-50 mt-4">Request a callback to get your queries answered</p>
        <button className="css-f17 Dark_button ">Try Jhabak </button>
      </div>
    </div>
  );
};

export default NeedHelpSection;
