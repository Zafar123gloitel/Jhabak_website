export interface pageRoute {
  id: number;
  name: string;
  href: string;
}
export const pageRoute: pageRoute[] = [
  {
    id: 0,
    name: 'Home',
    href: '/',
  },

  {
    id: 1,
    name: 'About',
    href: '/about',
  },
  {
    id: 2,
    name: 'Products',
    href: '/products',
  },
  {
    id: 3,
    name: 'Career',
    href: '/career',
  },
  {
    id: 4,
    name: 'Contact',
    href: '/contact',
  },
  //   {
  //     id: 5,
  //     name: 'Home',
  //     href: '/',
  //   },
];
