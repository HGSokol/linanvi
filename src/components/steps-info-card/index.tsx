import { FC } from "react";
import styles from "./styles/index.module.scss";

interface IStepsInfoCard {
  stepOrder?: number | null;
  title: string;
  description?: string;
  img: string;
}

const StepsInfoCard: FC<IStepsInfoCard> = ({
  stepOrder,
  title,
  description,
  img,
}) => {
  return (
    <div className={styles.stepsInfoCardWrapper}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${img})` }}
      >
        {stepOrder && <div className={styles.step}>{`step ${stepOrder}`}</div>}
      </div>
      <div className={styles.infoBlock}>
        <span className={styles.titleInfo}>{title}</span>
        {description && <span className={styles.titleInfo}>{description}</span>}
      </div>
    </div>
  );
};

export default StepsInfoCard;
