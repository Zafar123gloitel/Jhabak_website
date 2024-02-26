'use client';
import React, { useState } from 'react';
import styles from './login.module.scss';
import InputField from '../InputField/InputField';
import Image from 'next/image';
import Link from 'next/link';
import { validatePassword, validateEmail, validatePhoneNumber } from 'regexx';

const defaultLoginData = {
  email: '',
  password: '',
};
export const Login = () => {
  const [credentials, setCredentials] = useState(defaultLoginData);
  const [inputError, setInputError] = useState(defaultLoginData);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputError(defaultLoginData);
    setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (!validateEmail(credentials.email) || !validatePhoneNumber(credentials.email)) {
        return setInputError(prev => ({ ...prev, email: 'Invalid email or phone number' }));
      }
      if (!validatePassword(credentials.password, 'basic')) {
        // console.log(credentials.password, 'password');
        return setInputError(prev => ({ ...prev, password: 'Password should contains"Aa123@"' }));
      }
      setInputError(defaultLoginData);
    } catch (error) {
      const typeError = error as Error;

      return new Error(typeError.message);
    }
  }

  return (
    <main className={`${styles.outter_container} element_center `}>
      <div className=" css_max_screen flex-wrap element_center">
        <div className={`${styles.inner_container} d-flex flex-wrap element_center `}>
          <h2 className={`${styles.heading} section_heading_css element_center  `}>Welcome to Jhabak</h2>

          <p className={`${styles.sub_heading} text-blue css-f18`}>Share and Stock Brokers</p>

          <Image
            className={styles.image}
            src="/assets/images/login_image.jpg"
            alt=" login image"
            width={200}
            height={200}
          />

          <h3 className={`${styles.sub_heading2} text-blue css-f25`}>Login</h3>

          <form className={`${styles['details']} element_center `} onSubmit={onSubmit}>
            <div className={`${styles['User_name_div']}`}>
              <InputField
                className={`${styles['User_name']}`}
                type="text"
                name="email"
                onChange={onChange}
                label=""
                value={credentials.email}
                placeholder="Enter Email or Phone"
                error={inputError.email}
              />
            </div>
            <div className={`${styles['User_name_div']} `}>
              <InputField
                type="password"
                name="password"
                label=""
                onChange={onChange}
                value={credentials.password}
                placeholder="Password"
                error={inputError.password}
              />
            </div>
            <button className={`${styles['Button']} Dark_button text-blue css-f20 mt-2`} type="submit">
              Login
            </button>
          </form>

          <button className={`${styles.sub_heading3} text-blue css-f14 element_center`}>Forgot password ?</button>
          <p className={`${styles.sub_heading4} text-blue  css-f17 element_center flex-wrap`}>
            Dont have an account ?
            <strong>
              <Link href="/signup">Signup</Link>
            </strong>
          </p>
        </div>
      </div>
    </main>
  );
};
