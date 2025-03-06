import { FC, useEffect, useState } from "react";

import styles from "./styles/index.module.scss";
import BurgerMenuIcon from "../../assets/icons/burger-menu-icon";
import CrossMenuIcon from "../../assets/icons/cross-meni-icon";
import FormLayout from "../../components/form-layout";

interface IHeader {
  alt?: boolean;
}
const Header: FC<IHeader> = ({ alt }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activePopup, setActivePopup] = useState(false);

  useEffect(() => {
    if (activeMenu || activePopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeMenu, activePopup]);

  return (
    <div
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
          <li>
            <a>Company</a>
          </li>
          <li>
            <a>Benefits</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>How it Works</a>
          </li>
          <li onClick={() => setActivePopup((prev) => !prev)}>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div
        className={styles.burgerMenu}
        onClick={() => setActiveMenu((prev) => !prev)}
      >
        {activeMenu ? <CrossMenuIcon /> : <BurgerMenuIcon />}
      </div>
      {activePopup && (
        <FormLayout closePopup={() => setActivePopup((prev) => !prev)} />
      )}
    </div>
  );
};

export default Header;
