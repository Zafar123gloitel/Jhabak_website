import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
export const IntardayStrategy = () => {
  return (
    <div className={`${styles.intraday_strategy} element_center w-100 section_padding`}>
      <div className={`${styles.intraday_strategy} css_max_screen`}>
        <div className={`${styles.strategy_left} _css_left`}>
          <Image src={'/assets/svg/Intraday_strategy/target.svg'} alt="intraday_strategy" width={150} height={150} />
        </div>
        <div className={`${styles.strategy_left} _css_right`}></div>
      </div>
    </div>
  );
};
