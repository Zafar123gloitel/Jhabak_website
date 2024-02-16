'use client';

import React from 'react';

import { pageRoute } from './config';
import styles from './header.module.scss';
import { useRouter } from 'next/navigation';
const Header = () => {
  const router = useRouter();
  const hanleRoute = (path: string) => {
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
                      onClick={() => hanleRoute(value?.href)}
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
          <div className={`${styles['menu_dropdown']}`}>
            <button className={`${styles['menu_dropdown_button']}`} type="button">
              ...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

// import React from 'react';
// import styles from './page.module.scss';

// const Header = () => {
//   return <div className={`${styles['main_header']} element_center `}>Hello team</div>;
// };

// export default Header;
