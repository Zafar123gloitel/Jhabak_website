import React from 'react';
import style from './userCard.module.scss';

import Image from 'next/image';

export default function usercard() {
  return (
    <>
      <div className={`${style.maincontainer}`}>
        <div className={`${style.conatainer}`}>
          <div className={`${style.imageContainer}`}>
            <Image src="/assets/images/profile/userimage.png" width={484} height={300} alt="Picture of the author" />
            <div className={`${style.dpconatiner}`}>
              <Image src="/assets/images/profile/dp.png" width={185} height={185} alt="Picture of the author" />
            </div>
          </div>
          <div className={`${style.downcontainer}`}>
            <div className={`${style.userdowncontainer}`}>
              <p>Yugal Kishor</p>
              <p>user</p>
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
