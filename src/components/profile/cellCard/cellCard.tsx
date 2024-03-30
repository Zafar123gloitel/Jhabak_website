'use client';
import React from 'react';
import style from './cellCard.module.scss';
import { useUser } from '@/hooks';
import { IPlans } from '@/types';
import moment from 'moment';
export default function CellCard() {
  const { getUsersPlans } = useUser();
  const formatEndDateRange = (endDateString: Date) => {
    return moment(endDateString).format('DD.MM.YYYY');
  };
  return (
    <>
      {getUsersPlans()?.map((item: IPlans) => {
        return (
          <div className={`${style.maincontainer}`} key={item._id}>
            <div className={`${style.headercontainer}`}>
              <div className={`${style.headersubcontainer01}`}></div>
              <div className={`${style.headersubcontainer02}`}>{item?.plan_type.split('_').join(' ')}</div>
            </div>
            <div className={`${style.tableconatiner}`}>
              <table>
                <tr>
                  <td>Calls Type</td>
                  <td>Duration</td>
                  <td>Start</td>
                  <td>End</td>
                </tr>

                <tr>
                  <td className={`${style.cheklist}`}></td>
                  <td>
                    {item.trading_type.map((value, index) => {
                      return <li key={index}>{value}</li>;
                    })}
                  </td>
                  <td>{`${item?.durations.duration} ${item?.durations?.duration_type}`}</td>
                  <td>{formatEndDateRange(item?.start_plan)}</td>
                  <td>{formatEndDateRange(item?.end_plan)}</td>
                </tr>
              </table>
            </div>
          </div>
        );
      })}
    </>
  );
}
