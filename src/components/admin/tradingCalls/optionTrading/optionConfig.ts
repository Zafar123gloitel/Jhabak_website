export interface IDefaultEquityTrading {
  share_name: string;
  buy_cell: string;
  price_from: number;
  price_to: number;
  target: number;
  stoploss: number;
  minimum_quantity: number;
}

export interface IDefaultError {
  plan_name: string;
  options_type: string;
  buy_cell: string;
  share_name: string;
  price_from: string;
  price_to: string;
  stoploss: string;
  target: string;
  minimum_quantity: string;
}

export const callTypeOption = [
  { label: 'Day Calls', value: 'day_calls' },
  { label: 'Weekly Calls', value: 'week_calls' },
  { label: 'Monthly Calls', value: 'month_calls' },
  { label: 'Long Term Calls', value: 'year_calls' },
];

export const DefaultBaseType = {
  plan_name: '',
  options_type: '',
};

export const DefaultEquityTrading = {
  share_name: '',
  buy_cell: '',
  price_from: 0,
  price_to: 0,
  target: 0,
  stoploss: 0,
  minimum_quantity: 0,
};

export const DefaultError = {
  plan_name: '',
  options_type: '',
  buy_cell: '',
  share_name: '',
  price_from: '',
  price_to: '',
  stoploss: '',
  target: '',
  minimum_quantity: '',
};
