'use client';
import React, { useState } from 'react';
import styles from './sidebar.module.scss';
// import Image from 'next/image';
import { pageRoute } from './config';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const router = useRouter();
  const handleRoute = (path: string) => {
    router.push(path);
  };

  return (
    <nav className={`${styles.main_sidebar} ${openSidebar && styles.show_sidebar}`}>
      <div className={`${styles.inner_sidebar} `}>
        <div className={`${styles.sidebar_top} `}>
          <h2 className={`${styles.company_name} css-f25 ${openSidebar && 'd-none'}`}>Jhabak</h2>
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
              <li key={value.id} className={`${styles.li_content}  `}>
                <button
                  className={`${styles.single_menu} ${styles.no_margin_padding}  bg-transparent text-white ${openSidebar && styles.showSidebar}`}
                  title={value.name}
                  onClick={() => handleRoute(value.href)}
                >
                  <Image className={styles.icon} alt="Home" width={25} height={25} src={value.imgSrc} />
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
