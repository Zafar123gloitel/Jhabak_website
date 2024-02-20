import React from 'react';
import styles from './styles.module.scss';
import { masterTechnicalData } from '../configData';
import Image from 'next/image';
import { TextComponent } from '@/components';
// import Image from 'next/image';

const VideoSection = () => {
  return (
    <>
      <section className={`${styles.master_technical} element_center w-100 section_padding section_shadow `}>
        {masterTechnicalData &&
          masterTechnicalData.map(item => {
            return (
              <div className={`${styles.innr_technical} css_max_screen d-flex flex-wrap element_center `} key={item.id}>
                <div className={`${styles.technical_content} _css_left `}>
                  {/* <div className={styles.content}>
                    <h1 className="section_heading_css w-100 mt-1">{item.heading}</h1>
                    <p className={`${styles.technical_text}  _css_content_ `}>{item.content}</p>
                    <ul className="mt-2">
                      {item.contentList.map(data => {
                        return (
                          <li key={data} className="_css_content_ mt-1">
                            <Image src={'/assets/svg/landing/check_squere.svg'} alt={data} width={20} height={20} />
                            <span>{data}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <button className="Dark_button mt-5">Book An Appointment</button>
                  </div> */}
                  <TextComponent
                    heading={item.heading}
                    content={item.content}
                    contentList={item.contentList}
                    href="/"
                  />
                </div>

                <div className={`${styles.technical_image} _css_right`}>
                  <div className={`${styles.technical_img} `}>
                    <Image src={'/assets/images/landing_page/screenFrame.png'} fill={true} alt="technical" />

                    <video
                      src="https://res.cloudinary.com/ddaddjwgj/video/upload/v1707478996/jhabak_trading/ut2nsknsn9bxg41k1uqd.mp4"
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default VideoSection;
