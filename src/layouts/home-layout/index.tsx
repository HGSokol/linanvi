import { Outlet } from "react-router-dom";
import Footer from "../../sections/footer";

import styles from "./styles/index.module.scss";

const HomeLayout = () => {
  return (
    <div className={styles.homeLayoutContainer}>
      <div className={styles.homeLayout}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
