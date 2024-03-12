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

export const DefaultBaseError = {
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

export const DefaultHedgeTrading = {
  first_share_name: '',
  second_share_name: '',
  first_strike_price: '',
  second_strike_price: '',
  first_option_call: '',
  second_option_call: '',
  first_buy_sell_type: '',
  second_buy_sell_type: '',
  first_price_range_from: '',
  first_price_range_to: '',
  first_min_quantity: '',
  first_target_set: '',
  first_stop_loss: '',
  second_price_range_from: '',
  second_price_range_to: '',
  second_min_quantity: '',
  second_target_set: '',
  second_stop_loss: '',
};

export const DefaultHedgeError = {
  first_share_name: '',
  second_share_name: '',
  first_strike_price: '',
  second_strike_price: '',
  first_option_call: '',
  second_option_call: '',
  first_buy_sell_type: '',
  second_buy_sell_type: '',
  first_price_range_from: '',
  first_price_range_to: '',
  first_min_quantity: '',
  first_target_set: '',
  first_stop_loss: '',
  second_price_range_from: '',
  second_price_range_to: '',
  second_min_quantity: '',
  second_target_set: '',
  second_stop_loss: '',
};
