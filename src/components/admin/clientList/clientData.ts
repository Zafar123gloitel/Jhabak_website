// export interface IClientSubscripiion {
//   dayCallExp: string;
//   weekCallExp: string;
//   monthCallExp: string;
//   yearCallExp: string;
//   CallExp: string;
//   weekCallExp: string;
//   monthCallExp: string;
//   yearCallExp: string;
// }
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
    name: 'create_client',
    alt: 'Create Client',
  },
  {
    _id: 2121,
    name: 'client_list',
    alt: 'Client List',
  },
];
