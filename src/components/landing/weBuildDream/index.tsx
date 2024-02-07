import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
export function WeBuildDream() {
  return (
    <section className={`${styles.we_are_dream} element_center w-100 section_padding section_shadow mt-1`}>
      <div className={`${styles.innr_dream} css_max_screen d-flex flex-wrap  `}>
        <div className={`${styles.dream_image} _css_right`}>
          <div className={`${styles.dream_img}`}>
            <Image src={'/assets/images/landing_page/dream_bg.jpg'} fill={true} alt="advisory" />
          </div>
        </div>
        <div className={`${styles.dream_content} _css_left `}>
          <div className={`${styles.content}`}>
            <p className={`${styles.small_heading} text-green css-f13 m-0`}>
              <strong>Get to Know</strong>
            </p>
            <h1 className="section_heading_css mt-1">We build Dreams</h1>
            <p className={`${styles.dream_text} _css_content_ mt-3`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button className="Dark_button mt-5">Book An Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
}
