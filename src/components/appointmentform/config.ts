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
    name: 'firstname',
    href: '/firstname',
  },

  {
    id: 2,
    name: 'lastname',
    href: '/lastname',
  },
  {
    id: 3,
    name: 'email',
    href: '/email',
  },
  {
    id: 4,
    name: 'phonenumber',
    href: '/',
  },
  {
    id: 5,
    name: 'date',
    href: '/date ',
  },
  {
    id: 5,
    name: 'message',
    href: '/message ',
  },

  // {
  //   id: 5,
  //   name: 'Home',
  //   href: '/',
  // },
];
