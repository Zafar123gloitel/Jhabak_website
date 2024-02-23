import React from 'react';
import styles from './pricing.module.scss';
import { PricingData } from '@/components/landing/configData';
import PackageCard from './packageCard';
export const Packages = () => {
  return (
    <section className={`${styles.pricing} section_padding element_center flex-column`}>
      <p className="section_heading_css text-center m-0">Service Packages</p>
      {/* Small Heading Class */}

      {/* <h1 className="section_heading_css text-center mt-2">Select Pricing Plan To Get More</h1> */}
      <div className={`${styles.card_container} css_max_screen element_center flex-wrap`}>
        {PricingData &&
          PricingData.map(item => {
            return <PackageCard priceData={item} key={item.id} />;
          })}
      </div>
    </section>
  );
};
export default Packages;
