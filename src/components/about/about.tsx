import React from 'react';
import styles from './about.module.scss';
import Image from 'next/image';

export const About = () => {
  return (
    <div className={`${styles.basic_rule} element_center section_padding section_shadow`}>
      <div className={`${styles.innnr_basic_rule} css_max_screen d-flex flex-wrap`}>
        <div className={`${styles.about_left} _css_left element_center`}>
          <div className={`${styles.about_left_content} _css_left element_center`}>
            <h2 className={`${styles.heading} _css_left element_center `}>
              Generating wealth for you is at the heart of everything we do
            </h2>
            <p className={`${styles.about_description} _css_content_`}>
              We want to help our clients meet their financial goals with passion and integrity. Since day one, we are
              committed to giving our customers the best services while holding to our core values which always place
              our clients interests first.
            </p>
          </div>
          <div className={`${styles.about_image_left} _css_left element_center`}>
            <Image
              className={styles.about_image_back}
              src="/assets/svg/about/about_backimage_left.svg"
              alt="image back"
              width={500}
              height={400}
            />

            <Image
              className={styles.about_image}
              src="/assets/images/about/about_image1.jpg"
              alt="image1"
              width={500}
              height={300}
            />
          </div>
        </div>

        <div className={`${styles.about_right} _css_right`}>
          <div className={`${styles.about_image_right_outter}`}>
            <Image
              className={styles.about_image_right_back}
              src="/assets/svg/about/about_backimage_right.svg"
              alt="image back"
              width={500}
              height={400}
            />

            <Image
              className={styles.about_image_right}
              src="/assets/images/about/about_image2.jpg"
              alt="image2"
              width={500}
              height={300}
            />
          </div>
          <div className={`${styles.about_right_content} _css_right element_center`}>
            <h1 className={`${styles.heading} _css_right  element_center css-f25`}>Our Story </h1>
            <p className={`${styles.about_description} _css_content_`}>
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
