import React from 'react';
import style from './Option_trading.module.scss';
import Image from 'next/image';

export default function Option_trading() {
  return (
    <>
      <div className={`${style.maincontainer}`}>
        <div className={`${style.headercontainer}`}>
          <h2>Options Trading </h2>
        </div>
        <div>
          <ul>
            <li>
              <Image src="/assets/svg/calls/blue.svg" width={12} height={13} alt="" />
              <span>Options Type</span>
            </li>
            <li>
              <Image src="/assets/svg/calls/blue.svg" width={12} height={13} alt="" />
              <span> Share Name </span>
            </li>
            <li>
              <Image src="/assets/svg/calls/blue.svg" width={12} height={13} alt="" />
              <span>Strike Range </span>
            </li>
            <li>
              <Image src="/assets/svg/calls/blue.svg" width={12} height={13} alt="" />
              <span> PE/CE</span>
            </li>
            <li>
              <Image src="/assets/svg/calls/blue.svg" width={12} height={13} alt="" />
              <span>Buy/Sell</span>
            </li>
            <li>
              <Image src="/assets/svg/calls/blue.svg" width={12} height={13} alt="" />
              <span> Price Range </span>
            </li>
            <li>
              <Image src="/assets/svg/calls/blue.svg" width={12} height={13} alt="" />
              <span> Stoploss </span>
            </li>
            <li>
              <Image src="/assets/svg/calls/blue.svg" width={12} height={13} alt="" />
              <span> Min. Lot</span>
            </li>
          </ul>

          <ul>
            <li>Tata Group</li>
            <li>Buy</li>
            <li>450-455</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>
    </>
  );
}
