interface LoginErrors {
  email?: string;
  password?: string;
}

const LoginValidation = (values: { email: string; password: string }): LoginErrors => {
  const errors: LoginErrors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

  if (!values.email) {
    errors.email = 'Email is required!';
  } else if (!regex.test(values.email)) {
    errors.email = 'This is not a valid email format!';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 4) {
    errors.password = 'Password must be more than 4 characters';
  } else if (values.password.length > 10) {
    errors.password = 'Password cannot exceed more than 10 characters';
  }

  return errors;
};

export default LoginValidation;
