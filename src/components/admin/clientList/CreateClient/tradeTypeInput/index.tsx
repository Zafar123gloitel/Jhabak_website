import React from 'react';
import styles from '../styles.module.scss';
import SelectField from '@/components/InputField/SelectField';
const tradeTypeDataOptions = [
  { label: 'Select Trade Type', value: 'equity' },
  { label: 'Equity', value: 'equity' },
  { label: 'Option', value: 'option' },
  { label: 'commodity', value: 'Commodity' },
];
const TradeTypeInput = () => {
  return (
    <>
      <fieldset className={`${styles.single_plan_field} d-flex justify-content-around `}>
        <div className={`${styles.single_plan}`}>
          <input type="checkbox" id="day_call" name="day_call" checked />
          <label htmlFor="day_call">Day Call</label>
        </div>

        <div className={`${styles.single_plan} d-flex justify-content-start`}>
          <input type="radio" id="1mth" name="select_duration" value="1mth" />
          <label htmlFor="1mth">1 Mth</label>
          <br />
          <input type="radio" id="2mth" name="select_duration" value="2mth" />
          <label htmlFor="2mth">2Mth</label>
          <br />
          <input type="radio" id="3mth" name="select_duration" value="3mth" />
          <label htmlFor="3mth">3mth</label>
        </div>
        <div className={`${styles.single_plan}`}>
          <SelectField
            name="day_call_tradeType"
            value={''}
            options={tradeTypeDataOptions}
            error=""
            require=""
            className={styles.tradeType}
          />
        </div>
      </fieldset>
    </>
  );
};

export default TradeTypeInput;
