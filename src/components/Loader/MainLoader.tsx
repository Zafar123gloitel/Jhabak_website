import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
const MainLoader = () => {
  return (
    <div className={`${styles['main_loader']} All_content_center`}>
      <div className={`${styles['loader']}`}>
        <div className={`${styles['ot_loading']}`}>
          <Image
            src={'/assets/svg/loader/p.svg'}
            width="15"
            height="15"
            alt="logo"
            loading="lazy"
            className={`${styles['logo_img']}`}
          />
          <Image
            src={'/assets/svg/loader/r.svg'}
            width="15"
            height="15"
            alt="logo"
            loading="lazy"
            className={`${styles['logo_img']}`}
          />
          <Image
            src={'/assets/svg/loader/o.svg'}
            width="15"
            height="15"
            alt="logo"
            loading="lazy"
            className={`${styles['logo_img']}`}
          />
          <Image
            src={'/assets/svg/loader/w.svg'}
            width="15"
            height="15"
            alt="logo"
            loading="lazy"
            className={`${styles['logo_img']}`}
          />
          <Image
            src={'/assets/svg/loader/f.svg'}
            width="15"
            height="15"
            alt="logo"
            loading="lazy"
            className={`${styles['logo_img']}`}
          />
          <Image
            src={'/assets/svg/loader/i.svg'}
            width="15"
            height="15"
            alt="logo"
            loading="lazy"
            className={`${styles['logo_img']}`}
          />
          <Image
            src={'/assets/svg/loader/t.svg'}
            width="15"
            height="15"
            alt="logo"
            loading="lazy"
            className={`${styles['logo_img']}`}
          />
        </div>
      </div>
    </div>
  );
};

export default MainLoader;
