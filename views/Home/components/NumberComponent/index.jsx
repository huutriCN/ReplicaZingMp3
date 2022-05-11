// libs
import classNames from "classnames";
// others
import styles from "./styles.module.scss";

const NumberComponent = ({ percent, rankingNumber = 0, size = "small" }) => {
  let number = rankingNumber + 1;

  if (size === "small") {
    number = `0${number}`;
  }

  return (
    <div className={styles["number-wrapper"]}>
      <span
        className={classNames({
          [styles["top-1"]]: rankingNumber === 0,
          [styles["top-2"]]: rankingNumber === 1,
          [styles["top-3"]]: rankingNumber === 2,
          [styles["number-large"]]: size !== "small",
        })}
      >
        {percent ? `${percent} %` : number}
      </span>
    </div>
  );
};

export default NumberComponent;
