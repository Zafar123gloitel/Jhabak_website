import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { TextComponent } from '@/components';
import { buildDreamData } from '../configData';
function MutualFund() {
  return (
    <section className={`${styles.we_are_dream} element_center w-100 section_padding mt-1`}>
      <div className={`${styles.innr_dream} css_max_screen d-flex flex-wrap  `}>
        {buildDreamData &&
          buildDreamData.map(item => {
            return (
              <>
                <div className={`${styles.dream_content} _css_left `}>
                  <div className={`${styles.content}`}>
                    <TextComponent smallHeading={item.smallHeading} heading={item.heading} content={item.content} />
                    <div className={`${styles.svgs} element_center mt-5`}>
                      {item.svgList.map(data => {
                        return (
                          <span key={data.id}>
                            <Image src={data.svgSrc} alt="" width={100} height={100} />
                            <h6 className="mt-2">{data.svgHeading}</h6>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className={`${styles.dream_image} _css_right`}>
                  <div className={`${styles.dream_img} updownanimation`}>
                    <Image src={'/assets/svg/landing/potli.svg'} fill={true} alt="advisory" />
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </section>
  );
}

export default MutualFund;
