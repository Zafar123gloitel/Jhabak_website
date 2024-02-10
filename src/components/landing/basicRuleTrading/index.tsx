import React from 'react';
import styles from './basicRule.module.scss';
import { basicRules } from './basicRule';
import TradinRules from './tradingRules';
import { TradingStrategy } from './tradingStrategies';
export const BasicRuleTrading = () => {
  return (
    <section className={`${styles.basic_rule} element_center section_padding section_shadow`}>
      <div className={`${styles.innnr_basic_rule} css_max_screen d-flex flex-wrap`}>
        <div className={`${styles.strategy_rule} _css_left element_center`}>
          <TradingStrategy />
        </div>
        <div className={`${styles.rules} _css_right`}>
          <h1 className="section_heading_css">Basic Rules for Intraday Trading </h1>
          <div className={`${styles.rule_container} mt-5`}>
            {basicRules.map((item, index) => {
              return (
                <>
                  <TradinRules key={item} index={index} data={item} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
