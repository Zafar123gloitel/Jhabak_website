import React from 'react';
import style from './personalInfo.module.scss';
import InfoContainer from '../infoContainer/infoContainer';
import CellCard from '../cellCard/cellCard';

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
              <p className="text-white">Active</p>
              <p className="text-white">Near About Expire </p>
            </div>
            <div className={`${style.cellbox}`}>
              <CellCard />
              {/* <CellCard /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
