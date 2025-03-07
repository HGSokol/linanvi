import AboutCard from "../../components/about-card";

import about1 from "../../assets/images/about1.webp";
import about2 from "../../assets/images/about2.webp";
import about3 from "../../assets/images/about3.webp";

import styles from "./styles/index.module.scss";

export interface IAboutCard {
  title: string;
  description?: string;
  list?: string[];
  img: string;
}

const aboutData: IAboutCard[] = [
  {
    title: "Who we are?",
    description:
      "We work with official dealers and trusted suppliers in Europe to offer our clients the highest quality cars on the best terms.",
    img: about1,
  },
  {
    title: "What we offer",
    list: [
      "Car selection based on your request (new and used cars)",
      "Purchase of cars from Europe with a transparent history",
      "Logistics and delivery across the EU",
    ],
    img: about2,
  },
  {
    title: "What else?",
    list: [
      "Document processing and customs support",
      "Financing and leasing consultations",
    ],
    img: about3,
  },
];

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.titlBlock}>
        <div className={styles.title}>
          <span>Why use LiNANVI</span>
          <span>About Our Company</span>
        </div>
        <span className={styles.description}>
          Linanvi is a company specializing in the selection, purchase, and sale
          of premium-class vehicles.
        </span>
      </div>
      <div className={styles.cardBlock}>
        {aboutData.map((e, i) => (
          <AboutCard
            key={i}
            img={e.img}
            title={e.title}
            description={e.description}
            list={e.list}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
