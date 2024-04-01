import React from 'react';
import style from './personalInfo.module.scss';
import InfoContainer from '../infoContainer/infoContainer';
import CellCard from '../cellCard/cellCard';
import Image from 'next/image';

export default function personalInfo() {
  return (
    <>
      <div className={`${style.maincontainer}`}>
        <div className={`${style.infocontainer}`}>
          <div>
            <h2 className={`${style.heading}`}>Personal Information</h2>
            <InfoContainer />
          </div>
          <div className={`${style.afterinfoconatiner}`}>
            <div className={`${style.heading}`}>
              <h2 className={`${style.heading02}`}>Plan Information</h2>
              <div>
                <Image src="/assets/svg/profile/Green.svg" width={15} height={15} alt="Picture of the author" />
                <p className="text-white">Active</p>
                <Image src="/assets/svg/profile/red.svg" width={15} height={15} alt="Picture of the author" />
                <p className="text-white">Near About Expire </p>
              </div>
            </div>
            <div className={`${style.cellbox}`}>
              <CellCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
