import React from 'react';
import { durations, tradeTypes } from './constant';
import styles from '../styles.module.scss';
import selectStyle from '@/components/InputField/styles.module.scss';

interface IData {
  duration: string;
  trade_type: string;
}

interface IProps {
  setSelectedOptions: React.Dispatch<
    React.SetStateAction<{
      duration: string;
      trade_type: string;
    }>
  >;
}

export default function TradeTypeInput({ setSelectedOptions }: IProps) {
  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setSelectedOptions((prev: IData) => ({ ...prev, [name]: value }));
  }
  return (
    <div className={`${styles.radio_select_field} d-flex justify-content-between`}>
      <RadioOptions onChange={onChange} />
      <SelectField name="trade_type" onChange={onChange} />
    </div>
  );
}

function RadioOptions({ onChange }: { onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className={`${styles.single_plan} w-50 d-flex align-items-center`}>
      {durations.map(option => (
        <React.Fragment key={option.id}>
          <div className={styles.duration}>
            <input type="radio" id={option.id} name={option.value} value={option.value} onChange={onChange} />
            <label htmlFor={option.id}>{option.label}</label>
            <br />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

function SelectField({
  name,
  onChange,
}: {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className={`${styles.select_tradeType} w-50`}>
      <select id={name} name={name} onChange={onChange} className={selectStyle.input_field_select}>
        {tradeTypes.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
