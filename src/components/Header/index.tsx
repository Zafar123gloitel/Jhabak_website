'use client';
import React from 'react';
import { pageRoute } from './config';
import styles from './header.module.scss';
import { useRouter, usePathname } from 'next/navigation';
import { selectUser } from '@/store/user/userSlice';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { accessToken } = useSelector(selectUser);

  const handleRoute = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <nav className={`${styles['main_navbar']} ${pathname.startsWith('/admin') && 'bg-green'}`}>
        <button
          className={styles.menu_dropdown_button}
          type="button"
          // onClick={() => setOpenSidebar(!openSidebar)}
        >
          <Image
            className={styles.icon}
            // src={openSidebar ? '/assets/svg/hamburger.svg' : '/assets/svg/sidebar/Close.svg'}
            src="/assets/svg/hamburger.svg"
            alt="Home"
            width={17}
            height={17}
          />
        </button>
        <div className={`${styles['inner_navbar']} element_center`}>
          <div className={`${styles['company_name']}`}>Jhabak</div>
          <div className={`${styles['Menu_List']} element_center `}>
            <ul className={`${styles['Menues']} element_center`}>
              {pageRoute.map(value => {
                return (
                  <div key={value.id}>
                    <button
                      className={`${styles['single_menue']} ${styles['no_marging_padding']} element_center bg-transparent text-white css-f15`}
                      onClick={() => handleRoute(value?.href)}
                    >
                      {value?.name === 'Login' && accessToken ? '' : <strong>{value?.name}</strong>}
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
          {pathname.startsWith('/admin') ? (
            ''
          ) : (
            <button className={`outline_button`} type="button">
              Book An Appointment
            </button>
          )}

          {/* <button className="bg-transparent" onClick={() => document.body.setAttribute('data-theme', 'red-theme')}>
            <Image src={'/assets/svg/light-theme.svg'} alt="light" width={35} height={35} />
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
