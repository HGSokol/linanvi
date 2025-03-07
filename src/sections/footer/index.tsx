import styles from "./styles/index.module.scss";

const Footer = () => {
  return (
    <div id="Footer" className={styles.footerContainer}>
      <div className={styles.info}>
        <div className={styles.logo}>LINANVI</div>
        <div className={styles.infoBlockContainer}>
          <div className={styles.infoBlock}>
            <div>Info</div>
            <div>
              <a href="#Header">Company</a>
              <a href="#Benefits">Benefits</a>
              <a href="#Products">Products</a>
              <a href="#Steps">How it Works</a>
              <a href="#Contacts">Contact</a>
            </div>
          </div>
          <div className={styles.infoBlock}>
            <div>Contact us</div>
            <div>
              <a href="tel:+48537834647">+48 537 834 647</a>
              <a href="malito:linanvi.01@gmail.com">linanvi.01@gmail.com</a>
              <div>ul. Ruskowy Brod 30L lok.2</div>
              <div>03-289, Warszawa</div>
            </div>
          </div>
          <div className={styles.infoBlock}>
            <div>Find us</div>
            <div>
              <div>LINANVI Sp.z o.o</div>
              <div>NIP: 5243023601</div>
              <div>REGON: 540254685</div>
              <div>EORI: PL524302360100000</div>
              <div>VAT: PL5243023601</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <div>© 2025</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
