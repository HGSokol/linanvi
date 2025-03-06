import { FC } from "react";
import { IAboutCard } from "../../sections/about";

import styles from "./styles/index.module.scss";

const AboutCard: FC<IAboutCard> = ({ title, description, list, img }) => {
  return (
    <div className={styles.stepsInfoCardWrapper}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.infoBlock}>
        <span className={styles.titleInfo}>{title}</span>
        {description && (
          <span className={styles.descriptionInfo}>{description}</span>
        )}
        {list && (
          <div className={styles.listInfo}>
            {list.map((e, i) => (
              <span key={i}>{`✔ ${e}`}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
