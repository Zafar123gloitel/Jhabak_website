export interface IOption {
  id: string;
  label: string;
  value: string;
}

export const plans: IOption[] = [
  { id: 'day_call', label: 'Day Call', value: 'day_call' },
  { id: 'weekly_call', label: 'Weekly Call', value: 'weekly_call' },
  { id: 'monthly_call', label: 'Monthly Call', value: 'monthly_call' },
  { id: 'year_call', label: 'Year Call', value: 'year_call' },
];

export const dayCallDurations: IOption[] = [
  { id: '1mth', label: '1 Mth', value: '1month' },
  { id: '3mth', label: '3 Mth', value: '3month' },
  { id: '6mth', label: '6 Mth', value: '6month' },
  { id: '1year', label: '1 Year', value: '1year' },
];
export const weekCallDurations: IOption[] = [
  { id: '1mth', label: '1 Mth', value: '1month' },
  { id: '3mth', label: '3 Mth', value: '3month' },
  { id: '6mth', label: '6 Mth', value: '6month' },
  { id: '1year', label: '1 Year', value: '1year' },
];
export const monthCallDurations: IOption[] = [
  { id: '1mth', label: '1 Mth', value: '1month' },
  { id: '3mth', label: '3 Mth', value: '3month' },
  { id: '6mth', label: '6 Mth', value: '6month' },
  { id: '1year', label: '1 Year', value: '1year' },
];

export const longCalldurations: IOption[] = [
  { id: '1year', label: '1 Year', value: '1year' },
  { id: '3year', label: '3 Year', value: '3year' },
  { id: '6year', label: '6 Year', value: '6year' },
  { id: '9year', label: '9 Year', value: '9year' },
];

export const tradeTypes: IOption[] = [
  { id: 'equity', value: 'equity', label: 'Equity' },
  { id: 'option', value: 'option', label: 'Option' },
  { id: 'commodity', value: 'commodity', label: 'Commodity' },
];
