export interface ISubMenu {
  _id: string;
  name: string;
  href: string;
  imgSrc: string;
  activeImgSrc: string;
}
export interface pageRoute {
  id: number;
  name: string;
  href: string;
  imgSrc: string;
  activeImgSrc: string;
  subMenu: ISubMenu[];
}
export const pageRoute: pageRoute[] = [
  {
    id: 1,
    name: 'Dashboard',
    href: '/Admin',
    imgSrc: '/assets/svg/sidebar/Home.svg',
    activeImgSrc: '/assets/svg/sidebar/Home_active.svg',
    subMenu: [],
  },

  {
    id: 2,
    name: 'Client',
    href: '/admin/clients',
    imgSrc: '/assets/svg/sidebar/Admin.svg',
    activeImgSrc: '/assets/svg/sidebar/Admin_active.svg',
    subMenu: [],
  },
  {
    id: 3,
    name: 'Inquiry Handle',
    href: '/admin/inquiry',
    imgSrc: '/assets/svg/sidebar/Calendar.svg',
    activeImgSrc: '/assets/svg/sidebar/Calender_active.svg',
    subMenu: [],
  },

  {
    id: 4,
    name: 'CE & PE Call',
    href: '/admin/calls',
    imgSrc: '/assets/svg/sidebar/call.svg',
    activeImgSrc: '/assets/svg/sidebar/call_active.svg',
    subMenu: [],
  },
  {
    id: 5,
    name: 'Trading History',
    imgSrc: '/assets/svg/sidebar/history.svg',
    activeImgSrc: '/assets/svg/sidebar/history_active.svg',
    href: '/admin/equity',
    subMenu: [
      {
        _id: 'Equity Trading',
        name: 'Equity Trading',
        href: '/admin/equity',
        imgSrc: '/assets/svg/sidebar/history.svg',
        activeImgSrc: '/assets/svg/sidebar/history_active.svg',
      },
      {
        _id: 'Option Trading',
        name: 'Option Trading',
        href: '/admin/trading_history/option',
        imgSrc: '/assets/svg/sidebar/history.svg',
        activeImgSrc: '/assets/svg/sidebar/history_active.svg',
      },
      {
        _id: 'Commodity Trading',
        name: 'Commodity Trading',
        href: '/admin',
        imgSrc: '/assets/svg/sidebar/history.svg',
        activeImgSrc: '/assets/svg/sidebar/history_active.svg',
      },
    ],
  },
  {
    id: 6,
    name: 'Banner',
    href: '/admin/banner',
    imgSrc: '/assets/svg/sidebar/Banner.svg',
    activeImgSrc: '/assets/svg/sidebar/Banner_active.svg',
    subMenu: [],
  },

  {
    id: 7,
    name: 'Offer',
    href: '/admin/offer',
    imgSrc: '/assets/svg/sidebar/Setting.svg',
    activeImgSrc: '/assets/svg/sidebar/Setting_active.svg',
    subMenu: [],
  },
  //   {
  //     id: 5,
  //     name: 'Home',
  //     href: '/',
  //   },
];
