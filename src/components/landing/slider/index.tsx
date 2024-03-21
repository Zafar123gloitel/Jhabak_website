import React from 'react';
import styles from './styles.module.scss';

import Image from 'next/image';
// import MainLoader from '@/components/Loader/MainLoader';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { randomBanners } from '../configData';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Slider = () => {
  return (
    <>
      <div className={`${styles.banner_slider} element_center  banner_slider `}>
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
          className={`${styles['slider-section']}  slider-section`}
        >
          {// eslint-disable-next-line @typescript-eslint/no-explicit-any
          randomBanners?.map((item: any) => {
            return (
              <>
                <SplideSlide className={`${styles['overlap-group']}`} key={item?._id}>
                  <picture className={`${styles['image']}`}>
                    <source srcSet={item?.imgSrc} media="(min-width: 1192px)" />
                    <source srcSet={item?.imgSrc} media="(min-width: 768px) and (max-width: 1191px)" />
                    <Image
                      loading="lazy"
                      alt="Image"
                      src={item?.imgSrc}
                      fill={true}
                      style={{
                        width: '100%',
                        margin: 'auto',
                        display: 'block',
                        objectFit: 'cover',
                        opacity: 1,
                        aspectRatio: '16 / 9',
                      }}
                    />
                  </picture>
                  <Image
                    src={item?.imgSrc}
                    loading="lazy"
                    alt="Image"
                    fill={true}
                    style={{
                      width: '100%',
                      margin: 'auto',
                      display: 'block',
                      position: 'absolute',
                      inset: 0,
                      padding: 'inherit',
                      objectFit: 'cover',
                      opacity: 0,
                      aspectRatio: '16 / 9',
                    }}
                  />
                </SplideSlide>
              </>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default Slider;
