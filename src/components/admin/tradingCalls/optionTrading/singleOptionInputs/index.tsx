import React from 'react';
import styles from '@/components/admin/tradingCalls/style.module.scss';
import optionStyles from '@/components/admin/tradingCalls/optionTrading/option.module.scss';
import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/InputField/SelectField';
import { DefaultOptionTrading, DefaultOptionError } from '../../options.constant';

interface IProps {
  formData: typeof DefaultOptionTrading;
  getError: typeof DefaultOptionError;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
const OptionData = ({ formData, getError, onChange }: IProps) => {
  return (
    <>
      <div className={`${styles.single_side_option} ${optionStyles.single_side_option}`}>
        <div className={`${styles.Client_input_container} input_container mt-2`}>
          <InputField
            label={''}
            type="text"
            name="share_name"
            value={formData.share_name}
            onChange={onChange}
            error={getError.share_name}
            placeholder="Share Name"
            className={`${styles.Client_input_section}`}
          />
        </div>
        <div className={`${styles.Client_input_container} input_container mt-4`}>
          <SelectField
            label={''}
            options={[
              { label: 'Select CE/PE', value: '' },
              { label: 'PE', value: 'PE_CALL' },
              { label: 'CE', value: 'CE_CALL' },
            ]}
            name="ce_pe_type"
            value={formData.ce_pe_type}
            onChange={onChange}
            error={getError.ce_pe_type}
            className={`${styles.Client_input_section}  ${optionStyles.Client_input_container}`}
          />
        </div>
        <div className={`${styles.Client_input_container} input_container mt-4`}>
          <SelectField
            label={''}
            options={[
              { label: 'Select buy/sell', value: '' },
              { label: 'Buy', value: 'buy' },
              { label: 'Sell', value: 'sell' },
            ]}
            name="buy_cell"
            value={formData.buy_cell}
            onChange={onChange}
            error={getError.buy_cell}
            className={`${styles.Client_input_section}  ${optionStyles.Client_input_container} input_margin`}
          />
        </div>
        <div className={`${styles.Client_input_container} input_container mt-4`}>
          <InputField
            label={''}
            type="text"
            name="strick_price"
            value={formData.strick_price}
            onChange={onChange}
            error={getError.strick_price}
            placeholder="Strike Price"
            className={`${styles.Client_input_section}`}
          />
        </div>
        <div className={`${styles.Client_input_container} ${styles.price_range} input_container mt-4`}>
          <InputField
            label={''}
            type="text"
            name="price_to"
            value={formData.price_to}
            onChange={onChange}
            error={getError.price_to}
            placeholder="Price Range To "
            className={`${styles.Client_input_section}`}
          />
          <InputField
            label={''}
            type="text"
            name="price_from"
            value={formData.price_from}
            onChange={onChange}
            error={getError.price_from}
            placeholder="Price Range From "
            className={`${styles.Client_input_section}`}
          />
        </div>

        <div className={`${styles.Client_input_container} ${styles.price_actions} input_container mt-2`}>
          <div className={`${styles.single_price_actions} `}>
            <InputField
              label={''}
              type="text"
              name="stoploss"
              value={formData.stoploss}
              onChange={onChange}
              error={getError.stoploss}
              placeholder="Stoploss"
              className={`${styles.Client_input_section}`}
            />
          </div>
          <div className={`${styles.single_price_actions}`}>
            <InputField
              label={''}
              type="text"
              name="target"
              value={formData.target}
              onChange={onChange}
              error={getError.target}
              placeholder="Target"
              className={`${styles.Client_input_section}`}
            />
          </div>

          <div className={`${styles.single_price_actions}`}>
            <InputField
              label={''}
              type="text"
              name="minimum_quantity"
              value={formData.minimum_quantity}
              onChange={onChange}
              error={getError.minimum_quantity}
              placeholder="Min Qty"
              className={`${styles.Client_input_section}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionData;
