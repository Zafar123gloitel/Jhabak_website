export interface ISignupPayload {
  isActive: boolean;
  phone_number: null | string;
  role: string;
  name: string;
  email: string;
  pan_number: string;
  aadhar_number: string;
  subscription: string;
  isEmailSet: boolean;
  isPhoneNumberVerified: boolean;
  isEmailVerified: boolean;
  isPasswordVerified: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
  avatar: CardImage | null;
}
// export interface ITradeingType{

// }
export interface IPlans {
  start_plan: Date;
  end_plan: Date;
  plan_type: string;
  trading_type: string[];
  durations: {
    duration: number;
    duration_type: string;
  };
  _id;
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
