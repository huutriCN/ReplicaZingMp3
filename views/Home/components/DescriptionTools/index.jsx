// eslint-disable-next-line import/no-extraneous-dependencies
import {
  DownloadOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

// others
import styles from "./styles.module.scss";

const DescriptionTools = () => (
  <div className={styles["tools-wrapper"]}>
    <DownloadOutlined className={styles["tool-item"]} />
    <PlusOutlined className={styles["tool-item"]} />
    <ShareAltOutlined className={styles["tool-item"]} />
  </div>
);

export default DescriptionTools;
