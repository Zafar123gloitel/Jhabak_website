'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { apiService } from '@/utils';
import styles from './reset-password.module.scss';
import { toast } from 'react-toastify';
import validation from '@/services/validation';
import useLoading from '@/components/Loader/Loader';

const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { isLoading, startLoading, stopLoading } = useLoading();
  const path = usePathname();
  const router = useRouter();
  const userID = path.slice(16);

  const validatePassword = () => {
    if (password === '') {
      toast.error('password is require');
      return false;
    }
    if (!validation.password(password)) {
      toast.error('Invalid password format');
      return false;
    }
    return true;
  };

  const validateConfirmPassword = () => {
    if (confirmPassword === '') {
      toast.error('Confirm password is require');
      return false;
    }
    if (password !== confirmPassword) {
      toast.error('password confirm password should be same');
      return false;
    }

    if (!validation.password(confirmPassword)) {
      toast.error('Invalid password format');
      return false;
    }

    return true;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = async (e: any) => {
    e.preventDefault();
    startLoading();

    try {
      const isPasswordValid = validatePassword();
      const isConfirmPasswordValid = validateConfirmPassword();
      const data = {
        password: password,
        confirm_password: confirmPassword,
      };
      if (isPasswordValid && isConfirmPasswordValid) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = await apiService.post(`/reset-password/${userID}`, data);
        if (response.success && response.status === 200) {
          toast.success('Your Password is Reset Successfully');
          router.push('/login');
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
  return (
    <div
      style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}
      className={`${styles.main_reset} element_center`}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        className={`${styles.reset_form}`}
        onSubmit={handleLogin}
      >
        <label style={{ marginBottom: '5px' }} htmlFor="password">
          Password:
        </label>
        <input
          style={{ padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <label style={{ marginBottom: '5px' }} htmlFor="confirm-password">
          Confirm Password:
        </label>
        <input
          style={{ padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          type="password"
          id="confirm-password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <button
          style={{
            padding: '10px',
            backgroundColor: '#00b666',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          type="submit"
        >
          {isLoading ? 'loading' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
