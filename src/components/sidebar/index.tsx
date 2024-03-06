'use client';
import React, { useState } from 'react';
import styles from './sidebar.module.scss';
// import Image from 'next/image';
import { pageRoute } from './config';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleRoute = (path: string) => {
    router.push(path);
  };
  const isActiveLink = (location: string, path: string) => {
    if (path === location) {
      return true;
    }
  };

  return (
    <nav className={`${styles.main_sidebar} ${openSidebar && styles.show_sidebar}`}>
      <div className={`${styles.inner_sidebar} `}>
        <div className={`${styles.sidebar_top} `}>
          <div className={styles.menu_dropdown}>
            <button className={styles.menu_dropdown_button} type="button" onClick={() => setOpenSidebar(!openSidebar)}>
              <Image
                className={styles.icon}
                src={openSidebar ? '/assets/svg/hamburger.svg' : '/assets/svg/sidebar/Close.svg'}
                alt="Home"
                width={17}
                height={17}
              />
            </button>
          </div>
        </div>
        <div className={`${styles.Menu_List} `}>
          <ul className={`${styles.Menues} `}>
            {pageRoute?.map(value => (
              <li key={value.id} className={`${styles.li_content}`}>
                <button
                  className={`${styles.single_menu} ${styles.no_margin_padding}  bg-transparent text-white ${openSidebar && styles.showSidebar} ${styles.main_content} ${
                    isActiveLink(pathname, value.href) ? `${styles['active']}` : `${styles['not-active']}`
                  } `}
                  title={value.name}
                  onClick={() => handleRoute(value.href)}
                >
                  <Image
                    className={styles.icon}
                    alt="Home"
                    width={25}
                    height={25}
                    src={isActiveLink(pathname, value.href) ? `${value.activeImgSrc}` : `${value.imgSrc}`}
                  />
                  <strong>{value.name}</strong>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
