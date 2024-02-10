import React from 'react';
import styles from './styles.module.scss';
// import Image from 'next/image';

export const WeAreAdvisory = () => {
  return (
    <>
      <section className={`${styles.we_are_advisory} element_center w-100 section_padding section_shadow `}>
        <div className={`${styles.innr_advisory} css_max_screen d-flex flex-wrap  `}>
          <div className={`${styles.advisory_content} _css_left `}>
            <div className={styles.content}>
              <b className={`${styles.small_heading} text-green w-100 css-f13`}>Get to Know</b>
              <h1 className="section_heading_css w-100 mt-1">We are experts in Trading Advisory</h1>
              <p className={`${styles.advisory_text} _css_content_ `}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <button className="Dark_button mt-5">Book An Appointment</button>
            </div>
            <div className={`${styles.advisory_cards} w-100 d-flex justify-content-between`}>
              <span className="element_center flex-column ">
                <h2>100,000</h2>
                <span className="w-100 text-center m-0 p-0 css-f12">Happy Customer</span>
              </span>
              <span className="element_center flex-column">
                <h2>60,000</h2>
                <span className="w-100 text-center m-0 p-0 css-f12">Day Online User</span>
              </span>
              <span className="element_center flex-column">
                <h2>4.6</h2>
                <span className="w-100 text-center m-0 p-0 css-f12">Rating</span>
              </span>
            </div>
          </div>

          <div className={`${styles.advisory_image} _css_right`}>
            <div className={`${styles.advisory_img} mt-5`}>
              {/* <Image src={'/assets/images/landing_page/advisory.jpg'} fill={true} alt="advisory" /> */}
              <video
                src="https://res.cloudinary.com/ddaddjwgj/video/upload/v1707478996/jhabak_trading/ut2nsknsn9bxg41k1uqd.mp4"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
