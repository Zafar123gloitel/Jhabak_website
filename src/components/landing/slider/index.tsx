'use client';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { toast } from 'react-toastify';
import { apiService } from '@/utils';
import useLoading from '@/components/Loader/Loader';

const Slider = () => {
  const [imagesDetails, setImagesDetails] = useState([]);
  const { isLoading, startLoading, stopLoading } = useLoading();
  const getBanner = async () => {
    try {
      startLoading();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.get(`/get-banners`);

      if (response?.status === 200 && response?.success) {
        setImagesDetails(response.payload);
        // setImagesDetailsCount(response?.count);
      } else {
        toast.error('something went wrong');
      }
    } catch (e) {
      toast.error('something went wrong');
      // stopLoading();
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className={`${styles.banner_slider} element_center  banner_slider`}>
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
            imagesDetails?.map((item: any) => {
              return (
                <>
                  <SplideSlide className={`${styles['overlap-group']}`} key={item?._id}>
                    <picture className={`${styles['image']}`}>
                      <source srcSet={item?.imgSrc} media="(min-width: 1192px)" />
                      <source srcSet={item?.imgSrc} media="(min-width: 768px) and (max-width: 1191px)" />
                      <Image
                        loading="lazy"
                        alt={item?.originalname}
                        src={item?.url + '?tr=w-447tr=h-300'}
                        fill={true}
                        style={{
                          width: '100%',
                          margin: 'auto',
                          display: 'block',
                          objectFit: 'cover',
                          opacity: 1,
                        }}
                      />
                    </picture>
                    <Image
                      src={item?.url + '?tr=w-1920tr=h-300'}
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
      ) : (
        'pending'
      )}
    </>
  );
};

export default Slider;
