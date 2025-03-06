import StarIcon from "../../assets/icons/star-icon";
import FileIcon from "../../assets/icons/file-icon";
import PackageIcon from "../../assets/icons/package-icon";
import MapIcon from "../../assets/icons/map-icon";

import styles from "./styles/index.module.scss";

const Benefits = () => {
  return (
    <div className={styles.benefitsContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitleBlock}>
          <div className={styles.infoTitle}>
            <span>Our benefits</span>
            <span>Why Choose Us?</span>
          </div>
          <span className={styles.infoDescription}>
            Your dependable and experienced partner in the world of high-end
            luxury automobiles!
          </span>
        </div>
        <div className={styles.infoButton}>Contact us</div>
      </div>
      <div className={styles.infoSentense}>
        <div className={styles.infoBlock}>
          <StarIcon width={44} height={44} />
          <div className={styles.description}>
            <span>Guaranteed quality</span>
            <span>Only verified vehicles</span>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <FileIcon width={44} height={44} />
          <div className={styles.description}>
            <span>Transparent deals</span>
            <span>We operate officially</span>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <PackageIcon width={44} height={44} />
          <div className={styles.description}>
            <span>Full-service cycle</span>
            <span>From search to delivery</span>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <MapIcon width={44} height={44} />
          <div className={styles.description}>
            <span>Operating across Europe</span>
            <span>Access to exclusive deals</span>
          </div>
        </div>
      </div>
      <div className={styles.infoButton}>Contact us</div>
    </div>
  );
};

export default Benefits;
