import React from 'react';
import styles from './advantanges.module.scss';
import { advantagesData } from './advantages';
import Image from 'next/image';
export const IntradayAdvantage = () => {
  return (
    <section className={`${styles.advantages} element_center section_shadow flex-column section_padding mt-1`}>
      <h1 className="section_heading_css">We Cover the Following Segments</h1>
      <p className={`${styles.advantges_content} _css_content_ mt-3`}>
        Intraday trading provides numerous advantages, including the opportunity to make quick profits, lower risks,
        flexibility and control, quick feedback and learning opportunities, and low capital requirements. However,
        intraday trading also comes with its own set of challenges, such as high volatility and the need for discipline
        and focus. As with any type of trading, it is important to conduct proper research, develop a solid trading
        strategy, and manage risk carefully or trade with A SEBI Registered Investment Adviser.
      </p>
      <div className={`${styles.innr_advantages} css_max_screen element_center flex-wrap mt-4`}>
        {advantagesData.length &&
          advantagesData.map(item => {
            return (
              <div className={`${styles.advantages_conainer}`} key={item.id}>
                <div className={`${styles.image_part} `}>
                  <div className={`${styles.segments_img} `}>
                    <Image src={item.imgSrc} fill={true} alt="heading" />
                  </div>
                </div>
                <div className={`${styles.content} mt-2`}>
                  <h2 className={`${styles.small_heading}  w-100  section_heading_css text-white`}>
                    {item.smallHeading}
                  </h2>
                  {/* <b className="css-f13 w-100 mt-1">{item.smallHeading}</b> */}
                  <ul className={`${styles.advisory_text} _css_content_ mt-3 css-f13 `}>
                    {item.content.map(data => {
                      return (
                        <>
                          <li className={styles.text_list}>{data}</li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
