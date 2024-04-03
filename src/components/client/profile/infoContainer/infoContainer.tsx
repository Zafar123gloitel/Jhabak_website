import React from 'react';
import style from './infoContainer.module.scss';
import { useUser } from '@/hooks';
export default function InfoContainer() {
  const { UserData } = useUser();
  return (
    <div className={`${style.maincontainer}`}>
      <div className={`${style.divcontainer}`}>
        <div className={`${style.datacontainer}`}>
          <div>
            <p>
              <span className={`${style.fontwrightMedium} css-f14`}>Contact No . </span>
              <span className={`${style.fontwrightextralight} css-f12`}>{UserData()?.phone_number}</span>
            </p>
            <p>
              <span className={`${style.fontwrightMedium} css-f14`}>Email </span>
              <span className={`${style.fontwrightextralight} css-f12`}>{UserData()?.email.toUpperCase()}</span>
            </p>
          </div>
          <div>
            <p>
              <span className={`${style.fontwrightMedium} css-f14`}>Adhar No.</span>
              <span className={`${style.fontwrightextralight} css-f12`}>{UserData()?.aadhar_number}</span>
            </p>
            <p>
              <span className={`${style.fontwrightMedium} css-f14`}> PAN No. </span>
              <span className={`${style.fontwrightextralight} css-f12`}> {UserData()?.pan_number.toUpperCase()}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
