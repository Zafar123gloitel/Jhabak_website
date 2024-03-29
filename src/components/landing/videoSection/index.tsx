import React from 'react';
import styles from './styles.module.scss';
import { masterTechnicalData } from '../configData';
import Image from 'next/image';
import { TextComponent } from '@/components';
// import Image from 'next/image';

const VideoSection = () => {
  return (
    <>
      <main className={`${styles.master_technical} element_center w-100 section_padding`}>
        {masterTechnicalData &&
          masterTechnicalData.map(item => {
            return (
              <div className={`${styles.innr_technical} css_max_screen d-flex flex-wrap element_center `} key={item.id}>
                <div className={`${styles.technical_content} _css_left `}>
                  <TextComponent
                    heading={item.heading}
                    content={item.content}
                    contentList={item.contentList}
                    // href="/"
                  />
                </div>

                <div className={`${styles.technical_image} _css_right `}>
                  <div className={`${styles.technical_img} `}>
                    <Image src={'/assets/images/landing_page/screenFrame.png'} fill={true} alt="technical" />
                    <video preload="matadata" poster="Loading" autoPlay muted loop playsInline>
                      <source
                        src="https://res.cloudinary.com/ddaddjwgj/video/upload/v1707478996/jhabak_trading/ut2nsknsn9bxg41k1uqd.mp4"
                        type="video/mp4"
                      />
                      <track kind="captions" src={'loading'} />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            );
          })}
      </main>
    </>
  );
};

export default VideoSection;
