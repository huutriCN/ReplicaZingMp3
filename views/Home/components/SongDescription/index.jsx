// components
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  DownloadOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

// libs
import classNames from "classnames";

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
            <a href="/home">{title}</a>
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
        <div>
          <div className={styles["desc-tools"]}>
            <DownloadOutlined className={styles["tool-item"]} />
            <PlusOutlined className={styles["tool-item"]} />
            <ShareAltOutlined className={styles["tool-item"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDescription;
