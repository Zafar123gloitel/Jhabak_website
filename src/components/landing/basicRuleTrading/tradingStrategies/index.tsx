import React from 'react';
import styles from './tradingStretegy.module.scss';
import Image from 'next/image';
export const TradingStrategy = () => {
  // const tradingStretegy = [
  //   'Trend Following',
  //   'Range bound Trading',
  //   'News-based Trading',
  //   'Breakout Trading',
  //   'Scalping',
  //   'Manage your risk',
  // ];
  return (
    <div className={styles.trading_strategies}>
      {/* <span className={`${styles.single_object} element_center`}>
        <b className="text-white">Trend Following</b>
      </span> */}
      <div className={styles.innr_trading_strategies}>
        {/* {[...Array(3)].map((_, i) => (
          <div key={i} className={`${styles.small_single_object} element_center`}>
            <b className="text-white">{i}</b>
          </div>
        ))} */}
        <Image src={'/assets/svg/landing/stretegy_svg.svg'} alt="strategies" width={600} height={600} />
      </div>
    </div>
  );
};
