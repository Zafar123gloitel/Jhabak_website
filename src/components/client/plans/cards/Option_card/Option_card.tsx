import React from 'react';
import styles from './Option_card.module.scss';
import Image from 'next/image';

export default function Option_card() {
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
            {/* <b>{option_type}</b> */}
            <b>Tata Group</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Share Name</span>
          </p>
          <p>
            {/* <b>{option_type === 'open' ? dataList.share_name : dataList.first_share_name}</b>
            {option_type === 'hedge' && <b>{dataList.second_share_name}</b>} */}
            <b>adsjghdg</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Strike Range</span>
          </p>
          <p>
            {/* <b>{option_type === 'open' ? dataList.strike_price : dataList.first_strike_price}</b>
            {option_type === 'hedge' && <b>{dataList.second_strike_price}</b>} */}
            <b>dajsga</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>PE/CE</span>
          </p>
          <p>
            {/* <b>{option_type === 'open' ? dataList.option_call : dataList.first_option_call}</b>
            {option_type === 'hedge' && <b>{dataList.second_option_call}</b>} */}
            <b>dsakhgdhkas</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Buy/Sell</span>
          </p>
          <p>
            {/* <b>{option_type === 'open' ? dataList.buy_sell_type : dataList.first_buy_sell_type}</b>
            {option_type === 'hedge' && <b>{dataList.second_buy_sell_type}</b>} */}
            <b>sadjkghagd</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Target</span>
          </p>
          <p>
            {/* <b>{option_type === 'open' ? dataList.target_set : dataList.first_target_set}</b>
            {option_type === 'hedge' && <b>{dataList.second_target_set}</b>} */}
            <b>dajhjkd</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Stoploss</span>
          </p>
          <p>
            {/* <b>{option_type === 'open' ? dataList.stop_loss : dataList.first_stop_loss}</b>
            {option_type === 'hedge' && <b>{dataList.second_stop_loss}</b>} */}
            <b>adsgdgiahbd</b>
          </p>
        </div>
        <div className={styles.single_data}>
          <p>
            <Image src="/assets/svg/admin/card_svg/blue_pallete.svg" alt="share name" width={12} height={13} />
            <span>Min Quantity</span>
          </p>
          <p>
            {/* <b>{option_type === 'open' ? dataList.min_quantity : dataList.first_min_quantity}</b>
            {option_type === 'hedge' && <b>{dataList.second_min_quantity}</b>} */}
            <b>asdghdg</b>
          </p>
        </div>
      </div>
    </div>
  );
}
