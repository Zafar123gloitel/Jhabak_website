import React from 'react';
import styles from './about.module.scss';
import Image from 'next/image';

export const About = () => {
  return (
    <div className={`${styles.basic_rule} element_center section_padding section_shadow`}>
      <div className={`${styles.innr_basic_rule} css_max_screen pt-5`}>
        <div className={`${styles.about_container} element_center`}>
          <div className={`${styles.about_content} _css_left element_center`}>
            <h2 className={`${styles.heading} section_heading_css _css_left element_center `}>
              Generating wealth for you is at the heart of everything we do
            </h2>
            <p className={`${styles.about_description} _css_content_ css-f14 mt-4`}>
              We want to help our clients meet their financial goals with passion and integrity. Since day one, we are
              committed to giving our customers the best services while holding to our core values which always place
              our clients interests first.
            </p>
          </div>
          <div className={`${styles.about_image} _css_right element_center`}>
            <Image src="/assets/images/about/about_image2.jpg" alt="image1" width={500} height={350} />
          </div>
        </div>

        <div className={`${styles.history} _css_right`}>
          <div className={`${styles.history_img} element_center `}>
            <Image src="/assets/images/about/about_image1.jpg" alt="image2" width={500} height={350} />
          </div>
          <div className={`${styles.history_content} _css_right`}>
            <h2 className={`${styles.heading} section_heading_css _css_right  `}>Our History </h2>
            <p className={`${styles.about_description} _css_content_ mt-2`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
