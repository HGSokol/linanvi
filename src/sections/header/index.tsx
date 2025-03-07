import { FC, useEffect, useState } from "react";

import BurgerMenuIcon from "../../assets/icons/burger-menu-icon";
import CrossMenuIcon from "../../assets/icons/cross-meni-icon";

import styles from "./styles/index.module.scss";

interface IHeader {
  alt?: boolean;
}
const Header: FC<IHeader> = ({ alt }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeMenu]);

  return (
    <div
      id="Header"
      className={`${styles.headerContainer} ${
        activeMenu && styles.headerActive
      } ${alt && styles.headerAlt}`}
    >
      <div className={styles.logo}>LINANVI</div>
      <div
        className={`${styles.navBar} ${activeMenu && styles.navActive}`}
        onClick={(e) =>
          e.target === e.currentTarget && setActiveMenu((prev) => !prev)
        }
      >
        <ul className={`${styles.list} ${activeMenu && styles.listMenu}`}>
          <li onClick={() => setActiveMenu(false)}>
            <a href="#Header">Company</a>
          </li>
          <li onClick={() => setActiveMenu(false)}>
            <a href="#Benefits">Benefits</a>
          </li>
          <li onClick={() => setActiveMenu(false)}>
            <a href="#Products">Products</a>
          </li>
          <li onClick={() => setActiveMenu(false)}>
            <a href="#Steps">How it Works</a>
          </li>
          <li onClick={() => setActiveMenu(false)}>
            <a href="#Contacts">Contact</a>
          </li>
        </ul>
      </div>
      <div
        className={styles.burgerMenu}
        onClick={() => setActiveMenu((prev) => !prev)}
      >
        {activeMenu ? <CrossMenuIcon /> : <BurgerMenuIcon />}
      </div>
    </div>
  );
};

export default Header;
