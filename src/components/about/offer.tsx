import React from 'react';
import styles from './offer.module.scss';
import Image from 'next/image';

export function Offer() {
  return (
    <>
      <div className={`${styles.basic_rule} element_center section_padding section_shadow w-100`}>
        <div className={`${styles.innnr_basic_rule} css_max_screen d-flex flex-wrap`}>
          <div className={`${styles.our_values} element_center`}>
            <div className={`${styles.our_values_heading} _css_left element_center`}>
              <h2 className={`${styles.heading} element_center  css-f25`}>What We Offer</h2>
            </div>
            <div className={`${styles.outter_conatiner} element_center`}>
              <div className={`${styles.inner_conatiner} element_center`}>
                <Image
                  className={styles.icon}
                  src="/assets/images/offer/offer_pic1.jpg"
                  alt="offer pic"
                  width={300}
                  height={250}
                />

                <h3 className={`${styles.inner_heading} css-f21`}>Banknifty/nify option</h3>
                <p className={`${styles.inner_content} _css_content_`}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div className={`${styles.inner_conatiner} element_center`}>
                <Image
                  className={styles.icon}
                  src="/assets/images/offer/offer_pic1.jpg"
                  alt="offer pic"
                  width={300}
                  height={250}
                />

                <h3 className={`${styles.inner_heading} css-f21`}>Stock option</h3>
                <p className={`${styles.inner_content} _css_content_ `}>
                  We seek and value feedback to serve you better and get better everyday
                </p>
              </div>

              <div className={`${styles.inner_conatiner} element_center`}>
                <Image
                  className={styles.icon}
                  src="/assets/images/offer/offer_pic1.jpg"
                  alt="offer pic"
                  width={300}
                  height={250}
                />

                <h3 className={`${styles.inner_heading} css-f21`}>Stock option</h3>
                <p className={`${styles.inner_content} _css_content_ `}>
                  Keeping our clients first – because they are at the heart of everything we do
                </p>
              </div>

              <div className={`${styles.inner_conatiner} element_center`}>
                <Image
                  className={styles.icon}
                  src="/assets/images/offer/offer_pic1.jpg"
                  alt="offer pic"
                  width={300}
                  height={250}
                />

                <h3 className={`${styles.inner_heading} css-f21`}>Stock cash</h3>
                <p className={`${styles.inner_content} _css_content_ `}>
                  We constantly work towards creating value for our clients through objective advice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
