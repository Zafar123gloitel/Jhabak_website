export interface IClientData {
  name: string;
  contact: string;
  subscription: string;
  expiry: string;
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
    subscription: 'Day Call',
    expiry: '20/06/2024',
  },
  {
    name: 'Prateek ',
    contact: '+91 7809255990',
    subscription: 'Day Call',
    expiry: '20/06/2024',
  },
  {
    name: 'Anmol',
    contact: '+91 7509255890',
    subscription: 'Day Call',
    expiry: '20/06/2024',
  },
  {
    name: 'Zafaryab Khan',
    contact: '+91 7509255690',
    subscription: 'Day Call',
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
