export interface ISignupPayload {
  isActive: boolean;
  phone_number: null | string;
  role: string;
  name: string;
  email: string;
  isEmailSet: boolean;
  isPhoneNumberVerified: boolean;
  isEmailVerified: boolean;
  isPasswordVerified: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
  avatar: CardImage | null;
}

export interface CardImage {
  fileId: string;
  url: string;
  format: string;
  resourceType: string;
  originalname: string;
  filename: string;
  folderName: string;
  serviceName: string;
  _id: string;
}

export interface IPayload {
  payload: ISignupPayload;
  accessToken: string;
  refreshToken: string;
  status: number;
  message: string;
  success: boolean;
}
export interface IIPayload {
  accessToken: string;
  refreshToken: string;
}

export const industryTypeOptions = [
  { label: 'Select Corporate Type*', value: '' },
  { label: 'School', value: 'school' },
  { label: 'College', value: 'college' },
  { label: 'Society', value: 'society' },
  { label: 'Enterprise', value: 'enterprise' },
  { label: 'Government', value: 'government' },
  { label: 'Healthcare', value: 'healthcare' },
];
