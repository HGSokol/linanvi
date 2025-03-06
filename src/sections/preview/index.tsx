import Header from "../header";
import styles from "./styles/index.module.scss";

const Preview = () => {
  return (
    <div className={styles.previewContainer}>
      <Header />
      <div className={styles.preview}>
        <h1 className={styles.titlePage}>
          Premium car selection and sales in Europe.
        </h1>
        <h3 className={styles.descriptionPage}>
          Exclusive cars by order and in stock. Logistics, financing, and
          selection based on individual requests.
        </h3>
        <div className={styles.buttonsWrapper}>
          <div>Contact us</div>
          <div>See Products</div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
