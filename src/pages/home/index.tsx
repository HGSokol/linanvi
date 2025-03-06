import Preview from "../../sections/preview";
import About from "../../sections/about";
import Benefits from "../../sections/benefits";
import Products from "../../sections/products";
import Steps from "../../sections/steps";
import Contacts from "../../sections/contacts";

import styles from "./styles/index.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homeWrapper}>
      <Preview />
      <About />
      <Benefits />
      <Products />
      <Steps />
      <Contacts />
    </div>
  );
};

export default HomePage;
