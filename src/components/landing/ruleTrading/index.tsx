import React from 'react';
import styles from './ruleTrading.module.scss';
import Image from 'next/image';
import { StartegyData } from '@/components/landing/configData';

export const RuleTrading = () => {
  return (
    <div className={styles.main}>
      <div className={`${styles.inner_main}`}>
        <div className={styles.plus_sign}>
          <Image src="/assets/svg/landing/rule_men.svg" alt="loading" width={500} height={500} />
        </div>
        <ul className={styles.menu_list}>
          {StartegyData.map(item => {
            return (
              <li className={styles.menu_item} title="Home" key={item.id}>
                <div className={`${styles.menues} element_center`}>
                  <Image src={item.imgSrc} alt="loading" width={100} height={100} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
