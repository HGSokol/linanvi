import { FC, useState } from "react";

import CrossMenuIcon from "../../assets/icons/cross-meni-icon";

import styles from "./styles/index.module.scss";
import Form from "../form";

interface IFormlayout {
  closePopup: () => void;
}

const FormLayout: FC<IFormlayout> = ({ closePopup }) => {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div
      className={styles.formLayoutWrapper}
      onClick={(e) => e.target === e.currentTarget && closePopup()}
    >
      <div className={styles.formLayout}>
        <div className={styles.infoTitle}>
          {isSubmit ? (
            <>
              <span>Our contacts</span>
              <span>Contact us now!</span>
              <span>
                Linanvi is a company specializing in the selection, purchase,
                and sale of premium-class vehicles.
              </span>
            </>
          ) : (
            <>
              <span>Our contacts</span>
              <span>Contact us now!</span>
              <span>
                Linanvi is a company specializing in the selection, purchase,
                and sale of premium-class vehicles.
              </span>
            </>
          )}
        </div>
        {!isSubmit && <Form isSubmit={setIsSubmit} />}
        <div className={styles.cross} onClick={closePopup}>
          <CrossMenuIcon color="#040815" />
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
