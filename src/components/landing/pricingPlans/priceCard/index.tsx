import React from 'react';
import styles from './card.module.scss';
import Link from 'next/link';
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
          <h5>{priceData.callType}</h5>
          <h5>{priceData.hrs} MKT hrs.</h5>
        </span>
        <p className="css-f16 font-weight-bold   text-blue ">&#8377; {priceData.price}/Month</p>
        <span className={styles.feature}>
          <h6 className="css-f15 text-blue">{priceData.featureHeading}</h6>
          <ul>
            {priceData.featureList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </span>

        <Link href={priceData.href} className={`${styles.link} Dark_button w-100 element_center`}>
          Subscribe
        </Link>
      </div>
    </div>
  );
};

export default PriceCard;
