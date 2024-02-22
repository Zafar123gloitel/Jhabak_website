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
    <div className={styles.main_navbar}>
      <div className={`${styles.inner_navbar} element_center`}>
        <div className={styles.company_name}>Jhabak</div>
        <div className={`${styles.Menu_List} element_center`}>
          <ul className={`${styles.Menues} element_center`}>
            {pageRoute?.map(value => (
              <li key={value.id}>
                <button
                  className={`${styles.single_menu} ${styles.no_margin_padding} element_center bg-transparent text-blue`}
                  onClick={() => handleRoute(value.href)}
                >
                  <strong>{value.name}</strong>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button className={styles.book} type="button">
          Book An Appointment
        </button>
        <div className={styles.menu_dropdown}>
          <button className={styles.menu_dropdown_button} type="button">
            ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
