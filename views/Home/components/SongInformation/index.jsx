// libs
import classNames from "classnames";

// others
import styles from "./styles.module.scss";

const SongInfomation = ({
  artistsNames,
  title,
  color = "dark",
  wrapText = true,
}) => {
  const colorType = color === "dark" ? styles["dark-text"] : "";
  const wrap = wrapText === true ? styles["wrap-text"] : "";

  return (
    <div className={classNames(styles["infor-wrapper"], colorType, wrap)}>
      <h3 className={styles["infor-name"]}>
        <a href={title}>{title}</a>
      </h3>
      <div className={styles["infor-artists"]}>
        {artistsNames.map((artist, index) => (
          <h4 key={artist}>
            <a href={artist}>{index !== 0 ? `, ${artist}` : ` ${artist}`}</a>
          </h4>
        ))}
      </div>
    </div>
  );
};

export default SongInfomation;
