// // TableComponent.tsx
// import React, { useState } from 'react';
// import { TrainingRequest, DataItem } from '@/types/index';
// // import DeleteModal from '../Modals/DeleteModal';
// // import CorporateClientDetails from '../Modals/CorporateClientDetails';
// import Image from 'next/image';
// import styles from './styles.module.scss';

// interface TableProps {
//   columns: string[];
//   data: TrainingRequest[] | undefined;
//   activeTab?: string;
//   corporateList: () => void;
//   // PageHandle: () => void;
// }

// const TableComponent = ({ columns, data, corporateList }: TableProps) => {
//   const [show, setShow] = useState(false);
//   const [userId, setUserId] = useState<string | undefined>();
//   const [url, setUrl] = useState<string | undefined>();
//   const [userData, setUserData] = useState<DataItem | undefined>();
//   const [showValue, setShowValue] = useState(false);
//   const [approved, setApproved] = useState<boolean>();

//   const handleDelete = (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
//     val: boolean,
//     id: string,
//     value: string,
//     isApproved: boolean
//   ): void => {
//     if (value === 'delete') {
//       e.stopPropagation();
//       setShow(val);
//       setUserId(id);
//       setUrl(value);
//     }
//     if (value === 'approve-and-disapprove') {
//       e.stopPropagation();
//       setShow(val);
//       setUserId(id);
//       setUrl(value);
//       setApproved(isApproved);
//     }
//   };

//   const handleDetails = (value: DataItem | undefined): void => {
//     setUserData(value);
//     setShowValue(true);
//   };

//   return (
//     <div className={`${styles.dashboard_data} mt-5 `}>
//       <table className={`${styles.table_dashboard} table responsive `}>
//         <thead>
//           <tr>
//             {columns.map((column, index) => (
//               <th key={index}>{column}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data?.map(appointment => (
//             <>
//               <tr key={appointment?._id} onClick={() => handleDetails(appointment)}>
//                 <td>{appointment?.name}</td>
//                 <td>{appointment?.instituteName}</td>
//                 <td>{appointment?.corporateType}</td>
//                 <td>{appointment?.email}</td>
//                 <td>{appointment?.contact}</td>
//                 <td>{appointment?.isApproved ? 'true' : 'false'}</td>
//                 <td>{appointment?.agent?.email}</td>
//                 <td className={styles.action}>
//                   <button
//                     onClick={e => handleDelete(e, true, appointment?._id, 'delete', appointment?.isApproved)}
//                     className="bg-transparent"
//                     title="Delete"
//                   >
//                     <Image src={'/assets/svg/delete.svg'} alt="delete" width={25} height={25} />
//                   </button>
//                   <button
//                     className={`${styles.approve_btn} ${appointment.isApproved && styles.approved_btn} bg-transparent`}
//                     title="Approved"
//                     onClick={e =>
//                       handleDelete(e, true, appointment?._id, 'approve-and-disapprove', appointment?.isApproved)
//                     }
//                   >
//                     <span></span>
//                   </button>
//                 </td>
//               </tr>
//             </>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         {/* <DeleteModal
//           show={show}
//           setShow={() => setShow(false)}
//           corporateList={corporateList}
//           userId={userId}
//           url={url}
//           approved={approved}
//         />
//         <CorporateClientDetails userData={userData} show={showValue} setShowValue={() => setShowValue(false)} /> */}
//       </div>
//     </div>
//   );
// };

// export default TableComponent;
