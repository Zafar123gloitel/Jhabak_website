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

export const durations: IOption[] = [
  { id: '1mth', label: '1 Mth', value: '1mth' },
  { id: '2mth', label: '2 Mth', value: '2mth' },
  { id: '3mth', label: '3 Mth', value: '3mth' },
  { id: '1year', label: '1 Year', value: '1year' },
];

export const tradeTypes: IOption[] = [
  { id: 'equity', value: 'equity', label: 'Equity' },
  { id: 'option', value: 'option', label: 'Option' },
  { id: 'MCX', value: 'MCX', label: 'MCX' },
];
