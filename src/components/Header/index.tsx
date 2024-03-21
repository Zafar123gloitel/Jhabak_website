'use client';
import React from 'react';
import styles from './header.module.scss';
import { pageRoute } from './config';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth, useUser } from '@/hooks';
import Link from 'next/link';

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
        <button
          className={styles.menu_dropdown_button}
          type="button"
          // onClick={() => setOpenSidebar(!openSidebar)}
        >
          {/* <Image className={styles.icon} src="/assets/svg/hamburger.svg" alt="Home" width={17} height={17} /> */}
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
                      <strong>{value?.name}</strong>
                    </button>
                  </div>
                );
              })}

              {/* login and logout  */}
              {!IsLoggedIn() ? (
                <button
                  className={`${styles['single_menue']} ${styles['no_marging_padding']} element_center bg-transparent text-white css-f15`}
                  onClick={() => handleRoute('/login')}
                >
                  <strong>Login</strong>
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
          </div>

          {role === 'admin' && !pathname.startsWith('/admin/clients') && (
            <Link href="/admin/clients" className={`outline_button`}>
              DashBoard
            </Link>
          )}
          {role === 'user' && !pathname.startsWith('/client/dashboard') && (
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
