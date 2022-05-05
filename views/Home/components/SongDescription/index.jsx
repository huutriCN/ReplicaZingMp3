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

const SongDescription = ({ className }) => (
  <div className={classNames(styles["desc-wrapper"], className)}>
    <div className={styles["desc-wrapper-inner"]}>
      <div className={styles["desc-ranking"]}>
        <p>01</p>
      </div>
      <div className={styles["desc-content"]}>
        <h3 className={styles["desc-name"]}>
          <a href="/home">Đám Cưới Nha?</a>
        </h3>
        <div className={styles["desc-artists"]}>
          <h4>
            <a href="/hongthanh">Hồng Thanh</a>
          </h4>
          <span>, </span>
          <h4>
            <a href="/hongthanh"> DJ Mie</a>
          </h4>
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

export default SongDescription;
