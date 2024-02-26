import React from 'react';
import styles from './basicRule.module.scss';

import TradinRules from './tradingRules';
import { TradingStrategy } from './tradingStrategies';
import { baseRuleData, basicRules } from '../configData';

const BasicRuleTrading = () => {
  return (
    <section className={`${styles.basic_rule} element_center `}>
      <div className={`${styles.innnr_basic_rule} css_max_screen d-flex flex-wrap`}>
        <div className={`${styles.strategy_rule} _css_left order-2`}>
          {baseRuleData &&
            baseRuleData.map(item => {
              return (
                <div className={`${styles.single_stretegy} element_center`} key={item.id}>
                  <TradingStrategy heading={item.heading} content={item.content} />
                </div>
              );
            })}
        </div>
        <div className={`${styles.rules} _css_right order-1`}>
          <div className={`${styles.rule_container} mt-5`}>
            {basicRules.map((item, index) => {
              return <TradinRules key={item} index={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicRuleTrading;
