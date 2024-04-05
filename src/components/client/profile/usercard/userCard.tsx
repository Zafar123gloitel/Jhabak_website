import React from 'react';
import style from './userCard.module.scss';

import Image from 'next/image';

export default function Usercard() {
  return (
    <>
      <div className={`${style.maincontainer}`}>
        <div className={`${style.conatainer}`}>
          <div className={`${style.imageContainer}`}>
            <div className={style.img}>
              <Image src="/assets/images/profile/userimage.png" fill={true} alt="" />
            </div>

            <div className={`${style.dpconatiner}`}>
              <Image src="/assets/images/profile/dp.png" fill={true} alt="" />
              <div>{/* <Image src="/assets/svg/profile/camera-add 1.svg" width={27} height={27} alt="" /> */}</div>
            </div>
          </div>
          <div className={`${style.downcontainer}`}>
            <div className={`${style.userdowncontainer}`}>
              <h2>Yugal Kishor</h2>
              <h5>user</h5>
              <div className={`${style.paradown}`}>
                <p>yugalkishor@gloitel.in</p>
                <p>+91 7509255990</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
