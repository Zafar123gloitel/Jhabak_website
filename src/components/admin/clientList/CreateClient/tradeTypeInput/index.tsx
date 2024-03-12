import React, { useEffect, useRef, useState } from 'react';
import { durations, tradeTypes } from './constant';
import styles from '../styles.module.scss';
import selectStyle from '@/components/admin/clientList/CreateClient/styles.module.scss';

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
      <SelectField />
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

function SelectField() {
  // {
  //   // name,
  //   // onChange,
  // }: {
  //   name: string;
  //   onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  // }
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleButtonClick = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(prevOptions => prevOptions.filter(option => option !== value));
    } else {
      setSelectedOptions(prevOptions => [...prevOptions, value]);
    }
  };
  const selectedOptionsText = selectedOptions
    .map(option => {
      const selectedOption = tradeTypes.find(type => type.value === option);
      return selectedOption ? selectedOption.label : '';
    })
    .join(', ');

  return (
    <div className={`${styles.select_tradeType} w-50`}>
      <div className={`${selectStyle.tradeType_select}`}>
        <button
          className={`${selectStyle.tradetype_btn} d-flex align-items-center`}
          type="button"
          onClick={() => setShowOptions(!showOptions)}
        >
          {selectedOptionsText || 'Select Trade Type'}
        </button>
        <div className={`${selectStyle.dropdown_content} ${showOptions && selectStyle.showOptions}`} ref={dropdownRef}>
          {tradeTypes.map(option => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleButtonClick(option.value)}
              className="d-flex align-items-center"
            >
              <input
                type="checkbox"
                value={option.value}
                name={option.value}
                checked={selectedOptions.includes(option.value)}
                className="d-flex align-items-center"
                // onChange={() => {}}
              />{' '}
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
