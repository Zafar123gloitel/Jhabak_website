'use client';
import React from 'react';
import styles from './sidebar.module.scss';
// import Image from 'next/image';
import { pageRoute } from './config';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export const Sidebar = () => {
  const router = useRouter();

  const handleRoute = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.main_sidebar}>
      <div className={`${styles.inner_sidebar} element_center`}>
        <div className={`${styles.sidebar_top} `}>
          <h2 className={`${styles.company_name} css-f25`}>Jhabak</h2>
          <div className={styles.menu_dropdown}>
            <button className={styles.menu_dropdown_button} type="button">
              <Image className={styles.icon} src="/assets/svg/sidebar/Close.svg" alt="Home" width={17} height={17} />
            </button>
          </div>
        </div>

        <div className={`${styles.Menu_List} `}>
          <ul className={`${styles.Menues} `}>
            {pageRoute?.map(value => (
              <li key={value.id} className={`${styles.li_content} element_center `}>
                <Image className={styles.icon} alt="Home" width={20} height={17} src={value.imgSrc} />
                <button
                  className={`${styles.single_menu} ${styles.no_margin_padding} element_center bg-transparent text-white`}
                  onClick={() => handleRoute(value.href)}
                >
                  <strong>{value.name}</strong>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
