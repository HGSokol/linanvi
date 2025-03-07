import { FC } from "react";
import { ICarData } from "../../sections/products";
import CarSliderCard from "../car-slider-card";

import styles from "./styles/index.module.scss";

interface IStepsInfoCard {
  carData: ICarData[];
  step: number;
}

const Slider: FC<IStepsInfoCard> = ({ carData, step }) => {
  return (
    <div className={styles.stepsInfoCardWrapper}>
      <div
        className={styles.sliderWrapper}
        style={{ translate: `-${step * (375 + 40)}px` }}
      >
        {carData.map((e, i) => (
          <CarSliderCard
            key={`${e.model}-${e.price}-${i}`}
            img={e.img}
            model={e.model}
            price={e.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
