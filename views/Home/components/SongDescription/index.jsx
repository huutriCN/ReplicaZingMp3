// libs
import classNames from "classnames";

// components
import DescriptionTools from "../DescriptionTools";
import SongInfomation from "../SongInformation";

// others
import styles from "./styles.module.scss";

const SongDescription = ({
  className,
  title,
  artistsNames,
  rankingNumber = 1,
  color = "dark",
  showedTools = true,
}) => {
  const descStyle = className || styles.normal;

  return (
    <div className={classNames(styles["desc-wrapper"], descStyle)}>
      <div className={styles["desc-wrapper-inner"]}>
        <div className={styles["desc-ranking"]}>
          <p>{rankingNumber < 10 ? `0${rankingNumber}` : rankingNumber}</p>
        </div>
        <div className={styles["desc-content"]}>
          <SongInfomation
            title={title}
            artistsNames={artistsNames}
            color={color}
          />
        </div>
        {showedTools && (
          <div className={styles["desc-tools"]}>
            <DescriptionTools />
          </div>
        )}
      </div>
    </div>
  );
};

export default SongDescription;
