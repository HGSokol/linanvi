import StepsInfoCard from "../../components/steps-info-card";

import step1 from "../../assets/images/step1.webp";
import step2 from "../../assets/images/step2.webp";
import step3 from "../../assets/images/step3.webp";
import step4 from "../../assets/images/step4.webp";
import step5 from "../../assets/images/step5.webp";
import step6 from "../../assets/images/step6.webp";

import styles from "./styles/index.module.scss";

const stepData = [
  {
    stepOrder: 1,
    title: "Submit your request",
    description: "Tell us the specifications of the car you're looking for",
    img: step1,
  },
  {
    stepOrder: 2,
    title: "We find the options",
    description: "We offer you the best and most exclusive deals on the market",
    img: step2,
  },
  {
    stepOrder: 3,
    title: "We sign the contract",
    description: "Finalize the terms and begin the paperwork",
    img: step3,
  },
  {
    stepOrder: 4,
    title: "You make the payment",
    description: "Complete transparency throughout every step of the proces",
    img: step4,
  },
  {
    stepOrder: 5,
    title: "We organize the delivery",
    description: "The car will be delivered to a location that suits you",
    img: step5,
  },
  {
    title:
      "The entire process takes from 3 to 14 days, depending on car availability",
    img: step6,
  },
];

const Steps = () => {
  return (
    <div id="Steps" className={styles.stepsContainer}>
      <div className={styles.stepsInfo}>
        <div>
          <span>How it Works</span>
          <span>Few Easy Steps</span>
        </div>
        <span>
          Just a few simple steps – and your car is on its way! Choose, order,
          and receive your premium vehicle with Linanvi quickly and hassle-free.
        </span>
      </div>
      <div className={styles.stepsBlock}>
        {stepData.map((e, i) => (
          <StepsInfoCard
            key={i}
            stepOrder={e.stepOrder}
            title={e.title}
            description={e.description}
            img={e.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Steps;
