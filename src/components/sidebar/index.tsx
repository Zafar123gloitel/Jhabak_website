'use client';
import React from 'react';
import styles from './sidebar.module.scss';
// import Image from 'next/image';
import { pageRoute } from './config';
import { useRouter } from 'next/navigation';

export const Sidebar = () => {
  const router = useRouter();

  const handleRoute = (path: string) => {
    router.push(path);
  };

  return (
    //   <div className={`${styles.outter_div} element_center section_padding section_shadow`}>
    //     <div className={`${styles.innner_div} css_max_screen d-flex flex-wrap`}>
    //       <h2 className={`${styles.heading_sidebar} css-f21 `}>Jhabak</h2>

    //       <div className={`${styles.sidebar_menu} `}>
    //         <Image className={styles.icon} src="/assets/svg/sidebar/Home.svg" alt="Home" width={20} height={17} />
    //         <p className={`${styles.menu} css-f16 text-white`}>DASHBOARD</p>
    //       </div>

    //       <div className={`${styles.sidebar_menu} `}>
    //         <Image className={styles.icon} src="/assets/svg/sidebar/Home.svg" alt="Home" width={20} height={17} />
    //         <p className={`${styles.menu} css-f16 text-white`}>CLIENT</p>
    //       </div>

    //       <div className={`${styles.sidebar_menu} `}>
    //         <Image className={styles.icon} src="/assets/svg/sidebar/Home.svg" alt="Home" width={20} height={17} />
    //         <p className={`${styles.menu} css-f16 text-white`}>INQUIRY HANDLE</p>
    //       </div>

    //       <div className={`${styles.sidebar_menu} `}>
    //         <Image className={styles.icon} src="/assets/svg/sidebar/Home.svg" alt="Home" width={20} height={17} />
    //         <p className={`${styles.menu} css-f16 text-white`}>PLANS</p>
    //       </div>

    //       <div className={`${styles.sidebar_menu} `}>
    //         <Image className={styles.icon} src="/assets/svg/sidebar/Home.svg" alt="Home" width={20} height={17} />
    //         <p className={`${styles.menu} css-f16 text-white`}>OFFER</p>
    //       </div>
    //     </div>
    //   </div>

    <div className={styles.main_sidebar}>
      <div className={`${styles.inner_sidebar} element_center`}>
        <div className={styles.company_name}>Jhabak</div>
        <div className={`${styles.Menu_List} element_center`}>
          <ul className={`${styles.Menues} element_center`}>
            {pageRoute?.map(value => (
              <li key={value.id}>
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

        {/* <div className={styles.menu_dropdown}>
          <button className={styles.menu_dropdown_button} type="button">
            ...
          </button>
        </div> */}
      </div>
    </div>
  );
};
