// 'use client';
// import React from 'react';
// import styles from '../styles.module.scss';
// import SelectField from '@/components/InputField/SelectField';
// import { IInputsDetails } from '../inputConfig';

// const tradeTypeDataOptions = [
//   { label: 'Select Trade Type', value: '' },
//   { label: 'Equity', value: 'equity' },
//   { label: 'Option', value: 'option' },
//   { label: 'Commodity', value: 'Commodity' },
// ];

// interface Value {
//   call: string;
//   duration: string;
//   trade_type: string;
// }

// interface IProps extends IInputsDetails {
//   selectedOptions: Value;
//   setSelectedOptions: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
// }

// const TradeTypeInput = ({
//   callTypeName,
//   planDuration,
//   tradeTypeName,
//   callTypeLabel,
//   planDurationName,
//   selectedOptions,
//   setSelectedOptions,
// }: IProps) => {
//   return (
//     <>
//       <fieldset className={`${styles.single_plan_field} d-flex justify-content-around `}>
//         <div className={`${styles.single_plan} css-f14`}>
//           <input type="checkbox" id={callTypeName} name={'day_call'} />
//           <label htmlFor="day_call">{callTypeLabel}</label>
//         </div>

//         <div className={`${styles.single_plan} d-flex justify-content-start`}>
//           {planDuration?.map(item => {
//             return (
//               <span className={styles.duration} key={item.name}>
//                 <input type="radio" id={item.value} name={planDurationName} value={item.value} />
//                 <label htmlFor={item.value}>{item.name}</label>
//               </span>
//             );
//           })}
//         </div>
//         <div className={`${styles.single_plan}`}>
//           <SelectField
//             name={tradeTypeName}
//             options={tradeTypeDataOptions}
//             error=""
//             require=""
//             className={styles.tradeType}
//             onChange={()=>void}
//             value={''}
//           />
//         </div>
//       </fieldset>
//     </>
//   );
// };

// export default TradeTypeInput;
