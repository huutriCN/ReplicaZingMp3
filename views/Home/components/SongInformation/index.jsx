import classNames from "classnames";
import styles from "./styles.module.scss";

const SongInfomation = ({ artistsNames, title, color = "dark" }) => {
  const colorType = color === "dark" ? styles["dark-text"] : "";
  return (
    <div className={classNames(styles["infor-wrapper"], colorType)}>
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
