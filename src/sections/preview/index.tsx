import { useEffect, useState } from "react";
import Header from "../header";
import FormLayout from "../../components/form-layout";

import styles from "./styles/index.module.scss";

const Preview = () => {
  const [activePopup, setActivePopup] = useState(false);

  useEffect(() => {
    if (activePopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activePopup]);

  return (
    <div id="Preview" className={styles.previewContainer}>
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
          <div onClick={() => setActivePopup((prev) => !prev)}>Contact us</div>
          <a href="#Products">See Products</a>
        </div>
      </div>
      {activePopup && (
        <FormLayout closePopup={() => setActivePopup((prev) => !prev)} />
      )}
    </div>
  );
};

export default Preview;
