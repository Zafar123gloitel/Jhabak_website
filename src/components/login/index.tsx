'use client';
import React, { useState } from 'react';
import styles from './login.module.scss';
import InputField from '../InputField/InputField';
import Image from 'next/image';
import { toast } from 'react-toastify';
// import Forgotten from '@/components/Modals/ForgottenModal';
import useLoading from '@/components/Loader/Loader';
import '@/components/Loader/styles.module.scss';
import { useRouter } from 'next/navigation';
import { apiReduxService } from '@/utils';
import { validateEmail, validateIndianPhoneNumber, validatePassword, validateEmptyString } from 'regexx';
import { useAuth, useUser } from '@/hooks';

interface AddressProfileState {
  email: string;
  password: string;
}
interface AddressProfileState {
  email: string;
  password: string;
}

export const Login = () => {
  const { Auth, ResetAuth } = useAuth();
  const { SetUser, ResetUser } = useUser();
  const router = useRouter();

  const [userDetails, setUserDetails] = useState<AddressProfileState>({ email: '', password: '' });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toastId: any = React.useRef(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { startLoading, stopLoading } = useLoading();

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const rule = /\s{1,}/g;
    const valueData = value.split(rule).join(' ');

    if (value.startsWith(' ')) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error('SPACE_NOT_ALLOW');
      }
    } else {
      setUserDetails(prev => ({ ...prev, [e.target.name]: valueData }));
    }
  };
  const validateEmaill = () => {
    if (validateEmptyString(userDetails?.email)) {
      setEmailError('Invalid Crentials');
      return false;
    }
    const isEmailValid = validateEmail(userDetails.email);
    const isPhoneValid = validateIndianPhoneNumber(userDetails.email);

    if (!isEmailValid && !isPhoneValid) {
      setEmailError('Invalid email or phone  format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePasswords = () => {
    if (!userDetails?.password) {
      setPasswordError('Password is required');
      return false;
    }
    if (!validatePassword(userDetails?.password)) {
      setPasswordError('Invalid password format');
      return false;
    }
    setPasswordError('');
    return true;
  };

  // eslint-disable-next-line sonarjs/cognitive-complexity
  const handleLogin = async () => {
    try {
      const isEmailValid = validateEmaill();
      const isPasswordValid = validatePasswords();

      let data: Record<string, string> = {};
      if (validateEmail(userDetails.email)) {
        data = {
          email: userDetails.email,
          password: userDetails.password,
        };
      } else {
        data = {
          contact: userDetails.email,
          password: userDetails.password,
        };
      }
      if (isEmailValid && isPasswordValid) {
        startLoading();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = await apiReduxService.post('/login', data);
        if (response.success && response.status === 200) {
          Auth({
            role: response.payload.role,
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
          });
          SetUser(response.payload);

          toast.success('login successfull');
          if (response?.payload?.role === 'admin') {
            return router.push('/admin/clients');
          }
          if (response?.payload?.role === 'user') {
            return router.push('/client/dashboard');
          }
        } else {
          toast.info('you are not authorized');
          ResetAuth();
          ResetUser();
        }
      }
    } catch (error) {
      const typeError = error as Error;
      return toast.error(typeError.message);
    } finally {
      stopLoading();
    }
  };
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
          <div className={`${styles['details']} element_center `}>
            <div className={`${styles['User_name_div']}`}>
              <InputField
                className={`${styles['User_name']}`}
                type="text"
                name="email"
                placeholder="Enter Email or Phone"
                value={userDetails?.email}
                onChange={e => handleFormDataChange(e)}
                error={emailError}
              />
            </div>
            <div className={`${styles['User_name_div']} `}>
              <InputField
                type="password"
                name="password"
                label=""
                placeholder="Password"
                value={userDetails?.password}
                onChange={e => handleFormDataChange(e)}
                error={passwordError}
              />
            </div>

            <button className={`${styles['Button']} Dark_button text-blue css-f20 mt-2`} onClick={() => handleLogin()}>
              Login
            </button>
          </div>

          <button className={`${styles.sub_heading3} text-blue css-f14 element_center bg-transparent`}>
            Forgot password ?
          </button>
        </div>
      </div>
    </main>
  );
};
