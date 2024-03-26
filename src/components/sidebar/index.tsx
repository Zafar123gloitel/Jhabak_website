'use client';
import React from 'react';
import styles from './sidebar.module.scss';
// import Image from 'next/image';
import { pageRoute } from './config';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

interface IProps {
  isToggle: boolean;
  setIsToggle: () => void;
}
export const Sidebar = ({ isToggle, setIsToggle }: IProps) => {
  // const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  // const toggle = useAppSelector(selectToggle);

  // const dispatch = useAppDispatch();

  const handleRoute = (path: string) => {
    router.push(path);
  };
  const isActiveLink = (location: string, path: string) => {
    if (path === location) {
      return true;
    }
  };
  function handleToggle() {
    // setOpenSidebar(!openSidebar);
    setIsToggle();
    // dispatch(setToggle_());
  }

  return (
    <>
      <button className={styles.menu_dropdown_button} type="button" onClick={handleToggle}>
        <Image
          className={styles.icon}
          src={isToggle ? '/assets/svg/hamburger.svg' : '/assets/svg/sidebar/Close.svg'}
          alt="Home"
          width={17}
          height={17}
        />
      </button>
      <nav className={`${styles.main_sidebar} ${isToggle && styles.show_sidebar}`}>
        <div className={`${styles.inner_sidebar} `}>
          <div className={`${styles.sidebar_top} `}>
            <div className={styles.menu_dropdown}></div>
          </div>
          <div className={`${styles.Menu_List} `}>
            <ul className={`${styles.Menues} `}>
              {pageRoute?.map(value => (
                <li key={value.id} className={`${styles.li_content}`}>
                  <button
                    className={`${styles.single_menu} ${styles.no_margin_padding}  bg-transparent text-white ${isToggle && styles.showSidebar} ${styles.main_content}`}
                    title={value.name}
                    onClick={() => handleRoute(value.href as string)}
                  >
                    <Image
                      className={styles.icon}
                      alt="Home"
                      width={25}
                      height={25}
                      src={isActiveLink(pathname, value.href as string) ? `${value.activeImgSrc}` : `${value.imgSrc}`}
                    />
                    <strong className={isActiveLink(pathname, value.href as string) && 'text-black'}>
                      {value.name}
                    </strong>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
