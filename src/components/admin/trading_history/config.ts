export interface IEqutiyHistory {
  buy_sell_type?: 'string';
  createdAt?: 'string';
  min_quantity?: number;
  plan_type?: string;
  price_range_from?: number;
  price_range_to?: number;
  share_name?: string;
  stop_loss?: number;
  target_set: number;
}

export interface IHedgeOption {
  first_buy_sell_type: string;
  first_min_quantity: number;
  first_option_call: string;
  first_price_range_from: number;
  first_price_range_to: number;
  first_share_name: string;
  first_stop_loss: number;
  first_strike_price: string;
  first_target_set: number;
  second_buy_sell_type: string;
  second_min_quantity: number;
  second_option_call: string;
  second_price_range_from: number;
  second_price_range_to: number;
  second_share_name: string;
  second_stop_loss: number;
  second_strike_price: string;
  second_target_set: number;
}
export interface IHedgeOptionHistory {
  hedge: string;
  option_type: string;
  plan_type: string;
}

export interface IOpenOption {
  buy_sell_type: string;
  min_quantity: number;
  option_call: string;
  price_range_from: number;
  price_range_to: number;
  share_name: string;
  stop_loss: number;
  strike_price: string;
  target_set: number;
}
export interface IOpenOptionHistory {
  open: IOpenOption[];
  option_type: string;
  plan_type: string;
}
