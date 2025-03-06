import { useState } from "react";
import Slider from "../../components/slider";
import ArrowIcon from "../../assets/icons/arrow-icon";

import phoneImg from "../../assets/images/phone.png";
import mailImg from "../../assets/images/mail.png";
import car1 from "../../assets/images/car-1.webp";

import styles from "./styles/index.module.scss";

export interface ICarData {
  img: string;
  model: string;
  price: string;
}
const carData: ICarData[] = [
  {
    img: car1,
    model: "Mercedes Benz V-class 300D",
    price: "115 000€",
  },
  {
    img: car1,
    model: "Audi Q7 55 TDI",
    price: "77 000€",
  },
  {
    img: car1,
    model: "Mercedes Benz G63 AMG",
    price: "215 000 €",
  },
  {
    img: car1,
    model: "Mercedes Benz V-class 300D",
    price: "110 000 €",
  },
  {
    img: car1,
    model: "Mercedes Benz G63 AMG",
    price: "218 000 €",
  },
  {
    img: car1,
    model: "Mercedes Benz V-class 300D",
    price: "115 000 €",
  },
  {
    img: car1,
    model: "Porsche cayenne coupe",
    price: "117 000 €",
  },
  {
    img: car1,
    model: "BMW X5 40I",
    price: "89 000 €",
  },
  {
    img: car1,
    model: "BMW X5 40d",
    price: "95 000 €",
  },
  {
    img: car1,
    model: "Mercedes Benz GLS 450 ",
    price: "140 000 €",
  },
  {
    img: car1,
    model: "Mercedes Benz GLE 53 coupe",
    price: "153 000 €",
  },
  {
    img: car1,
    model: "Bentley gt",
    price: "350 000 €",
  },
  {
    img: car1,
    model: "Mercedes Benz cle-coupe 300",
    price: "70 000 €",
  },
  {
    img: car1,
    model: "Porsche panamera 4",
    price: "127 000 €",
  },
  {
    img: car1,
    model: "Mercedes Benz g-63 AMG ",
    price: "218 000 €",
  },
  {
    img: car1,
    model: "Mercedes Benz cle 300 coupe",
    price: "68 000 €",
  },
  {
    img: car1,
    model: "Mercedes Benz G63 AMG",
    price: "220 000 €",
  },
  {
    img: car1,
    model: "Range Rover autobiography",
    price: "140 000 €",
  },
  {
    img: car1,
    model: "Mercedes Benz S-class 580",
    price: "150 000 €",
  },
  {
    img: car1,
    model: "Mercedes Benz GLE 450",
    price: "95 000 €",
  },
  {
    img: car1,
    model: "Mercedes Benz m5 g90",
    price: "130 000 €",
  },
  {
    img: car1,
    model: "Porsche cayenne coupe ",
    price: "110.00€",
  },
  {
    img: car1,
    model: "BMW m5 g90",
    price: "130.000€",
  },
];

const Products = () => {
  const [step, setStep] = useState(0);

  const handleClickPrev = () => {
    if (step >= 1) {
      setStep((prev) => prev - 1);
    }
  };
  const handleClickNext = () => {
    const stopNext = step + 3 < carData.length;
    if (stopNext) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.productsContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.titleWrapper}>
          <span>Our products</span>
          <span>Exclusive Vehicles</span>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.leftButton} onClick={handleClickPrev}>
            <ArrowIcon />
          </div>
          <div className={styles.rightButton} onClick={handleClickNext}>
            <ArrowIcon color="#fff" />
          </div>
        </div>
      </div>
      <Slider carData={carData} step={step} />
      <div className={styles.infoWrapper}>
        <span className={styles.infoTitle}>
          Ready to find your perfect car? Contact us now!
        </span>
        <div className={styles.infoBlock}>
          <a href="tel:+48 537 834 647" className={styles.info}>
            <div style={{ backgroundImage: `url(${phoneImg})` }}></div>
            <span>+48 537 834 647</span>
          </a>
          <a href="malito:linanvi.01@gmail.com" className={styles.info}>
            <div style={{ backgroundImage: `url(${mailImg})` }}></div>
            <span>linanvi.01@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
