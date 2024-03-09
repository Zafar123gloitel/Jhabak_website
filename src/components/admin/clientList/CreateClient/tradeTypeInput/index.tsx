import React from 'react';
import { durations, tradeTypes } from './constant';

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
    <>
      <RadioOptions onChange={onChange} />

      <SelectField name="trade_type" onChange={onChange} />
    </>
  );
}

function RadioOptions({ onChange }: { onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="d-flex justify-content-around">
      {durations.map(option => (
        <React.Fragment key={option.id}>
          <input type="radio" id={option.id} name={option.value} value={option.value} onChange={onChange} />
          <label htmlFor={option.id}>{option.label}</label>
          <br />
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
    <select id={name} name={name} onChange={onChange}>
      {tradeTypes.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
