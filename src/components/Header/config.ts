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
    name: 'Products',
    href: '/products',
  },
  {
    id: 4,
    name: 'Career',
    href: '/career',
  },
  {
    id: 5,
    name: 'Contact',
    href: '/contact',
  },
  //   {
  //     id: 5,
  //     name: 'Home',
  //     href: '/',
  //   },
];
