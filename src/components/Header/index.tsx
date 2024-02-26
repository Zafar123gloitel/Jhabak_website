'use client';
import React from 'react';
import { pageRoute } from './config';
import styles from './header.module.scss';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const handleRoute = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className={`${styles['main_navbar']}`}>
        <div className={`${styles['inner_navbar']} element_center`}>
          <div className={`${styles['company_name']}`}>Jhabak</div>
          <div className={`${styles['Menu_List']} element_center `}>
            <ul className={`${styles['Menues']} element_center`}>
              {pageRoute.map(value => {
                return (
                  <>
                    <button
                      className={`${styles['single_menue']} ${styles['no_marging_padding']} element_center bg-transparent text-white css-f15`}
                      key={value.id}
                      onClick={() => handleRoute(value?.href)}
                    >
                      <strong>{value?.name}</strong>
                    </button>
                  </>
                );
              })}
            </ul>
          </div>
          <button className={`outline_button`} type="button">
            Book An Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
