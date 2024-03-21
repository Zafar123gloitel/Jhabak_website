import React from 'react';
import styles from './advisory.module.scss';
import { TextComponent } from '@/components';
import Image from 'next/image';

const WeAreAdvisory = () => {
  return (
    <section className={`${styles.advisory} element_center flex-column `}>
      <h1 className="section_heading_css text-center w-100 mt-1 mb-4">We are experts in Stock and Share Advisory</h1>
      <div className={`${styles.inner_advisory} css_max_screen element_center`}>
        <div className={`${styles.advisory_left} _css_left  order-2`}>
          <TextComponent
            heading="We are experts in Stock and Share Advisory"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the"
          />
        </div>
        <div className={`${styles.advisory_right} _css_right order-1`}>
          <div className={`${styles.advisory_image} _css_left order-sm-1 order-2 updownanimation`}>
            <Image src={'/assets/svg/landing/advisory.svg'} alt="" fill={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreAdvisory;
