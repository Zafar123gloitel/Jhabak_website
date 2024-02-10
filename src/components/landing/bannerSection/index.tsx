'use client'
import React from 'react';
import styles from './banner.module.scss';

import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { fitnessClientImage } from './sliderData';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BannerSection = () => {
  
  return (
    <>
      <div className={`${styles.fitness_slider} All_content_center fitness_slider `}>
        <Splide
          options={{
            rewind: true,
            type: 'loop',
            gap: '0',
            drag: 'free',            
            perPage: 1,
            autoplay: true,
            interval: 3000,
            perMove: 1,
            snap: true,
            arrows: false,
            autoScroll: {
              speed: 1,
            },
            breakpoints: {
              640: {
                perPage: 1,
              },
            },
          }}
          className={`${styles['slider-section']}  slider-section element_center`}
        >
          {fitnessClientImage?.length > 0
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              fitnessClientImage?.map((item: any) => {
                return (
                  <>
                    <SplideSlide className={`${styles['overlap-group']}`} key={item?._id}>
                      <picture className={`${styles['image']}`}>
                        <source
                          srcSet={item?.image ? item?.image : '/assets/Images/aboutus_2.jpg'}
                          media="(min-width: 1192px)"
                        />
                        <source
                          srcSet={item?.image ? item?.image : '/assets/Images/aboutus_2.jpg'}
                          media="(min-width: 768px) and (max-width: 1191px)"
                        />
                        <Image
                          alt="img"
                          width={200}
                          height={200}
                          src={item?.image ? item?.image : '/assets/Images/aboutus_2.jpg'}
                          // id={styles.banner_img}
                          className="common_banner_img"
                        />
                      </picture>
                      <Image
                        style={{
                          width: '100%',
                          margin: '0',
                          display: 'block',
                          position: 'absolute',
                          inset: 0,
                          padding: 'inherit',
                          objectFit: 'cover',
                          opacity: 0,
                          aspectRatio: '211 / 35',
                        }}
                        width={200}
                        height={200}
                        src={item?.url ? item?.url : '/assets/Images/aboutus_2.jpg'}
                        loading="lazy"
                        alt="Loading"
                      ></Image>
                    </SplideSlide>
                  </>
                );
              })
            : ''}
        </Splide>
      </div>
    </>
  );
};
