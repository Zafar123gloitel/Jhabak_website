import React from 'react';
import { DefaultOptionError, DefaultOptionTrading } from '../options.constant';
import OptionData from './singleOptionInputs';

interface IOpenProps {
  formData: typeof DefaultOptionTrading;
  getError: typeof DefaultOptionError;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

interface IHedgeProps extends IOpenProps {
  formData2: typeof DefaultOptionTrading;
  getError2: typeof DefaultOptionError;
  onChange2: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function Hedge({ formData, getError, onChange, formData2, getError2, onChange2 }: IHedgeProps) {
  return (
    <>
      <OptionData formData={formData} getError={getError} onChange={onChange} />
      <OptionData formData={formData2} getError={getError2} onChange={onChange2} />
    </>
  );
}
