import React from 'react';
import styles from './styles.module.scss';
interface InputFieldProps {
  name: string;
  label?: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  // onChange?: () => void;
  error?: string;
  className?: string;
  require?: boolean;
}

const TextAreaInput = ({ label, placeholder, value, onChange, error, name, className, require }: InputFieldProps) => {
  return (
    <div className={`${styles._input_field_} input-field ${className} `}>
      <label className={styles.label}>
        {label}
        <span>{require && ' *'}</span>
      </label>
      <textarea placeholder={placeholder} value={value} onChange={onChange} name={name} className={`custom_input_`} />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default TextAreaInput;
