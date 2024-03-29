'use client';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { toast } from 'react-toastify';
import { apiService } from '@/utils';
import useLoading from '@/components/Loader/Loader';
import Image from 'next/image';

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
                    {/* <div className={styles['content-first-1']}>
                      <img
                        className={styles['content-first-1-bg']}
                        src={'https://xana-land.s3.eu-west-1.amazonaws.com/xana-land-banner7.png'}
                        alt="collection-banner-alt"
                      />
                    </div> */}
                    {/* <picture className={`${styles['image']}`}>
                      <source srcSet={item?.imgSrc} media="(min-width: 1192px)" />
                      <source srcSet={item?.imgSrc} media="(min-width: 768px) and (max-width: 1191px)" />

                      <img
                        loading="lazy"
                        alt={item?.originalname}
                        src={item?.url}
                        style={{
                          width: '100%',
                          margin: 'auto',
                          display: 'block',
                          objectFit: 'cover',
                          minHeight: '30vh',
                          opacity: 1,
                        }}
                        sizes="(max-width: 739px) 100vw, 740px"
                      />
                    </picture> */}
                    {/* <Image
                      src={item?.url}
                      loading="lazy"
                      alt="Image"
                      fill={true}
                      style={{
                        width: '100%',
                        display: 'inline-block',
                        position: 'absolute',
                        inset: 0,
                        padding: 'inherit',
                        objectFit: 'cover',
                        minHeight: '30vh',

                        opacity: 0,
                        aspectRatio: '211 / 35',
                      }}
                    /> */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {/* <img
                      src={item?.url}
                      srcSet={`${item?.url}, ${item?.url}`}
                      style={{ width: '100%' }}
                      sizes="((min-width: 50em) and (max-width: 60em)) 50em,
                      ((min-width: 30em) and (max-width: 50em)) 30em,
                      (max-width: 30em) 20em"
                      alt="radians"
                    /> */}
                    <Image
                      src={item?.url}
                      alt="radians"
                      // layout="responsive" // or use "fill", "fixed", or "intrinsic" depending on your needs
                      // width={100} // set the width of the image
                      fill={true}
                      // height={100} // set the height of the image
                      sizes="(min-width: 50em) 50em, (min-width: 30em) 30em, 20em" // adjust sizes according to your needs
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
