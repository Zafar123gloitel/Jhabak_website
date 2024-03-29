/* eslint-disable no-unused-vars */
export enum TokenExpiration {
  access = 10 * 60, // 10-minutes,
  refresh = 7 * 24 * 60 * 60, // 7 days
  refreshIfLessThan = 4 * 24 * 60 * 60, // 4 days
}

export enum SortType {
  ASC = 'asc',
  DESC = 'desc',
}

export enum DateFormatType {
  DASH_SEPARATED = 'DD-MM-YYYY',
  SLASH_SEPARATED = 'DD/MM/YYYY',
}

// ------------------------------------<Basic Types>-------------------------------------------
export enum RoleType {
  admin = 'admin',
  users = 'user',
}
export enum ClientStatus {
  prospects = 'prospects',
  cancel = 'cancel',
  documentProcess = 'document_process',
  finalClient = 'complete_verification',
}
export enum PlanCallType {
  dayCall = 'day_call',
  weekCall = 'week_call',
  monthCall = 'month_call',
  longTerm = 'long_term',
}

export enum OptionsType {
  open = 'open',
  hedge = 'hedge',
}
export enum ITradeType {
  equity = 'equity',
  option = 'option',
}
export enum TradingType {
  equity = 'equity',
  option = 'option',
  commodity = 'commodity',
}
export enum DurationType {
  month = 'month',
  year = 'year',
}

export enum GenderType {
  male = 'male',
  female = 'female',
  other = 'other',
}

export enum TradeType {
  intraday = 'intraday',
  options = 'options',
}
export enum BuySellType {
  buy = 'buy',
  sell = 'sell',
}
export enum OptionCallType {
  PECall = 'PE_CALL',
  CECall = 'CE_CALL',
}

export interface IUploadSchema extends Document {
  fileId: string;
  url: string;
  originalname: string;
}

export interface ICommonSchema extends Document {
  avatar: IUploadSchema | null;
  isActive: boolean;
  name: string;
  email: string;
  phone_number: string;
  password: string;
  gender?: GenderType;
  role: RoleType;
  isPasswordVerified: boolean;
  isPhoneNumberVerified: boolean;
  isEmailVerified: boolean;
  password_token: string;
}
export interface IClientData {
  name: string;
  contact: string;
  email: string;
  Aadhar: string;
  panCard: string;
  expiry: string;
  // subscription: IClientSubscripiion[];
}
export interface ITabData {
  _id: number;
  name: string;
  alt: string;
}

export interface IPlan {
  _id: number;
  start_plan: Date;
  end_plan: Date;
  plan_type: PlanCallType;
  trading_type: TradingType[];
  durations: {
    duration: number;
    duration_type: DurationType;
  };
}

export interface IUserSchema extends ICommonSchema {
  pan_number: string;
  aadhar_number: string;
  subscription: boolean;
  plans: IPlan[];
}

export const ClientData: IClientData[] = [
  {
    name: 'Yugal kishor',
    contact: '+91 7509255990',
    email: 'example@gmai.lcom',
    Aadhar: '1234567891',
    panCard: 'DQP123456',
    // subscription: [{ dayCallExp: '25', }],
    expiry: '20/06/2024',
  },
  {
    name: 'Prateek ',
    contact: '+91 7509255990',
    email: 'example@gmai.lcom',
    Aadhar: '1234567891',
    panCard: 'DQP123456',
    // subscription: [{ dayCallExp: '25', }],
    expiry: '20/06/2024',
  },
  {
    name: 'Anmol',
    contact: '+91 7509255990',
    email: 'example@gmai.lcom',
    Aadhar: '1234567891',
    panCard: 'DQP123456',
    // subscription: [{ dayCallExp: '25', }],
    expiry: '20/06/2024',
  },
  {
    name: 'Zafaryab Khan',
    contact: '+91 7509255990',
    email: 'example@gmai.lcom',
    Aadhar: '1234567891',
    panCard: 'DQP123456',
    // subscription: [{ dayCallExp: '25', }],
    expiry: '20/06/2024',
  },
];

export const tabData: ITabData[] = [
  {
    _id: 2122,
    name: 'add_client',
    alt: 'Add Client',
  },
  {
    _id: 2121,
    name: 'view_list',
    alt: 'View List',
  },
];
