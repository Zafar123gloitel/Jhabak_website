'use client';
import React from 'react';
import styles from './appointment.module.scss';
import { pageRoute } from './config';
// import { useRouter } from 'next/navigation';

export const Appointmentform = () => {
  // const router = useRouter();

  // const handleRoute = (path: string) => {
  //   router.push(path);
  // };

  return (
    <div className={styles.main_form}>
      <div className={`${styles.inner_form} element_center`}>
        <div className={`${styles.form_list} `}>
          <ul className={`${styles.form} `}>
            {pageRoute?.map(value => (
              <li key={value.id} className={`${styles.li_content} element_center `}>
                <form
                  className={`${styles.form_info1} ${styles.no_margin_padding} element_center bg-transparent text-white`}
                >
                  <strong>{value.name}</strong>

                  <input className={`${styles.inputbox} element_center`}></input>
                </form>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
