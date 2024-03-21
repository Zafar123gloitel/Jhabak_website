import React, { useState } from 'react';
import styles from './styles.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// interface InputFieldProps {
//   name: string;
//   label: string;
//   placeholder: string;
//   value: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   error?: string;
//   className?: string;
//   require?: string;
// }
interface CustomDatePickerProps {
  onChange?: () => void;
  label: string;
  placeholderText: string;
  required?: boolean;
  autoComplete: string;
  startDate: Date;
  name: string;
  className: string;
  error?: string;
}
const DateInput: React.FC<CustomDatePickerProps> = ({
  onChange,
  label,
  placeholderText,
  required,
  autoComplete,
  name,
  className,
  error,
  ...restProps
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  //   console.log(startDate, 'start Date');
  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    if (onChange) {
      // onChange(date ?? new Date()); // Pass a default value if date is null
    }
  };
  return (
    <div className={`${styles._input_field_} input-field ${className} ${styles.date_input}`}>
      <label className={styles.label}>{label && <span>{required && ' *'}</span>}</label>
      <DatePicker
        name={name}
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="dd-MM-yyyy"
        autoComplete={autoComplete} // Disable browser autocomplete
        endDate={null} // Allow dates starting from today
        placeholderText={placeholderText}
        className={`${styles.searchInput} ${styles.date_input_field}`}
        required={required ? true : false}
        {...restProps}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default DateInput;
