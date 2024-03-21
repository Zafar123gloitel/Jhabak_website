import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
// import <InputField></InputField> from '../InputField/InputField';
import InputField from '@/components/InputField/InputField';
import { toast } from 'react-toastify';
import Image from 'next/image';
import validation from '@/services/validation';
import styles from './styles.module.scss';
import useLoading from '@/components/Loader/Loader';
import { apiService } from '@/utils/index';

interface LoginModalModalProps {
  onHide: () => void;
  show: boolean;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
const Forgotten = (props: LoginModalModalProps): React.JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toastId: any = React.useRef(null);
  const { isLoading, startLoading, stopLoading } = useLoading();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
      return false;
    }
    if (!validation.email(email)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };

  // here we are set the value of email
  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const rule = /\s{1,}/g;
    const valueData = value.split(rule).join(' ');

    if (value.startsWith(' ')) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error('SPACE_NOT_ALLOW');
      }
    } else {
      setEmail(valueData);
    }
  };

  //here we are write login functionality
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const isEmailValid = validateEmail();
      let data: Record<string, string> = {};
      if (validation.email(email)) {
        data = {
          email: email,
        };
      } else {
        data = {
          contact: email,
        };
      }
      if (isEmailValid) {
        startLoading();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = await apiService.post('/forgot-password', data);
        if (response.success && response.status === 200) {
          toast.success('check your email');
          setEmail('');
          props.onHide();
        } else {
          return toast.error(response?.data?.message);
        }
      }
    } catch (error) {
      const typeError = error as Error;
      return toast.error(typeError.message);
    } finally {
      stopLoading();
    }
  };
  //here we are chaecking the OTP length

  //this is here we are closeing the entire modal
  const handleClose = () => {
    setEmail('');
    props.onHide();
  };

  return (
    <Modal
      show={props.show}
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${styles['forgot_password_modal']}  All_content_center forgot_password_modal`}
    >
      <div className="">
        <div className={`${styles['forget_password_header_img']}`}>
          <div className={`${styles['otp_heading']}`}>
            <h4>
              <>Email Varification</>
              <p className="mt-2">Enter your email to varify your profile information.</p>
            </h4>
          </div>

          <button onClick={handleClose} className={`${styles['close_forgot_modal']}`}>
            <Image
              src="assets/svg/Close.svg"
              alt="icon"
              width={20}
              height={20}
              className={`${styles['close_forgot_modal_img']}`}
            />
          </button>
        </div>

        <div className={`${styles['forgot_password_modal_body']} `}>
          <div className={`${styles['forget_password_input_field']} _inputs_fields_ All_content_center`}>
            <InputField
              type="email"
              label="Enter your email"
              name="email"
              placeholder="example@gmail.com12"
              value={email}
              onChange={e => handleFormDataChange(e)}
              error={emailError}
              className={`${styles['forget_password_input']}`}
            />
          </div>
        </div>
        {isLoading ? (
          <button className={`${styles['sbt_btn']} Dark_button`}>wait</button>
        ) : (
          <button onClick={handleLogin} className={`${styles['sbt_btn']} Dark_button`}>
            Reset Password
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Forgotten;
