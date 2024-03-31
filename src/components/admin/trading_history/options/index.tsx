import React from 'react';
import styles from './options.module.scss';
import OptionsCard from '@/components/cards/option_card';
import { optionsData } from '@/components/cards/option_card/config';
import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/InputField/SelectField';
const OptionHistory = () => {
  return (
    <section className={`${styles.option_history} flex-column element_center`}>
      <div className={styles.search_data}>
        <span className={styles.type}>Option</span>
        <div className={styles.input_container}>
          <InputField
            type="text"
            placeholder="Search for Share name"
            name="search_data"
            value={''}
            // onChange={}
            className={styles.search_share}
          />
          <SelectField
            label=""
            name=""
            options={[
              { label: 'Buy/Sell', value: '' },
              { label: 'Buy', value: 'buy' },
              { label: 'Sell', value: 'sell' },
            ]}
            value={''}
          />
        </div>
      </div>
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
