import React from 'react';
import styles from './tradingRule.module.scss';
interface IProps {
  data: string;
  index: number;
}
const TradinRules = ({ data, index }: IProps) => {
  return (
    <div className={styles.single_rule}>
      <span className={styles.text_part}>
        <span className={`${styles.index} element_center`}>{index + 1}</span>
        <span className={`${styles.text} css-f17 text-white`}>{data}</span>
      </span>
    </div>
  );
};

export default TradinRules;
