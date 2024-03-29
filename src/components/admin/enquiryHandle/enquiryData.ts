export interface IEnquiryData {
  name: string;
  contact: string;
  email: string;
  message: string;
}

export interface IClientStatus {
  prospects: string;
  cancel: string;
  documentProcess: string;
  finalClient: string;
}
export interface IAppoitment extends Document {
  name: string;
  email: string;
  phone_number: string;
  client_status: string;
  _id: number;
}
export interface IContactUs extends Document {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  message: string;
  _id: number;
}
export const EnquiryData: IEnquiryData[] = [
  {
    name: 'Yugal kishor',
    contact: '+91 7509255990',
    email: 'Day Call',
    message: '20/06/2024',
  },
  {
    name: 'Prateek ',
    contact: '+91 7809255990',
    email: 'Day Call',
    message: '20/06/2024',
  },
  {
    name: 'Anmol',
    contact: '+91 7509255890',
    email: 'Day Call',
    message: '20/06/2024',
  },
  {
    name: 'Zafaryab Khan',
    contact: '+91 7509255690',
    email: 'Day Call',
    message: '20/06/2024',
  },
];
