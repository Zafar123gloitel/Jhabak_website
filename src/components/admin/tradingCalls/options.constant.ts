export const callTypeOption = [
  { label: 'Select Plan option', value: '' },
  { label: 'Day Calls', value: 'day_call' },
  { label: 'Weekly Calls', value: 'week_call' },
  { label: 'Monthly Calls', value: 'month_call' },
  { label: 'Long Term Calls', value: 'long_term' },
];

/********************************** Equity Trading************************************************/

export const DefaultEquityTrading = {
  plan_name: '',
  buy_cell: '',
  share_name: '',
  price_from: '',
  price_to: '',
  stoploss: '',
  target: '',
  minimum_quantity: '',
};

export const DefaultEquitError = {
  plan_name: '',
  buy_cell: '',
  share_name: '',
  price_from: '',
  price_to: '',
  stoploss: '',
  target: '',
  minimum_quantity: '',
};

/*********************************Option Trading*************************************************/

export const DefaultOptionTrading = {
  share_name: '',
  buy_cell: '',
  ce_pe_type: '',
  strick_price: '',
  price_from: '',
  price_to: '',
  target: '',
  stoploss: '',
  minimum_quantity: '',
};

export const DefaultOptionError = {
  share_name: '',
  ce_pe_type: '',
  buy_cell: '',
  strick_price: '',
  price_from: '',
  price_to: '',
  target: '',
  stoploss: '',
  minimum_quantity: '',
};

/***********************************Hedge Trading***********************************************/

export const DefaultBaseTrading = {
  option_type: 'open',
  plan_type: '',
};

export const DefaultBaseTradingError = {
  option_type: '',
  plan_type: '',
};

/***********************************Commodity Equity***********************************************/
export const DefaultCommodityTrading = {
  trading_type: 'equity',
  plan_type: '',
  option_type: 'open',
};

export const DefaultCommodityTradingError = {
  trading_type: '',
  plan_type: '',
  option_type: '',
};
