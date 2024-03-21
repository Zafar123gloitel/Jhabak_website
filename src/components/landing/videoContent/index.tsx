import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
// import video from '../'
function VideoContent() {
  return (
    <>
      <div className={`${styles['main_home_page_video']} All_content_center section_shadow mb-1`}>
        <div className={`${styles['inner_main_home_page_video']}`}>
          <div>
            <video
              src="https://res.cloudinary.com/ddaddjwgj/video/upload/v1707478995/jhabak_trading/c69rhiryl2zurlvikv0q.mp4"
              autoPlay
              loop
              muted
            />
          </div>

          <div className={`${styles.banner_content}`}>
            <p className="small_heading m-0">Welcome to Jhabak Share and Stock Broker</p>
            <h1 className="section_heading_css text-white mt-2">Gateway to Smart Investments!</h1>
            <ul className={`${styles.facilities} d-flex mt-2`}>
              <li className="d-flex">
                <button className="Dark_button bg-light text-black">
                  {/* <Image src="/assets/svg/landing/check.svg" alt="Intraday" width={25} height={25} /> */}
                  <span>Intraday Calls</span>
                </button>
              </li>
              <li className="d-flex mx-2">
                <button className="Dark_button bg-light text-black">
                  {/* <Image src="/assets/svg/landing/check.svg" alt="Intraday" width={25} height={25} /> */}
                  <span>Investment Services</span>
                </button>
              </li>
              <li className="d-flex">
                <button className="Dark_button bg-light text-black">
                  <Image src="/assets/svg/landing/check.svg" alt="Intraday" width={25} height={25} />
                  <span>Technical Analysis Course</span>
                </button>
              </li>
            </ul>
            <button className="Dark_button mt-3 d-none">Book an Appointment</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoContent;
