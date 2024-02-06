'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
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
        <nav className={`${styles['navbar']} element_center all_navbar`}>
          <div className={`${styles['inner_navbar']} element_center`}>
            <div className={`${styles['brand_menues']} d-flex align-items-center`}>
              <div className={`${styles['Brand_logo']} order-2 order-lg-1 element_center`}>
                <Link className={`${styles['logo']} element_center `} href="/">
                  <Image src={'/assets/svg/logo_final.svg'} width={80} height={50} alt="logo" />
                </Link>
              </div>
            </div>
            <div className={`${styles['company_info']}`}>
              <div className={`${styles['company_name']}`}>
                <p>Glowel Steelium </p>
                <p className={`${styles['border_line']}`}></p>
                <p className={`${styles['slogan']}`}>Comfort with style</p>
              </div>
            </div>
          </div>
        </nav>
        <div className={`${styles['nav_border']} border`}></div>
        <div className={`${styles['bottom_navigation']} element_center`}>
          <div className={`${styles['Menu_List']} element_center order-lg-2`}>
            <ul className={`${styles['Menues']} element_center`}>
              {pageRoute.map(value => {
                return (
                  <>
                    <button
                      className={`${styles['single_menue']} ${styles['no_marging_padding']} element_center bg-transparent`}
                      key={value?.id}
                      onClick={() => hanleRoute(value?.href)}
                    >
                      <strong>{value?.name}</strong>
                    </button>
                  </>
                );
              })}
            </ul>
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
