import React from 'react';
import style from './cellCard.module.scss';

export default function cellCard() {
  return (
    <>
      <div className={`${style.maincontainer}`}>
        <div className={`${style.headercontainer}`}>
          <div className={`${style.headersubcontainer01}`}></div>
          <div className={`${style.headersubcontainer02}`}>Day call</div>
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
              <td>asdkasd</td>
              <td>asdhasdg</td>
              <td>asdkasd</td>
              <td>asdhasdg</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
