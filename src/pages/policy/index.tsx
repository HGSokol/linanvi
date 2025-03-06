import { Link } from "react-router-dom";
import Header from "../../sections/header";

import styles from "./styles/index.module.scss";

const PolicyPage = () => {
  return (
    <div className={styles.policyWrapper}>
      <Header alt />
      <div className={styles.policy}>
        <div className={styles.breadcrumbs}>
          <Link to="/">Home page</Link>
          <div>/ Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
