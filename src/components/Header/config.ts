export interface pageRoute {
  id: number;
  name: string;
  href: string;
}
export const pageRoute: pageRoute[] = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },

  {
    id: 2,
    name: 'About',
    href: '/about',
  },
  {
    id: 3,
    name: 'Services',
    href: '/Services',
  },
  {
    id: 4,
    name: 'Contact Us',
    href: '/Contact Us',
  },
  {
    id: 5,
    name: 'Login',
    href: '/Login',
  },
  //   {
  //     id: 5,
  //     name: 'Home',
  //     href: '/',
  //   },
];
