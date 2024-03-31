import React from 'react';
import styles from './option_card.module.scss';
import Image from 'next/image';
import { optionsData } from './config';
type OptionsData = typeof optionsData;
const OptionsCard: React.FC<{ data: OptionsData }> = data => {
  return (
    <div className={styles.option_card}>
      <div className={styles.top_bar}>
        <p className="css-f15">Option Trading</p>
        <p className="css-f12">Date:29.03.2024</p>
      </div>
      <div className={styles.details}>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Option Type</span>
          </p>
          <p>
            <b>{data.data.optionType}</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Share Name</span>
          </p>
          <p>
            <b>{data.data.shareName}</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Strike Range</span>
          </p>
          <p>
            <b>{data.data.strikeRange}</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>PE/CE</span>
          </p>
          <p>
            <b>{data.data.pe_ce}</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Buy/Sell</span>
          </p>
          <p>
            <b>{data.data.buy_sell}</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Target</span>
          </p>
          <p>
            <b>{data.data.target}</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Stoploss</span>
          </p>
          <p>
            <b>{data.data.stoploss}</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Min Quantity</span>
          </p>
          <p>
            <b>{data.data.minLot}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptionsCard;
