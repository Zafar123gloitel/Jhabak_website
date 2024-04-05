import React from 'react';
import styles from './tradingStretegy.module.scss';

interface ITradingContent {
  heading: string;
  content: string;
}

export const TradingStrategy = ({ heading, content }: ITradingContent) => {
  return (
    <div className={`${styles.trading_strategies} element_center`}>
      <h4 className="section_heading_css text-left css-f19 ">
        <span>{heading}</span>
      </h4>
      <div className={`${styles.trading_strategies_text} _css_content_ css-f14 mt-2 element_ceneter`}>
        <p className="text-white">{content}</p>
      </div>
    </div>
  );
};
