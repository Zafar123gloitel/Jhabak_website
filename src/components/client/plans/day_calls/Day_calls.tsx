import React from 'react';
import style from './Day_calls.module.scss';
import Image from 'next/image';

export default function Day_calls() {
  return (
    <>
      <div className={`${style.maincontainer}`}>
        <div className={`${style.headercontainer}`}>
          <h2>Equity Trading</h2>
        </div>
        <div>
          <ul>
            <li>
              <Image src="/assets/svg/calls/blue.svg" width={12} height={13} alt="" />
              <span>Share Name</span>
            </li>
            <li>
              <Image src="/assets/svg/calls/green.svg" width={12} height={13} alt="" />
              <span> Buy/Sell</span>
            </li>
            <li>
              <Image src="/assets/svg/calls/red.svg" width={12} height={13} alt="" />
              <span> Price Range</span>
            </li>
            <li>
              <Image src="/assets/svg/calls/orange.svg" width={12} height={13} alt="" />
              <span> Target</span>
            </li>
            <li>
              <Image src="/assets/svg/calls/orange.svg" width={12} height={13} alt="" />
              <span>Stoploss</span>
            </li>
            <li>
              <Image src="/assets/svg/calls/orange.svg" width={12} height={13} alt="" />
              <span> Min Quantity</span>
            </li>
          </ul>

          <ul>
            <li>Tata Group</li>
            <li>Buy</li>
            <li>450-455</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>
    </>
  );
}
