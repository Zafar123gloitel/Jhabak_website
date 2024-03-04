export const DECIMAL_NUMBER_REGEX = /^(\d+\.?\d*|\.\d+)$/;

export const ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;

export const PHONE_REGEX = /^\+91[1-9]\d{9}$/;

export const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export const PASSWORD_REGEX =
  /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;

export const DOB_REGEX = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;

export const emailRegex = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};

export const passwordRegex = (password: string): boolean => {
  return PASSWORD_REGEX.test(password);
};

export const dobRegex = (dob: string): boolean => {
  return DOB_REGEX.test(dob);
};

export const contactRegex = (contactNumber: string, phoneRegex = /^\d{10}$/): boolean => {
  return phoneRegex.test(contactNumber);
};

export function isValidContactNumber(PhoneNumber: string, countryCode = '+91', regex = /^\d{10}$/): boolean {
  const test = PhoneNumber?.split(countryCode)[1];
  return regex.test(test);
}

export function checkPasswordStrength(password: string): string {
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{12,}$/; // Password must be at least 12 characters long and contain a lowercase letter, an lowercase letter, a digit, and a special character
  const poorRegex = /^(?=.*[a-z])(?=.*\d).{8,}$/; // Password must be at least 8 characters long and contain a lowercase letter and a digit
  const weakRegex = /^(?=.*[a-z]).{6,}$/; // Password must be at least 6 characters long and contain a lowercase letter

  if (strongRegex.test(password)) {
    return 'password is strong';
  } else if (poorRegex.test(password)) {
    return 'password is poor';
  } else if (weakRegex.test(password)) {
    return 'password is weak';
  } else {
    return 'password is invalid';
  }
}

export const isNumberic = (val: string): boolean => {
  return val.includes('0-9');
};

export const isDecimalNumberic = (val: string): boolean => {
  return DECIMAL_NUMBER_REGEX.test(val);
};

export const isAddress = (val: string): boolean => {
  return new RegExp(ADDRESS_REGEX).test(val);
};

export const getCurrentUTCTime = (date = new Date()): string => {
  return date.toISOString().replace('T', ' ').replace(/\..*$/, ' UTC');
};

function requied(val: string): boolean {
  return !(val.length === 0 || typeof val === 'undefined' || (typeof val === 'string' && val.trim().length === 0));
}

export function userName(val: string, { min = 6, max = 32 }: { min: number; max: number }): boolean {
  const regex = new RegExp(`^(?=.{${min},${max}}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$`);
  return !!(requied(val) && regex.test(val));
}

export function email(val: string): boolean {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !!(requied(val) && regex.test(val));
}

export function link(val: string): boolean {
  const regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  return !!(requied(val) && regex.test(val));
}
