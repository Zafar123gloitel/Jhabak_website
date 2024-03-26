'use client';
import React from 'react';
import styles from './header.module.scss';
import { pageRoute } from './config';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth, useUser } from '@/hooks';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const { IsLoggedIn, ResetAuth } = useAuth();
  const { ResetUser, UserData } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const role = UserData()?.role;
  const handleRoute = (path: string) => {
    return router.push(path);
  };

  function handleLogout() {
    ResetAuth();
    ResetUser();
    return router.replace('/login');
  }

  return (
    <>
      <nav className={`${styles['main_navbar']} ${pathname.startsWith('/admin') && 'bg-green'}`}>
        {/* <button
          className={styles.menu_dropdown_button}
          type="button"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <Image className={styles.icon} src="/assets/svg/hamburger.svg" alt="Home" width={17} height={17} />
        </button> */}
        <div className={`${styles['inner_navbar']} element_center`}>
          <div className={`${styles['company_name']}`}>
            <Image src="/assets/svg/Logo.svg" alt="Jhabak" width={200} height={80} />
          </div>
          <div className={`${styles['Menu_List']} element_center `}>
            <ul className={`${styles['Menues']} element_center`}>
              {pageRoute.map(value => {
                return (
                  <li key={value.id} className={styles.menu_single_lists}>
                    <button
                      className={`${styles['single_menue']} ${styles['no_marging_padding']} element_center bg-transparent text-white css-f15`}
                      onClick={() => handleRoute(value?.href)}
                    >
                      <span>{value?.name}</span>
                    </button>
                  </li>
                );
              })}

              {/* login and logout  */}
              {!IsLoggedIn() ? (
                <button
                  className={`${styles['single_menue']} ${styles['no_marging_padding']} element_center bg-transparent text-white css-f15`}
                  onClick={() => handleRoute('/login')}
                >
                  <span>Login</span>
                </button>
              ) : (
                <button
                  className={`${styles['single_menue']} ${styles['no_marging_padding']} element_center bg-transparent text-white css-f15`}
                  onClick={handleLogout}
                >
                  <strong>Logout</strong>
                </button>
              )}
            </ul>
            {role === 'admin' ||
              ('user' && (
                <Link href="/appointment" className={`${styles.appointment_btn} outline_button`} type="button">
                  Book An Appointment
                </Link>
              ))}
          </div>

          {role === 'admin' && !pathname.startsWith('/admin') && (
            <Link href="/admin/clients" className={`outline_button`}>
              DashBoard
            </Link>
          )}
          {role === 'user' && !pathname.startsWith('/client') && (
            <Link href="/client/dashboard" className={`outline_button`}>
              DashBoard
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
