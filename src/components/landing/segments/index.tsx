import React from 'react';
import styles from './segments.module.scss';
import { segmentData } from './segementData';
import Image from 'next/image';
const Segments = () => {
  return (
    <section className={`${styles.segments} element_center section_shadow flex-column section_padding mt-1`}>
      <h1 className="section_heading_css">We Cover the Following Segments</h1>
      <div className={`${styles.innr_segments} css_max_screen element_center flex-column`}>
        {segmentData.length &&
          segmentData.map(item => {
            return (
              <>
                <div className={`${styles.segment_conainer}  element_center flex-wrap`} key={item.id}>
                  <div className={`${styles.content} _css_left`}>
                    <b className={`${styles.small_heading} text-green w-100 css-f13`}>{item.smallHeading}</b>
                    <h1 className="section_heading_css w-100 mt-1">{item.Heading}</h1>
                    <p className={`${styles.advisory_text} _css_content_ mt-3`}>{item.content}</p>
                    <ul className="mt-3">
                      {item.list.map((item, index) => {
                        return (
                          <>
                            <li className={`${styles.content_list} _css_content_ `} key={index}>
                              {item}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                    <button className="Dark_button mt-1">{item.button}</button>
                  </div>
                  <div className={`${styles.image_part} _css_right`}>
                    <div className={`${styles.segments_img} mt-5`}>
                      <Image src={item.imgSrc} fill={true} alt="advisory" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </section>
  );
};

export default Segments;
