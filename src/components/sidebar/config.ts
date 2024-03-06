export interface pageRoute {
  id: number;
  name: string;
  href: string;
  imgSrc: string;
  activeImgSrc: string;
}
export const pageRoute: pageRoute[] = [
  {
    id: 1,
    name: 'Dashboard',
    href: '/Admin',
    imgSrc: '/assets/svg/sidebar/Home.svg',
    activeImgSrc: '/assets/svg/sidebar/Home_active.svg',
  },

  {
    id: 2,
    name: 'Client',
    href: '/admin/clients',
    imgSrc: '/assets/svg/sidebar/Admin.svg',
    activeImgSrc: '/assets/svg/sidebar/Admin_active.svg',
  },
  {
    id: 3,
    name: 'Inquiry Handle',
    href: '/admin/inquiry',
    imgSrc: '/assets/svg/sidebar/Calendar.svg',
    activeImgSrc: '/assets/svg/sidebar/Calender_active.svg',
  },
  {
    id: 4,
    name: 'Plans',
    href: '/admin/plans',
    imgSrc: '/assets/svg/sidebar/Plans.svg',
    activeImgSrc: '/assets/svg/sidebar/Plans_active.svg',
  },
  {
    id: 5,
    name: 'CE & PE Call',
    href: '/admin/calls',
    imgSrc: '/assets/svg/sidebar/call.svg',
    activeImgSrc: '/assets/svg/sidebar/call_active.svg',
  },
  {
    id: 6,
    name: 'Banner',
    href: '/admin/banner',
    imgSrc: '/assets/svg/sidebar/Banner.svg',
    activeImgSrc: '/assets/svg/sidebar/Banner_active.svg',
  },

  {
    id: 7,
    name: 'Offer',
    href: '/admin/offer',
    imgSrc: '/assets/svg/sidebar/Setting.svg',
    activeImgSrc: '/assets/svg/sidebar/Setting_active.svg',
  },
  //   {
  //     id: 5,
  //     name: 'Home',
  //     href: '/',
  //   },
];
