/// mocks
import data from "../../../../mocks/Partners";

// others
import styles from "./styles.module.scss";

const Partners = () => (
  <div className={styles["partner-wrapper"]}>
    <div className={styles["partner-wrapper-inner"]}>
      <span className={styles["partner-title"]}>ĐỐI TÁC</span>
      <ul className={styles["partner-list"]}>
        {data.map((partner) => (
          <li key={partner.thumbnail}>
            <img src={partner.thumbnail} alt="" />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Partners;
