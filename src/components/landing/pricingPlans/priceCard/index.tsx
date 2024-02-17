import React from 'react';
import styles from './card.module.scss';
import Link from 'next/link';
import Image from 'next/image';
interface IPriceData {
  id?: number;
  callType: string;
  hrs: number;
  price: number;
  featureHeading: string;
  featureList: string[];
  href: string;
}
interface IProps {
  priceData: IPriceData;
  key: number;
}
const PriceCard = ({ priceData, key }: IProps) => {
  return (
    <div className={styles.pricing_card} key={key}>
      <div className={styles.innr_card}>
        <span className={`${styles.card_heading} text-blue`}>
          <h5>{priceData.hrs}</h5>
          <span className="w-25 css-f15">
            MKT ?<br /> <span>hrs.</span>
          </span>
        </span>
        <div className={`${styles.info_btns} element_center flex-column`}>
          <Link href={'/'} className="Dark_button w-100 element_center">
            Subscribe
          </Link>
          <Link href={'/'} className={`outline_button ${styles.more_details} element_center w-100 mt-2`}>
            More Details
          </Link>
        </div>
        <span className="d-block border mt-2"></span>
        <p className="css-f16 font-weight-bold text-blue ">&#8377; {priceData.price}/Month</p>
        <span className={styles.feature}>
          <h6 className="css-f15 text-blue">{priceData.featureHeading}</h6>
          <ul>
            {priceData.featureList.map((item, index) => {
              return (
                <li key={index}>
                  <Image src="/assets/svg/landing/check.svg" alt="list" width={15} height={15} />
                  <span className="css-f12">{item}</span>
                </li>
              );
            })}
          </ul>
        </span>
      </div>
    </div>
  );
};

export default PriceCard;
