import { useState } from "react";
import Slider from "../../components/slider";
import ArrowIcon from "../../assets/icons/arrow-icon";

import phoneImg from "../../assets/images/phone.png";
import mailImg from "../../assets/images/mail.png";

import car1 from "../../assets/images/car1.webp";
import car2 from "../../assets/images/car2.webp";
import car3 from "../../assets/images/car3.webp";
import car4 from "../../assets/images/car4.webp";
import car5 from "../../assets/images/car5.webp";
import car6 from "../../assets/images/car6.webp";
import car7 from "../../assets/images/car7.webp";
import car8 from "../../assets/images/car8.webp";
import car9 from "../../assets/images/car9.webp";
import car10 from "../../assets/images/car10.webp";
import car11 from "../../assets/images/car11.webp";
import car12 from "../../assets/images/car12.webp";
import car13 from "../../assets/images/car13.webp";
import car14 from "../../assets/images/car14.webp";
import car15 from "../../assets/images/car15.webp";
import car16 from "../../assets/images/car16.webp";
import car17 from "../../assets/images/car17.webp";
import car18 from "../../assets/images/car18.webp";
import car19 from "../../assets/images/car19.webp";
import car20 from "../../assets/images/car20.webp";
import car21 from "../../assets/images/car21.webp";
import car22 from "../../assets/images/car22.webp";

import styles from "./styles/index.module.scss";

export interface ICarData {
  img: string;
  model: string;
  price: string;
}
const carData: ICarData[] = [
  {
    img: car1,
    model: "Mercedes-Benz V-Class 300d",
    price: "115 000 €",
  },
  {
    img: car2,
    model: "Audi Q7 55 TDI",
    price: "77 000 €",
  },
  {
    img: car3,
    model: "Mercedes Benz G63 AMG",
    price: "215 000 €",
  },
  {
    img: car4,
    model: "Mercedes-Benz V-Class 300d",
    price: "110 000 €",
  },
  {
    img: car5,
    model: "Mercedes Benz G63 AMG",
    price: "218 000 €",
  },
  {
    img: car6,
    model: "Mercedes-Benz V-Class 300d",
    price: "115 000 €",
  },
  {
    img: car7,
    model: "Porsche cayenne coupe",
    price: "117 000 €",
  },
  {
    img: car8,
    model: "BMW X5 40I",
    price: "89 000 €",
  },
  {
    img: car9,
    model: "BMW X5 40d",
    price: "95 000 €",
  },
  {
    img: car10,
    model: "Mercedes Benz GLS 450",
    price: "140 000 €",
  },
  {
    img: car11,
    model: "Mercedes Benz GLE 53 coupe",
    price: "153 000 €",
  },
  {
    img: car12,
    model: "Bentley gt",
    price: "350 000 €",
  },
  {
    img: car13,
    model: "Mercedes Benz cle-coupe 300",
    price: "70 000 €",
  },
  {
    img: car14,
    model: "Porsche panamera 4",
    price: "127 000 €",
  },
  {
    img: car15,
    model: "Mercedes Benz g-63 AMG",
    price: "218 000 €",
  },
  {
    img: car16,
    model: "Mercedes Benz cle 300 coupe",
    price: "68 000 €",
  },
  {
    img: car17,
    model: "Mercedes Benz G63 AMG",
    price: "220 000 €",
  },
  {
    img: car18,
    model: "Range Rover Autobiography",
    price: "140 000 €",
  },
  {
    img: car19,
    model: "Mercedes Benz S-class 580",
    price: "150 000 €",
  },
  {
    img: car20,
    model: "Mercedes Benz GLE 450",
    price: "95 000 €",
  },
  {
    img: car21,
    model: "Porsche Cayenne Coupe",
    price: "110 000 €",
  },
  {
    img: car22,
    model: "BMW M5 G90",
    price: "130 000 €",
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
