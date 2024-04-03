'use client';
import React, { useState } from 'react';
import styles from './header.module.scss';
import { pageRoute, clientPageRoute } from './config';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth, useUser } from '@/hooks';
import Link from 'next/link';
import Image from 'next/image';

import { toast } from 'react-toastify';
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const { IsLoggedIn, ResetAuth } = useAuth();
  const { ResetUser, UserData, getUsersPlans } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const role = UserData()?.role;
  const handleRoute = (path: string) => {
    return router.push(path);
  };

  const handleRouteClient = (path: string) => {
    const userPlans = getUsersPlans();

    if (userPlans?.[0]?.plan_type === path.split('/')[1]) {
      return router.push(`/client/${path}`);
    }
    if (userPlans?.[1]?.plan_type === path.split('/')[1]) {
      return router.push(`/client/${path}`);
    }
    if (userPlans?.[2]?.plan_type === path.split('/')[1]) {
      return router.push(`/client/${path}`);
    }
    if (userPlans?.[3]?.plan_type === path.split('/')[1]) {
      return router.push(`/client/${path}`);
    }

    toast.error('Please check your plans');
  };
  function handleLogout() {
    ResetAuth();
    ResetUser();
    return router.replace('/login');
  }

  return (
    <>
      {role === 'user' && pathname.startsWith('/client') ? (
        <>
          <nav className={`${styles['main_navbar']} `}>
            <div className={`${styles['inner_navbar']} element_center`}>
              <div className={`${styles['company_name']}`}>
                <Image src="/assets/svg/Logo.svg" alt="Jhabak" width={200} height={80} />
              </div>

              <div className={`${styles['Menu_List']} element_center `}>
                {/* login and logout  */}
                <ul className={`${styles['Menues']} element_center ${showNav && styles.show_mainnav}`}>
                  {clientPageRoute.map(value => {
                    return (
                      <li key={value.id} className={styles.menu_single_lists}>
                        <button
                          className={`${styles['single_menue']} ${styles['no_marging_padding']} element_center bg-transparent text-white css-f15`}
                          onClick={() => {
                            handleRouteClient(value?.href);
                            setShowNav(false);
                          }}
                        >
                          45
                          <span>{value?.name}</span>
                        </button>
                      </li>
                    );
                  })}

                  {/* login and logout  */}
                  {!IsLoggedIn() ? (
                    <button
                      className={`${styles['single_menue']} ${styles['no_marging_padding']} element_center bg-transparent text-white css-f15`}
                      onClick={() => {
                        handleRoute('/login');
                        setShowNav(false);
                      }}
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
                <div className={`${styles.showmenu_btn} `}>
                  {' '}
                  <button className={`${styles.show_navbtn} bg-transparent`} onClick={() => setShowNav(!showNav)}>
                    {showNav ? (
                      <Image src="/assets/svg/landing_close.svg" alt="menu" width={35} height={35} />
                    ) : (
                      <Image src="/assets/svg/landing_hamburger.svg" alt="menu" width={45} height={45} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <nav className={`${styles['main_navbar']} ${pathname.startsWith('/admin') && styles.admin_navbar}`}>
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
              <ul className={`${styles['Menues']} element_center ${showNav && styles.show_mainnav}`}>
                {pageRoute.map(value => {
                  return (
                    <li key={value.id} className={styles.menu_single_lists}>
                      <button
                        className={`${styles['single_menue']} ${styles['no_marging_padding']} element_center bg-transparent text-white css-f15`}
                        onClick={() => {
                          handleRoute(value?.href);
                          setShowNav(false);
                        }}
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
                    onClick={() => {
                      handleRoute('/login');
                      setShowNav(false);
                    }}
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
              <div className={`${styles.showmenu_btn} `}>
                {role === 'admin' ||
                  ('user' && (
                    <Link href="/appointment" className={`${styles.appointment_btn} outline_button`} type="button">
                      Book An Appointment
                    </Link>
                  ))}
                {role === 'admin' && !pathname.startsWith('/admin') && (
                  <Link href="/admin/clients" className={`outline_button`}>
                    Dashboard
                  </Link>
                )}
                {role === 'user' && !pathname.startsWith('/client') && (
                  <Link href="/client/dashboard" className={`outline_button`}>
                    Dashboard
                  </Link>
                )}

                <button className={`${styles.show_navbtn} bg-transparent`} onClick={() => setShowNav(!showNav)}>
                  {showNav ? (
                    <Image src="/assets/svg/landing_close.svg" alt="menu" width={35} height={35} />
                  ) : (
                    <Image src="/assets/svg/landing_hamburger.svg" alt="menu" width={45} height={45} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
