import React from 'react';
import styles from '@/components/admin/tradingCalls/style.module.scss';

import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/InputField/SelectField';
import { DefaultEquityTrading, DefaultEquitError } from '../options.constant';

interface IProps {
  formData: typeof DefaultEquityTrading;
  getError: typeof DefaultEquitError;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Equity = ({ formData, getError, onChange }: IProps) => {
  return (
    <>
      <div className={`${styles.inr_create_Client_section}`}>
        <div className={`${styles.Client_input_container}`}>
          <InputField
            label={'Share Name *'}
            type="text"
            name="share_name"
            value={formData.share_name}
            onChange={onChange}
            error={getError.share_name}
            placeholder="Ex : TATA Motors"
            className={`${styles.Client_input_section}`}
          />
        </div>
        <div className={`${styles.Client_input_container}`}>
          <SelectField
            label={'Buy/Sell *'}
            options={[
              { label: 'Buy', value: 'buy' },
              { label: 'Sell', value: 'sell' },
            ]}
            name="buy_cell"
            value={formData.buy_cell}
            onChange={onChange}
            className={`${styles.Client_input_section}`}
            error={getError.buy_cell}
          />
        </div>
        <div className={`${styles.price_range} ${styles.Client_input_container}`}>
          <InputField
            label={'Price Range To *'}
            type="number"
            name="price_to"
            value={formData.price_to}
            onChange={onChange}
            error={getError.price_to}
            placeholder="Eg: 280"
            className={`${styles.Client_input_section}`}
          />
          <InputField
            label={'Price Range From *'}
            type="number"
            name="price_from"
            value={formData.price_from}
            onChange={onChange}
            error={getError.price_from}
            placeholder="Eg: 275"
            className={`${styles.Client_input_section}`}
          />
        </div>

        <div className={` ${styles.price_actions} ${styles.Client_input_container}`}>
          <div className={`${styles.single_price_actions}`}>
            <InputField
              label={'Stoploss *'}
              type="number"
              name="stoploss"
              value={formData.stoploss}
              onChange={onChange}
              error={getError.stoploss}
              placeholder="Eg: 245"
              className={`${styles.Client_input_section}`}
            />
          </div>
          <div className={`${styles.single_price_actions}`}>
            <InputField
              label={'Target *'}
              type="number"
              name="target"
              value={formData.target}
              onChange={onChange}
              error={getError.target}
              placeholder="Eg: 350"
              className={`${styles.Client_input_section}`}
            />
          </div>
          <div className={`${styles.single_price_actions}`}>
            <InputField
              label={'Min Qty *'}
              type="number"
              name="minimum_quantity"
              value={formData.minimum_quantity}
              onChange={onChange}
              error={getError.minimum_quantity}
              placeholder="Eg: 5"
              className={`${styles.Client_input_section}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Equity;
