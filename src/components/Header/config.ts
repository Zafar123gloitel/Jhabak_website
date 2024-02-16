export interface pageRoute {
  id: number;
  name: string;
  href: string;
}
export const pageRoute: pageRoute[] = [
  {
    id: 11111,
    name: 'Home',
    href: '/',
  },

  {
    id: 11112,
    name: 'About',
    href: '/about',
  },
  {
    id: 11113,
    name: 'Services',
    href: '/services',
  },
  {
    id: 11114,
    name: 'Contact Us',
    href: '/contact',
  },
  {
    id: 11115,
    name: 'Login',
    href: '/login',
  },
  //   {
  //     id: 5,
  //     name: 'Home',
  //     href: '/',
  //   },
];
