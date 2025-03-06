import Form from "../../components/form";

import phoneImg from "../../assets/images/phone.png";
import buildImg from "../../assets/images/build.png";
import mailImg from "../../assets/images/mail.png";

import styles from "./styles/index.module.scss";

const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>
          <span>Our contacts</span>
          <span>Contact us now!</span>
          <span>
            Linanvi is a company specializing in the selection, purchase, and
            sale of premium-class vehicles.
          </span>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.infoRow}>
            <div style={{ backgroundImage: `url(${phoneImg})` }}></div>
            <span>+48 537 834 647</span>
          </div>
          <div className={styles.infoRow}>
            <div style={{ backgroundImage: `url(${buildImg})` }}></div>
            <span>ul. Ruskowy Brod 30L lok.2 .03-289</span>
          </div>
          <div className={styles.infoRow}>
            <div style={{ backgroundImage: `url(${mailImg})` }}></div>
            <a href="malito:linanvi.01@gmail.com">linanvi.01@gmail.com</a>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Contacts;
