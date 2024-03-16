'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmail, validateEmptyString, validateIndianPhoneNumber } from 'regexx';
import styles from './styles.module.scss';
import InputField from '@/components/InputField/InputField';
import TradeTypeInput from './tradeTypeInput';
import { apiService, durationCalculation } from '@/utils';
import { useUser } from '@/hooks';

const CREATE_CORPORATE_CLIENT = {
  name: '',
  email: '',
  phone_number: '',
  pan_number: '',
  aadhar_number: '',
  isActive: true,
  subscription: false,
};

const CreateClientForm = () => {
  const { UserData } = useUser();
  const [formData, setFormData] = useState(CREATE_CORPORATE_CLIENT);
  const [getError, setGetError] = useState({ ...CREATE_CORPORATE_CLIENT });
  const [isLoading, setIsLoading] = useState(false);

  //Select Trade Type
  const [selectedDayOptions, setSelectedDayOptions] = useState<string[]>([]);
  const [selectedWeekOptions, setSelectedWeekOptions] = useState<string[]>([]);
  const [selectedMonthOptions, setSelectedMonthOptions] = useState<string[]>([]);
  const [selectedLongOptions, setSelectedLongOptions] = useState<string[]>([]);

  //duration select of the plan
  const [dayOption, setDayOption] = useState('');
  const [weekOption, setWeekDayOption] = useState('');
  const [monthOption, setMonthDayOption] = useState('');
  const [longOption, setLongOption] = useState('');

  //plan type selection
  const [dayCallPlan, setDayCallPlan] = useState('');
  const [weekCallPlan, setWeekCallPlan] = useState('');
  const [monthCallPlan, setMonthCallPlan] = useState('');
  const [longCallPlan, setlongCallPlan] = useState('');

  //call plan select check
  const [isDayChecked, setIsDayChecked] = useState(false);
  const [isWeekChecked, setIsWeekChecked] = useState(false);
  const [isMonthChecked, setIsMonthChecked] = useState(false);
  const [isYearChecked, setIsYearChecked] = useState(false);
  //Reset the all field
  function Reset() {
    setGetError({ ...CREATE_CORPORATE_CLIENT });
    setFormData(CREATE_CORPORATE_CLIENT);
    setIsLoading(false);
    setIsDayChecked(false);
    setIsWeekChecked(false);
    setIsMonthChecked(false);
    setIsYearChecked(false);
    // setSelectedDayOptions([]);
    // setSelectedWeekOptions([]);
    // setSelectedMonthOptions([]);
    // setSelectedLongOptions([]);
  }
  //function about the all fields
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setGetError({ ...CREATE_CORPORATE_CLIENT }); // clearing all the errors
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevData => ({ ...prevData, [name]: newValue }));
  }

  //function about the all fields error
  function onError(key: string, msg: string) {
    setGetError(prev => ({ ...prev, [key]: msg }));
  }

  //function about to select the day option of the select the day duration
  function handleDayChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setDayOption(value);
  }

  //function about to select the day option of the select the week duration
  function handleWeekChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setWeekDayOption(value);
  }

  //function about to select the day option of the select the month duration
  function handleMonthChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setMonthDayOption(value);
  }

  //function about to select the day option of the select the long duration
  function handleLongChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setLongOption(value);
  }

  //Api call
  // eslint-disable-next-line sonarjs/cognitive-complexity
  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!formData.isActive) return toast.error('isActive Should be true.');
      if (validateEmptyString(UserData()?._id ?? '')) return toast.error('Invalid Admin Id.');
      if (validateEmptyString(formData.name)) return onError('name', 'Enter client name.');
      if (!validateEmail(formData.email)) return onError('email', 'Invalide Email Address.');
      if (validateEmptyString(formData.phone_number)) return onError('phone_number', 'Enter client number.');
      if (!validateIndianPhoneNumber(formData.phone_number)) return onError('phone_number', 'Invalide Phone Number.');
      if (validateEmptyString(formData.pan_number)) return onError('pan_number', 'Enter client pan.');
      // if (validation(formData.pan_number)) return onError('pan_number', 'Enter valid client pan.');
      if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan_number.toUpperCase())) {
        return onError('pan_number', 'Enter valid client pan.');
      }
      if (validateEmptyString(formData.aadhar_number)) return onError('aadhar_number', 'Enter client aadhar.');
      if (!/^\d{12}$/.test(formData.aadhar_number.toUpperCase())) {
        return onError('pan_number', 'Enter valid client pan.');
      }

      setIsLoading(true);
      const plans = [];
      if (formData.subscription) {
        if (isDayChecked) {
          const { start_plan, end_plan, duration, duration_type } = durationCalculation(dayOption);
          const val = {
            start_plan,
            end_plan,
            plan_type: dayCallPlan,
            trading_type: selectedDayOptions,

            durations: {
              duration,
              duration_type,
            },
          };
          plans.push(val);
        }
        if (isWeekChecked) {
          const { start_plan, end_plan, duration, duration_type } = durationCalculation(weekOption);
          const val = {
            start_plan,
            end_plan,
            plan_type: weekCallPlan,
            trading_type: selectedWeekOptions,

            durations: {
              duration,
              duration_type,
            },
          };
          plans.push(val);
        }
        if (isMonthChecked) {
          const { start_plan, end_plan, duration, duration_type } = durationCalculation(monthOption);
          const val = {
            start_plan,
            end_plan,
            plan_type: monthCallPlan,
            trading_type: selectedMonthOptions,

            durations: {
              duration,
              duration_type,
            },
          };
          plans.push(val);
        }
        if (isYearChecked) {
          const { start_plan, end_plan, duration, duration_type } = durationCalculation(longOption);
          const val = {
            start_plan,
            end_plan,
            plan_type: longCallPlan,
            trading_type: selectedLongOptions,
            durations: {
              duration,
              duration_type,
            },
          };
          plans.push(val);
        }
      }
      const data = { ...formData, plans };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.post(`/admin/${UserData()?._id}/create-user`, data);
      if (response.success && response.status === 201) {
        toast.success(response.message);
        Reset();
      }
    } catch (error) {
      const _e = error as Error;
      toast.error(_e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className={`${styles.create_form} element_center`}>
        <form className={`${styles.create_Client_section} element_center flex-column`} onSubmit={handleFormSubmit}>
          <div className={`${styles.inr_create_Client_section}`}>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                label={'Full Name *'}
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                placeholder="Ex : John Doe"
                className={`${styles.Client_input_section}`}
                error={getError.name}
              />
            </div>

            <div className={`${styles.Client_input_container}`}>
              <InputField
                label={'Email Address *'}
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="Enter Email Address"
                className={`${styles.Client_input_section}`}
                error={getError.email}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                label={'Phone Number *'}
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={onChange}
                placeholder="Eg: +918648594525"
                className={`${styles.Client_input_section}`}
                error={getError.phone_number}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                label={'PAN Number *'}
                type="text"
                name="pan_number"
                value={formData.pan_number}
                onChange={onChange}
                placeholder="Enter Your PAN Number"
                className={`${styles.Client_input_section}`}
                error={getError.pan_number}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                label={'Adhaar *'}
                type="text"
                name="aadhar_number"
                value={formData.aadhar_number}
                onChange={onChange}
                placeholder="Enter Your Addhar Number"
                className={`${styles.Client_input_section}`}
                error={getError.aadhar_number}
              />
            </div>

            <div className={`${styles.Client_input_container}`}>
              <fieldset className="mt-4">
                <span className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    id="isActive"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={onChange}
                  />
                  <label htmlFor="isActive">isActive</label>
                </span>

                <span className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    id="subscription"
                    name="subscription"
                    checked={formData.subscription}
                    onChange={onChange}
                  />
                  <label htmlFor="subscription">Subscription</label>
                </span>
              </fieldset>
            </div>
          </div>
          {formData?.subscription && (
            <>
              <div className={` ${styles.plan_headings} d-flex mt-3 text-white w-100 element_center`}>
                <div className="d-flex">
                  <span className={` ${styles.single_plan} css-f15 `}>Select Plan </span>
                  <span className={` ${styles.single_plan} css-f15`}>Select Duration </span>
                  <span className={` ${styles.single_plan} css-f15 d-flex  justify-content-center`}>
                    Select Trade Type
                  </span>
                </div>
              </div>

              <div
                className={`${styles.Client_input_container} ${styles.plans_details} w-100 element_center flex-column mt-2`}
              >
                <div className={`${styles.single_plan_field}`}>
                  <Checkbox
                    label="Day Call"
                    isChecked={isDayChecked}
                    setIsChecked={setIsDayChecked}
                    setPlanType={setDayCallPlan}
                  />

                  <TradeTypeInput
                    setSelectedOptions={setSelectedDayOptions}
                    selectedOptions={selectedDayOptions}
                    handleChanges={handleDayChanges}
                    longTerm="day-call"
                  />
                </div>
                <div className={`${styles.single_plan_field}`}>
                  <Checkbox
                    label="Weekly Call"
                    isChecked={isWeekChecked}
                    setIsChecked={setIsWeekChecked}
                    setPlanType={setWeekCallPlan}
                  />
                  <TradeTypeInput
                    setSelectedOptions={setSelectedWeekOptions}
                    selectedOptions={selectedWeekOptions}
                    handleChanges={handleWeekChanges}
                    longTerm="week-call"
                  />
                </div>
                <div className={`${styles.single_plan_field}`}>
                  <Checkbox
                    label="Monthly Call"
                    isChecked={isMonthChecked}
                    setIsChecked={setIsMonthChecked}
                    setPlanType={setMonthCallPlan}
                  />
                  <TradeTypeInput
                    setSelectedOptions={setSelectedMonthOptions}
                    selectedOptions={selectedMonthOptions}
                    handleChanges={handleMonthChanges}
                    longTerm="month-call"
                  />
                </div>
                <div className={`${styles.single_plan_field}`}>
                  <Checkbox
                    label="Year Call"
                    isChecked={isYearChecked}
                    setIsChecked={setIsYearChecked}
                    setPlanType={setlongCallPlan}
                  />
                  <TradeTypeInput
                    setSelectedOptions={setSelectedLongOptions}
                    selectedOptions={selectedLongOptions}
                    handleChanges={handleLongChanges}
                    longTerm="year-call"
                  />
                </div>{' '}
                *
              </div>
            </>
          )}

          <div className={`${styles.sbt_button} w-100 d-flex element_center`}>
            <button type="submit" className={`${styles.smt_btn} Dark_button css-f16`}>
              {isLoading ? 'Loading...' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

// function Checkbox({
//   label,
//   isChecked,
//   setIsChecked,
//   setPlanType,
// }: {
//   label: string;
//   isChecked: boolean;
//   setIsChecked: (prev: boolean) => void;
//   setPlanType: string;
// }) {
//   // onChange={() => setIsChecked(!isChecked)}
//   const handlePlanType = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setIsChecked(!isChecked);
//     // eslint-disable-next-line no-constant-condition
//     if (label === 'Day Call' && !isChecked) {
//       // setPlanType(prevData => ({ ...prevData, [name]: value }));
//       setPlanType('day_call');
//     } else {
//       setPlanType('');
//     }
//     if (label === 'Weekly Call') {
//       // setPlanType(prevData => ({ ...prevData, [name]: value }));
//       setPlanType('week_call');
//     }
//   };

//   return (
//     <div className={`${styles.single_plan} d-flex align-items-center`}>
//       <input type="checkbox" id={label} name={label} checked={isChecked} onChange={handlePlanType} />
//       <label htmlFor={label} className="css-f12">
//         {label}
//       </label>
//     </div>
//   );
// }
interface CheckboxProps {
  label: string;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setPlanType: React.Dispatch<React.SetStateAction<string>>;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, setIsChecked, setPlanType }) => {
  const handlePlanType = () => {
    setIsChecked(!isChecked);

    if (label === 'Day Call' && !isChecked) {
      setPlanType('day_call');
    } else if (label === 'Weekly Call' && !isChecked) {
      setPlanType('week_call');
    } else if (label === 'Monthly Call' && !isChecked) {
      setPlanType('month_call');
    } else if (label === 'Year Call' && !isChecked) {
      setPlanType('long_term');
    } else {
      setPlanType('');
    }
  };

  return (
    <div className={`${styles.single_plan} d-flex align-items-center`}>
      <input type="checkbox" id={label} name={label} checked={isChecked} onChange={handlePlanType} />
      <label htmlFor={label} className="css-f12">
        {label}
      </label>
    </div>
  );
};
export default CreateClientForm;
