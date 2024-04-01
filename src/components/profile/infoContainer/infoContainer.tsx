import React from 'react';
import style from './infoContainer.module.scss';
import UserData from './config';

export default function infoContainer() {
  return (
    <div className={`${style.maincontainer}`}>
      <div className={`${style.divcontainer}`}>
        <div className={`${style.datacontainer}`}>
          <div>
            <p>
              <span className={`${style.fontwrightMedium} css-f14`}>Contact No . </span>
              <span className={`${style.fontwrightextralight} css-f12`}>{UserData.conactNumber}</span>
            </p>
            <p>
              <span className={`${style.fontwrightMedium} css-f14`}>Email </span>
              <span className={`${style.fontwrightextralight} css-f12`}>{UserData.email}</span>
            </p>
          </div>
          <div>
            <p>
              <span className={`${style.fontwrightMedium} css-f14`}>Adhar No.</span>
              <span className={`${style.fontwrightextralight} css-f12`}>{UserData.aadharNumber}</span>
            </p>
            <p>
              <span className={`${style.fontwrightMedium} css-f14`}> PAN No. </span>
              <span className={`${style.fontwrightextralight} css-f12`}> {UserData.panNumber}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
