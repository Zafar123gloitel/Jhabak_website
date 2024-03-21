import React from 'react';
import styles from './ruleTrading.module.scss';
import Image from 'next/image';
import { StartegyData } from '@/components/landing/configData';

const RuleTrading = () => {
  return (
    <section className={`${styles.main} flex-column`}>
      <h1 className="section_heading_css">Intraday Trading Strategies</h1>
      <p className="small_heading"> Basic Rules for Intraday Trading</p>
      <div className={`${styles.inner_main}`}>
        <div className={styles.men}>
          <Image src="/assets/svg/landing/rule_men.svg" alt="loading" width={500} height={500} />
        </div>
        <ul className={styles.menu_list}>
          {StartegyData.map(item => {
            return (
              <li className={styles.menu_item} key={item.id} title={item.title}>
                <div className={`${styles.menues} element_center`}>
                  <Image src={item.imgSrc} alt="loading" width={100} height={100} />
                </div>
                <span className={`${styles.heading_text} element_center`}>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default RuleTrading;
