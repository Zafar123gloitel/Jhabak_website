import React from 'react';
import styles from './card.module.scss';
// import Link from 'next/link';
import Image from 'next/image';
interface IPriceData {
  id?: number;
  callType: string;
  hrs: number;
  price: number;
  heading: string;
  featureHeading: string;
  featureList: string[];
  href: string;
}
interface IProps {
  priceData: IPriceData;
}
const PackageCard = ({ priceData }: IProps) => {
  return (
    <div className={styles.pricing_card}>
      <h1>{priceData.heading}</h1>
      <span className={styles.label_duration}>{priceData.callType}</span>
      <div className={styles.innr_card}>
        <span className={`${styles.card_heading}`}>
          <h5>{priceData.hrs}</h5>
          <span className="w-25 css-f15 ">
            Market <br /> <span> hrs.</span>
          </span>
        </span>

        <span className="d-block border mb-1"></span>
        <span className={styles.feature}>
          <h6 className="css-f15">{priceData.featureHeading}</h6>
          <ul>
            {priceData.featureList.map((item, index) => {
              return (
                <li key={index}>
                  <Image src="/assets/svg/landing/check.svg" alt="list" width={15} height={15} />
                  <span className="css-f13">{item}</span>
                </li>
              );
            })}
          </ul>
        </span>
        {/* <div className={`${styles.info_btns} element_center flex-column `}>
          <Link href={'/'} className={`${styles.more_details} element_center mt-2 float-right`}>
            More Details &#8594;
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default PackageCard;
