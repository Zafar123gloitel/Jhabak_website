import React from 'react';
import styles from './styles.module.scss';
interface SelectFieldProps {
  label?: string;
  name: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string | number }[];
  error?: string;
  className?: string;
  require?: string;
}
const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  className,
  error,
  require,
}) => {
  return (
    <>
      {label && (
        <label className={styles.label}>
          {label}
          <span>{require && ' *'}</span>
        </label>
      )}
      <div className={`${styles.input_field_select} ${className} `}>
        <select
          className={`${styles.input_field} ${styles.dropdown}`}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map(option => (
            <option key={option.value} className={`input_field_option`} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && <span className={` error-message w-100 text-left ${styles.select_field_err}`}>{error}</span>}
      </div>
    </>
  );
};

export default SelectField;
