export interface pageRoute {
  id: number;
  name: string;
  // email: string;
  // phone: number;
  // date: string;
  // message: string;
  href: string;
}
export const pageRoute: pageRoute[] = [
  {
    id: 1,
    name: 'Fullname',
    href: '/Fullname',
  },

  // {
  //   id: 2,
  //   name: 'Email',
  //   href: '/Email',
  // },
  // {
  //   id: 3,
  //   name: 'Phonenumber',
  //   href: '/',
  // },
  // {
  //   id: 4,
  //   name: 'Date',
  //   href: '/Date ',
  // },

  // {
  //   id: 5,
  //   name: 'Home',
  //   href: '/',
  // },
];
