export interface IDefaultEquityTrading {
  share_name: string;
  buy_cell: string;
  price_from: number;
  price_to: number;
  target: number;
  stoploss: number;
  minimum_quantity: number;
}
export interface IDefaultOptionTrading {
  share_name: string;
  ce_pe: string;
  buy_cell: string;
  price_from: number;
  price_to: number;
  target: number;
  stoploss: number;
  minimum_quantity: number;
}

export interface IDefaultError {
  plan_name: string;
  buy_cell: string;
  share_name: string;
  price_from: string;
  price_to: string;
  stoploss: string;
  target: string;
  minimum_quantity: string;
}
export interface IDefaultOptionError {
  plan_name: string;
  options_type: string;
  ce_pe: string;
  buy_cell: string;
  share_name: string;
  price_from: string;
  price_to: string;
  stoploss: string;
  target: string;
  minimum_quantity: string;
}
export interface IDefaultCommodityTrading {
  trading_type?: string;
  plan_name: string;
  share_name: string;
  buy_cell: string;
  price_from: number;
  price_to: number;
  target: number;
  stoploss: number;
  minimum_quantity: number;
}
export interface IDefaultCommodityError {
  trading_type?: string;
  plan_name: string;
  share_name: string;
  buy_cell: string;
  price_from: string;
  price_to: string;
  target: string;
  stoploss: string;
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
export const DefaultOptionTrading = {
  share_name: '',
  buy_cell: '',
  ce_pe: '',
  price_from: 0,
  price_to: 0,
  target: 0,
  stoploss: 0,
  minimum_quantity: 0,
};

export const DefaultCommodityTrading = {
  trading_type: '',
  plan_name: '',
  share_name: '',
  buy_cell: '',
  price_from: 0,
  price_to: 0,
  target: 0,
  stoploss: 0,
  minimum_quantity: 0,
};
export const DefaultCommodityError = {
  trading_type: '',
  plan_name: '',
  share_name: '',
  buy_cell: '',
  price_from: '',
  price_to: '',
  target: '',
  stoploss: '',
  minimum_quantity: '',
};
export const DefaultError = {
  plan_name: '',
  buy_cell: '',
  share_name: '',
  price_from: '',
  price_to: '',
  stoploss: '',
  target: '',
  minimum_quantity: '',
};
export const DefaultOptionError = {
  plan_name: '',
  options_type: '',
  ce_pe: '',
  buy_cell: '',
  share_name: '',
  price_from: '',
  price_to: '',
  stoploss: '',
  target: '',
  minimum_quantity: '',
};
