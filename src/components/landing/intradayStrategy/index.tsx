import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { StartegyData } from './stragtegyData';
const IntradayStrategy = () => {
  return (
    <section className={`${styles.intraday_strategy} element_center w-100 flex-column mt-1`}>
      <h1 className="section_heading_css ">Intraday Trading Strategies</h1>
      <div className={`${styles.innr_intraday_strategy} css_max_screen`}>
        <div className={`${styles.strategy_container} element_center`}>
          {StartegyData &&
            StartegyData.map(item => {
              return (
                <div className={`${styles.strategy} d-flex`} key={item.id}>
                  <Image src={item.imgSrc} alt="intraday_strategy" width={150} height={150} />
                  <span>
                    <h5 className="text-blue">{item.title}</h5>
                    <p className="_css_content_ ">{item.content}</p>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default IntradayStrategy;
