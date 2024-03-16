import moment from 'moment';

export const durationCalculation = (expire: string) => {
  const start_plan: string = moment().format();
  const valueDuration: number = +expire.slice(0, 1);
  const stringValue: string = expire.slice(1) as string;
  const end_plan: string = moment()
    .add(valueDuration, stringValue as moment.unitOfTime.DurationConstructor)
    .format();
  return {
    start_plan,
    end_plan,
    duration: valueDuration,
    duration_type: stringValue,
  };
};
