export interface IPlanDuration {
  name: string;
  value: string;
}
export interface IInputsDetails {
  callTypeName: string;
  callTypeLabel: string;
  planDurationName: string;
  planDuration: IPlanDuration[];
  tradeTypeName: string;
}

export const inputsDetails: IInputsDetails[] = [
  {
    callTypeName: 'day_call',
    callTypeLabel: 'Day Call',
    planDurationName: 'daycall_duration',
    planDuration: [
      {
        name: '1 Mth',
        value: '1month',
      },
      {
        name: '3 Mth',
        value: '3month',
      },
      {
        name: '6 Mth',
        value: '6month',
      },
      {
        name: '1 Yr',
        value: '1year',
      },
    ],
    tradeTypeName: 'day_call_tradeType',
  },
  {
    callTypeName: 'week_call',
    callTypeLabel: 'Week Call',
    planDurationName: 'weekcall_duration',
    planDuration: [
      {
        name: '1 Mth',
        value: '1month',
      },
      {
        name: '3 Mth',
        value: '3month',
      },
      {
        name: '6 Mth',
        value: '6month',
      },
      {
        name: '1 Yr',
        value: '1year',
      },
    ],
    tradeTypeName: 'week_call_tradeType',
  },
  {
    callTypeName: 'month_call',
    callTypeLabel: 'Month Call',
    planDurationName: 'monthcall_duration',
    planDuration: [
      {
        name: '1 Mth',
        value: '1month',
      },
      {
        name: '3 Mth',
        value: '3month',
      },
      {
        name: '6 Mth',
        value: '6month',
      },
      {
        name: '1 Yr',
        value: '1year',
      },
    ],
    tradeTypeName: 'month_call_tradeType',
  },
  {
    callTypeName: 'year_call',
    callTypeLabel: 'Year Call',
    planDurationName: 'yearcall_duration',
    planDuration: [
      {
        name: '1 YR',
        value: '1year',
      },
      {
        name: '3 Yr',
        value: '3year',
      },
      {
        name: '6 Yr',
        value: '6year',
      },
      {
        name: '1 Yr',
        value: '1year',
      },
    ],
    tradeTypeName: 'year_call_tradeType',
  },
];
