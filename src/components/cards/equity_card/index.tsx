import React from 'react';
import styles from './equity_card.module.scss';
import Image from 'next/image';
const EquityCard = () => {
  return (
    <div className={styles.equity_card}>
      <div className={styles.top_bar}>
        <p className="css-f15">Equity Trading</p>
        <p className="css-f12">Date:29.03.2024</p>
      </div>
      <div className={styles.details}>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Share Name</span>
          </p>
          <p>
            <b>Tata Group</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/green_pallate.svg" alt="share name" width={12} height={13} />
            <span>Buy/Sell</span>
          </p>
          <p>
            <b>Buy</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/red_pallate.svg" alt="share name" width={12} height={13} />
            <span>Price Range </span>
          </p>
          <p>
            <b>450-455</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/orange_pallate.svg" alt="share name" width={12} height={13} />
            <span>Target</span>
          </p>
          <p>
            <b>222222</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/orange_pallate.svg" alt="share name" width={12} height={13} />
            <span>Stoploss</span>
          </p>
          <p>
            <b>1</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/orange_pallate.svg" alt="share name" width={12} height={13} />
            <span>Min Quantity</span>
          </p>
          <p>
            <b>1</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EquityCard;
