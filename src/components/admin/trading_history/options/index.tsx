import React from 'react';
import styles from './options.module.scss';
import OptionsCard from '@/components/cards/option_card';
import { optionsData } from '@/components/cards/option_card/config';
const OptionHistory = () => {
  return (
    <section className={styles.option_history}>
      <div className={styles.innr_option_history}>
        <OptionsCard data={optionsData} />
        <OptionsCard data={optionsData} />
        <OptionsCard data={optionsData} />
        <OptionsCard data={optionsData} />
        <OptionsCard data={optionsData} />
        <OptionsCard data={optionsData} />
      </div>
    </section>
  );
};

export default OptionHistory;
