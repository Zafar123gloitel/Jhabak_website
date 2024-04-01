'use client';
import React from 'react';
import style from './cellCard.module.scss';
import { useUser } from '@/hooks';
import { IPlans } from '@/types';
import moment from 'moment';
import Image from 'next/image';
// import { table } from 'console';
export default function CellCard() {
  const { getUsersPlans } = useUser();
  const formatEndDateRange = (endDateString: Date) => {
    return moment(endDateString).format('DD.MM.YYYY');
  };
  return (
    <>
      {getUsersPlans()?.map((item: IPlans) => {
        return (
          <div className={`${style.cellmaincontainer}`} key={item._id}>
            <div className={`${style.cellheadercontainer}`}>
              {/* <Image src="/assets/svg/profile/red.svg" width={31} height={31} alt="Picture of the author" /> */}
              <Image src="/assets/svg/profile/Green.svg" width={31} height={31} alt="Picture of the author" />
              <p>{item?.plan_type.split('_').join(' ')}</p>
            </div>
            <div className={`${style.cellfootercontainer}`}>
              <table>
                <tr>
                  <th>Calls Type</th>
                  <th>Duration</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>

                {/* <tr> */}

                {item.trading_type.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <Image src="/assets/svg/profile/check.svg" width={14} height={14} alt="Picture of the author" />
                        <p className="m-0">{value}</p>
                      </td>

                      <td>{`${item?.durations.duration} ${item?.durations?.duration_type}`}</td>
                      <td>{formatEndDateRange(item?.start_plan)}</td>
                      <td>{formatEndDateRange(item?.end_plan)}</td>
                    </tr>
                  );
                })}

                {/* </tr> */}
              </table>
            </div>
          </div>
        );
      })}
    </>
  );
}
