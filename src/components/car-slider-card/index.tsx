import { FC } from "react";
import styles from "./styles/index.module.scss";

interface ICarData {
  img: string;
  model: string;
  price: string;
}

const CarSliderCard: FC<ICarData> = ({ img, model, price }) => {
  return (
    <div className={styles.carCardWrapper}>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={styles.backgroundImage}
      ></div>
      <div className={styles.info}>
        <span>{model}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default CarSliderCard;
