import React from 'react';
import styles from './OurValues.module.scss';
import Image from 'next/image';
export function OurValues() {
  return (
    <>
      <div className={`${styles.basic_rule} element_center section_padding section_shadow w-100`}>
        <div className={`${styles.innnr_basic_rule} css_max_screen d-flex flex-wrap`}>
          <div className={`${styles.our_values} element_center`}>
            <div className={`${styles.our_values_heading} _css_left element_center`}>
              <h2 className={`${styles.heading} element_center  css-f25`}>Our Values</h2>
              <p className={`${styles.content} _css_content_`}>
                Our values are not just plastered on the wall, but define the way we do our business and interact with
                all our stakeholders.
              </p>
            </div>
            <div className={`${styles.outter_conatiner} element_center`}>
              <div className={`${styles.inner_conatiner} element_center`}>
                {/* <img className={`${styles.icon}`} src="/assets/svg/about/icon1.svg" alt="" /> */}

                <Image className={styles.icon} src="/assets/svg/about/icon1.svg" alt="icon1" width={100} height={100} />

                <h3 className={`${styles.inner_heading} css-f21`}>Straightforward</h3>
                <p className={`${styles.inner_content} _css_content_`}>
                  We are open and transparent with our customers and with each other
                </p>
              </div>
              <div className={`${styles.inner_conatiner} element_center`}>
                {/* <img className={`${styles.icon}`} src="/assets/svg/about/icon2.svg" alt="" /> */}

                <Image className={styles.icon} src="/assets/svg/about/icon2.svg" alt="icon2" width={100} height={100} />

                <h3 className={`${styles.inner_heading} css-f21`}>Humble</h3>
                <p className={`${styles.inner_content} _css_content_ `}>
                  We seek and value feedback to serve you better and get better everyday
                </p>
              </div>

              <div className={`${styles.inner_conatiner} element_center`}>
                {/* <img className={`${styles.icon}`} src="/assets/svg/about/icon3.svg" alt="" /> */}

                <Image className={styles.icon} src="/assets/svg/about/icon3.svg" alt="icon3" width={100} height={100} />

                <h3 className={`${styles.inner_heading} css-f21`}>You first</h3>
                <p className={`${styles.inner_content} _css_content_ `}>
                  Keeping our clients first – because they are at the heart of everything we do
                </p>
              </div>

              <div className={`${styles.inner_conatiner} element_center`}>
                {/* <img className={`${styles.icon} `} src="/assets/svg/about/icon4.svg" alt="" /> */}

                <Image className={styles.icon} src="/assets/svg/about/icon4.svg" alt="icon4" width={100} height={100} />

                <h3 className={`${styles.inner_heading} css-f21`}>Gritty</h3>
                <p className={`${styles.inner_content} _css_content_ `}>
                  We constantly work towards creating value for our clients through objective advice
                </p>
              </div>

              <div className={`${styles.inner_conatiner} element_center`}>
                {/* <img className={`${styles.icon}`} src="/assets/svg/about/icon5.svg" alt="" /> */}

                <Image className={styles.icon} src="/assets/svg/about/icon5.svg" alt="icon5" width={100} height={100} />

                <h3 className={`${styles.inner_heading} css-f21`}>Curious</h3>
                <p className={`${styles.inner_content} _css_content_ `}>
                  We are constantly learning and improving to enhance client experience through innovation
                </p>
              </div>

              <div className={`${styles.inner_conatiner} element_center`}>
                {/* <img className={`${styles.icon}`} src="/assets/svg/about/icon6.svg" alt="" /> */}

                <Image className={styles.icon} src="/assets/svg/about/icon6.svg" alt="icon5" width={100} height={100} />

                <h3 className={`${styles.inner_heading} css-f21`}>Simplicity</h3>
                <p className={`${styles.inner_content} _css_content_ `}>
                  Making investments simple, understandable and accessible to everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
