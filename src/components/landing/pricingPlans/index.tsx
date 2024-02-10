import React from 'react';
import styles from './pricing.module.scss';
import { PricingData } from './card';
import PriceCard from './priceCard';
export const Pricing = () => {
  return (
    <section className={`${styles.pricing} section_padding section_shadow element_center flex-column`}>
      <p className="small_heading text-center m-0">Our Service Packages</p>
      <h1 className="section_heading_css text-center mt-2">Select Pricing Plan To Get More</h1>
      <div className={`${styles.card_container} css_max_screen element_center flex-wrap`}>
        {PricingData &&
          PricingData.map(item => {
            return <PriceCard priceData={item} key={item.id} />;
          })}
      </div>
    </section>
  );
};
