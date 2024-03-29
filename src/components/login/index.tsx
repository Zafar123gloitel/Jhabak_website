'use client';
import React, { useState } from 'react';
import styles from './login.module.scss';
import InputField from '../InputField/InputField';
import Image from 'next/image';
import { toast } from 'react-toastify';
// import Forgotten from '@/components/Modals/ForgottenModal';
import '@/components/Loader/styles.module.scss';
import { useRouter } from 'next/navigation';
import { apiService } from '@/utils';
import { validateEmail, validateIndianPhoneNumber, validatePassword, validateEmptyString } from 'regexx';
import { useAuth, useUser } from '@/hooks';
import Forgotten from '../Modals/forgot-password/ForgottenModal';

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
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<AddressProfileState>({ email: '', password: '' });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toastId: any = React.useRef(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
        setIsLoading(true);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = await apiService.post('/login', data);
        if (response?.success && response?.status === 200) {
          const { payload, accessToken, refreshToken } = response;

          toast.success('login successfull');
          if (payload?.role === 'admin') {
            Auth({
              role: payload.role,
              accessToken: accessToken,
              refreshToken: refreshToken,
            });
            SetUser(payload);
            return router.push('/admin/clients');
          } else if (payload?.role === 'user') {
            Auth({
              role: payload.role,
              accessToken: accessToken,
              refreshToken: refreshToken,
            });
            SetUser(payload);
            return router.push('/client/dashboard');
          }
        } else {
          toast.info('you are not authorized');
          ResetAuth();
          ResetUser();
        }
      }
    } catch (error: unknown) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (error?.response?.data?.message) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return toast.error(error?.response?.data?.message);
      }

      const typeError = error as Error;
      return toast.error(typeError.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className={`${styles.login} element_center `}>
      <div className={`${styles.innr_login} element_center  css_max_screen `}>
        <div className={`${styles.login_form}`}>
          <h1 className={`${styles.heading} text-center`}>Login</h1>
          <p className="_css_content_ text-center">Glad you&rsquo;re back.</p>
          <div className={`${styles.details} element_center `}>
            <div className={`${styles.user_input}`}>
              <InputField
                type="text"
                name="email"
                placeholder="Enter Email or Phone"
                value={userDetails?.email}
                onChange={e => handleFormDataChange(e)}
                error={emailError}
              />
            </div>
            <div className={`${styles.user_input} `}>
              <InputField
                type={showPassword ? 'text' : 'password'}
                name="password"
                label=""
                placeholder="Password"
                value={userDetails?.password}
                onChange={e => handleFormDataChange(e)}
                error={passwordError}
                className={styles.password}
              />
              <button className={styles.show_pswd} onClick={() => setShowPassword(!showPassword)}>
                <Image
                  src={showPassword ? '/assets/svg/open_eye.svg' : '/assets/svg/closed_eye.svg'}
                  width={20}
                  height={20}
                  alt="show Password"
                />
              </button>
            </div>

            <button className={`${styles.login_btn} Dark_button text-blue css-f20 mt-2`} onClick={handleLogin}>
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </div>

          <button
            className={`${styles.sub_heading3} text-white css-f14 element_center text-center w-100 bg-transparent`}
            onClick={() => setShow(true)}
          >
            Forgot password ?
          </button>
        </div>
      </div>
      <Forgotten show={show} onHide={() => setShow(false)} />
    </section>
  );
};
