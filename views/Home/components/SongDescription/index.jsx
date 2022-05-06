// libs
import classNames from "classnames";

// components
import DescriptionTools from "../DescriptionTools";

// others
import styles from "./styles.module.scss";

const SongDescription = ({
  className,
  title,
  artistsNames,
  rankingNumber = 1,
}) => {
  const descStyle = className || styles.normal;

  return (
    <div className={classNames(styles["desc-wrapper"], descStyle)}>
      <div className={styles["desc-wrapper-inner"]}>
        <div className={styles["desc-ranking"]}>
          <p>{rankingNumber < 10 ? `0${rankingNumber}` : rankingNumber}</p>
        </div>
        <div className={styles["desc-content"]}>
          <h3 className={styles["desc-name"]}>
            <a href={title}>{title}</a>
          </h3>
          <div className={styles["desc-artists"]}>
            {artistsNames.map((artist, index) => (
              <h4 key={artist}>
                <a href={artist}>
                  {index !== 0 ? `, ${artist}` : ` ${artist}`}
                </a>
              </h4>
            ))}
          </div>
        </div>
        <div className={styles["desc-tools"]}>
          <DescriptionTools />
        </div>
      </div>
    </div>
  );
};

export default SongDescription;
