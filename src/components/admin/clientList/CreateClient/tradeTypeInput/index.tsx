import React, { useEffect, useRef, useState } from 'react';
import { dayCallDurations, tradeTypes, longCalldurations, weekCallDurations, monthCallDurations } from './constant';
import styles from '../styles.module.scss';
import selectStyle from '@/components/admin/clientList/CreateClient/styles.module.scss';

export interface IOption {
  id: string;
  label: string;
  value: string;
}
interface IData {
  setSelectedOptions: (value: string[]) => void;
  selectedOptions: string[];
  handleChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
  longTerm?: string;
}
interface ISelect {
  setSelectedOptions: (value: string[]) => void;
  selectedOptions: string[];
  longTerm: string;
}
export default function TradeTypeInput({ setSelectedOptions, selectedOptions, handleChanges, longTerm }: IData) {
  return (
    <div className={`${styles.radio_select_field} d-flex justify-content-between`}>
      {longTerm === 'day-call' && (
        <>
          <RadioDayOptions handleChanges={handleChanges} />
          <SelectField setSelectedOptions={setSelectedOptions} selectedOptions={selectedOptions} longTerm={longTerm} />
        </>
      )}
      {longTerm === 'week-call' && (
        <>
          <RadioWeekOptions handleChanges={handleChanges} />

          <SelectField setSelectedOptions={setSelectedOptions} selectedOptions={selectedOptions} longTerm={longTerm} />
        </>
      )}
      {longTerm === 'month-call' && (
        <>
          <RadioMonthOptions handleChanges={handleChanges} />

          <SelectField setSelectedOptions={setSelectedOptions} selectedOptions={selectedOptions} longTerm={longTerm} />
        </>
      )}
      {longTerm === 'year-call' && (
        <>
          <RadioLongOptions handleChanges={handleChanges} />

          <SelectField setSelectedOptions={setSelectedOptions} selectedOptions={selectedOptions} longTerm={longTerm} />
        </>
      )}
    </div>
  );
}

interface RadioDayOptionsProps {
  handleChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioDayOptions({ handleChanges }: RadioDayOptionsProps) {
  return (
    <div className={`${styles.single_plan} w-50 d-flex align-items-center`}>
      {dayCallDurations.map(duration => (
        <div key={duration.id} className={styles.duration}>
          <input
            type="radio"
            id={duration.id.toString()}
            name="dayCallDurations"
            value={duration.value}
            // checked={checked === duration.value}
            onChange={handleChanges}
          />
          <label htmlFor={duration.id.toString()}>{duration.label}</label>
          <br />
        </div>
      ))}
    </div>
  );
}
interface RadioWeekOptionsProps {
  handleChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioWeekOptions({ handleChanges }: RadioWeekOptionsProps) {
  return (
    <div className={`${styles.single_plan} w-50 d-flex align-items-center`}>
      {weekCallDurations.map(duration => (
        <div key={duration.id} className={styles.duration}>
          <input
            type="radio"
            id={duration.id.toString()}
            name="weekCallDurations"
            value={duration.value}
            // checked={checked === duration.value}
            onChange={handleChanges}
          />
          <label htmlFor={duration.id.toString()}>{duration.label}</label>
          <br />
        </div>
      ))}
    </div>
  );
}

interface RadioMonthOptionsProps {
  handleChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioMonthOptions({ handleChanges }: RadioMonthOptionsProps) {
  return (
    <div className={`${styles.single_plan} w-50 d-flex align-items-center`}>
      {monthCallDurations.map(duration => (
        <div key={duration.id} className={styles.duration}>
          <input
            type="radio"
            id={duration.id.toString()}
            name="monthCallDurations"
            value={duration.value}
            // checked={checked === duration.value}
            onChange={handleChanges}
          />
          <label htmlFor={duration.id.toString()}>{duration.label}</label>
          <br />
        </div>
      ))}
    </div>
  );
}

interface RadioLongOptionsProps {
  handleChanges?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function RadioLongOptions({ handleChanges }: RadioLongOptionsProps) {
  return (
    <div className={`${styles.single_plan} w-50 d-flex align-items-center`}>
      {longCalldurations.map(duration => (
        <div key={duration.id} className={styles.duration}>
          <input
            type="radio"
            id={duration.id.toString()}
            name="longCalldurations"
            value={duration.value}
            // checked={checked === duration.value}
            onChange={handleChanges}
          />
          <label htmlFor={duration.id.toString()}>{duration.label}</label>
          <br />
        </div>
      ))}
    </div>
  );
}

function SelectField({ setSelectedOptions, selectedOptions, longTerm }: ISelect) {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleButtonClick = (value: string, longTerm: string) => {
    const isSelected = selectedOptions.includes(value);

    if (isSelected && longTerm === 'day-call') {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    } else if (isSelected && longTerm === 'week-call') {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    } else if (isSelected && longTerm === 'month-call') {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    } else if (isSelected && longTerm === 'year-call') {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

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
          {tradeTypes.map((option: IOption) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleButtonClick(option.value, longTerm)}
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
