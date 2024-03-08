import React from 'react';
import styles from '../styles.module.scss';
import SelectField from '@/components/InputField/SelectField';
import { IInputsDetails } from '../inputConfig';
const tradeTypeDataOptions = [
  { label: 'Select Trade Type', value: '' },
  { label: 'Equity', value: 'equity' },
  { label: 'Option', value: 'option' },
  { label: 'Commodity', value: 'Commodity' },
];

const TradeTypeInput = ({
  callTypeName,
  planDuration,
  tradeTypeName,
  callTypeLabel,
  planDurationName,
}: IInputsDetails) => {
  return (
    <>
      <fieldset className={`${styles.single_plan_field} d-flex justify-content-around `}>
        <div className={`${styles.single_plan} css-f14`}>
          <input type="checkbox" id={callTypeName} name={'day_call'} />
          <label htmlFor="day_call">{callTypeLabel}</label>
        </div>

        <div className={`${styles.single_plan} d-flex justify-content-start`}>
          {planDuration &&
            planDuration.map(item => {
              return (
                <span className={styles.duration} key={item.name}>
                  <input type="radio" id={item.value} name={planDurationName} value={item.value} />
                  <label htmlFor={item.value}>{item.name}</label>
                </span>
              );
            })}
        </div>
        <div className={`${styles.single_plan}`}>
          <SelectField
            name={tradeTypeName}
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
