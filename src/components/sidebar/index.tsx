'use client';
import React from 'react';
import styles from './sidebar.module.scss';
// import Image from 'next/image';
import { pageRoute } from './config';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Accordion } from 'react-bootstrap';
// import { Accordion } from 'react-bootstrap';

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
  // const redirect = (path: string) => {
  //   console.log(path, 'path');

  //   router.push(`${path}`);
  // };
  // const handleRoute = (path: string) => {
  //   router.push(path);
  // };
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

  const redirect = (value: string) => {
    router.push(value);
  };
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
        <div className={`${styles.inner_sidebar} ${styles['sidebar_container']}`}>
          <div className={`${styles.Menu_List} ${styles.inner_sidebar_container} sidebar`}>
            {/* <ul className={`${styles.Menues} `}>
              {pageRoute?.map(value => (
                <li key={value.id} className={`${styles.li_content}`}>
                  <button
                    className={`${styles.single_menu} ${styles.no_margin_padding}  bg-transparent text-white ${isToggle && styles.showSidebar} ${styles.main_content}`}
                    title={value.name}
                    onClick={() => {
                      value.subMenu && handleRoute(value.href as string);
                    }}
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
            </ul> */}

            <Accordion defaultActiveKey="" className={styles.filter}>
              {pageRoute?.map(item => {
                return (
                  <div key={item?.id} className={styles.single_sidebar}>
                    {/* <button onClick={() => redirect(item?.href)} className={`bg-transparent ${styles.outer_btn}`}> */}
                    {item.subMenu.length > 0 ? (
                      <Accordion.Item eventKey={item.name} className={styles.filterItem} key={item?.id}>
                        <Accordion.Header className={`${styles.filterHeading} ${isToggle && 'hide_arrow'}`}>
                          <button
                            key={item.href}
                            className={`${styles.href_button} ${isActiveLink(pathname, item.href as string) ? item.activeImgSrc : item.imgSrc}`}
                          >
                            <Image src={item.imgSrc} alt="item.name" width={25} height={25} />
                            <strong className={isActiveLink(pathname, item.href as string) && 'text-black'}>
                              {item.name}
                            </strong>
                          </button>
                        </Accordion.Header>
                        <Accordion.Body className={styles.filterAccordian}>
                          {item.subMenu?.map(item => {
                            return (
                              <>
                                <button
                                  onClick={() => redirect(item?.href)}
                                  key={item.href}
                                  className={styles.href_button}
                                >
                                  <Image src={item.imgSrc} alt="value" width={20} height={20} />
                                  <strong className={isActiveLink(pathname, item.href as string) && 'text-black'}>
                                    {item.name}
                                  </strong>
                                </button>
                              </>
                            );
                          })}
                        </Accordion.Body>
                      </Accordion.Item>
                    ) : (
                      <Accordion.Item eventKey={item.name}>
                        <button
                          onClick={() => redirect(item?.href as string)}
                          key={item.href}
                          className={styles.href_button}
                        >
                          <Image src={item.imgSrc} alt="value" width={25} height={25} />
                          <strong className={isActiveLink(pathname, item.href as string) && 'text-black'}>
                            {item.name}
                          </strong>
                        </button>
                      </Accordion.Item>
                    )}
                    {/* </button> */}
                  </div>
                );
              })}
            </Accordion>
          </div>
        </div>
      </nav>
    </>
  );
};
