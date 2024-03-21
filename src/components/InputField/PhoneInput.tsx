// import React, { useState } from 'react';
// import styles from './styles.module.scss';
// import { Dropdown, DropdownButton } from 'react-bootstrap';
// import { ddItems } from '@/services/country';

// interface CustomDatePickerProps {
//   onChange?: () => void;
//   filterHandler?: () => void;
//   label: string;
//   placeholderText: string;
//   required?: boolean;
//   autoComplete: string;
//   startDate: Date;
//   name: string;
//   className: string;
//   error?: string;
// }
// const PhoneInput: React.FC<CustomDatePickerProps> = ({
//   //   onChange,
//   filterHandler,
//   label,
//   placeholderText,
//   required,
//   //   name,
//   className,
//   error,
// }) => {
//   const [data, setData] = useState(ddItems);
//   const [countryCode, setCountryCode] = useState('+91');
//   const [searchValue, setSearchValue] = useState('');
//   //   console.log(startDate, 'start Date');
//   const handleCountry = (code: string) => {
//     setCountryCode(code);
//   };
//   return (
//     <div className={`${styles._input_field_} input-field ${className} ${styles.date_input}`}>
//       <div className={`${styles.phone_number} ${styles['enquiry_phone_number']}`}>
//         <div className={`${styles['enquiry_phone_number_collection']} All_content_center country-collection`}>
//           <label className={styles.label}>{label && <span>{required && ' *'}</span>}</label>
//           <DropdownButton id="dropdown-basic-button" title={countryCode} className="dropdown-btn-phn">
//             <input
//               type="text"
//               className="search drop_search dark_input"
//               placeholder="Search"
//               value={searchValue}
//               onChange={filterHandler}
//             />
//             <div className="dd-item-wrp">
//               {data.map((d: Record<string, string>, index: number) => {
//                 return (
//                   <Dropdown.Item key={index} onClick={() => handleCountry(d.code)}>
//                     <span className="left">{d.country}</span>
//                     <span className="right">{d.code}</span>
//                   </Dropdown.Item>
//                 );
//               })}
//             </div>
//           </DropdownButton>
//           <input
//             type="number"
//             // label=""
//             name="mobile"
//             placeholder={placeholderText}
//             value={''}
//             //   onChange={e => handleFormDataChange(e)}
//             // error={'mobileError'}
//             className={`${styles.consultant_phone} phone_input ${styles.phone_input} dark_input`}
//           />
//         </div>
//       </div>
//       {error && <span className="error-message">{error}</span>}
//     </div>
//   );
// };

// export default PhoneInput;
