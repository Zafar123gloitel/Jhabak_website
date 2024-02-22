import React from 'react';
import styles from './login.module.scss';
import InputField from '../InputField/InputField';
import Image from 'next/image';

export const Login = () => {
  return (
    <section className={`${styles.outter_container} element_center  section_shadow`}>
      <div className={`${styles.inner_container} css_max_screen d-flex flex-wrap element_center section_shadow `}>
        <h2 className={`${styles.heading} section_heading_css element_center `}>welcome to Jhabak</h2>

        <p className={`${styles.sub_heading} text-blue  css-f18`}>Share and Stock Brokers</p>

        <Image
          className={styles.image}
          src="/assets/images/login_image.jpg"
          alt=" login image"
          width={200}
          height={200}
        />

        <h3 className={`${styles.sub_heading2} text-blue css-f20`}>Login</h3>

        <div className={`${styles['details']} element_center `}>
          <div className={`${styles['User_name_div']}`}>
            <InputField
              className={`${styles['User_name ']}`}
              type="text"
              name="lName"
              label=""
              value=""
              placeholder="Username"
              error=""
            />
          </div>
          <div className={`${styles['User_name_div']}`}>
            <InputField type="text" name="lName" label="" value="" placeholder="Password" error="" />
          </div>
          <button className={`${styles['Button']} text-blue css-f20`} type="submit">
            Login
          </button>
        </div>

        <p className={`${styles.sub_heading3} text-blue  css-f14 element_center`}>Forgot password ?</p>
        <p className={`${styles.sub_heading4} text-blue  css-f17 element_center flex-wrap`}>
          Dont have an account ? <strong>Signup</strong>
        </p>
      </div>
    </section>
  );
};
