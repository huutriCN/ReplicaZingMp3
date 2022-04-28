import styles from "./styles.module.scss";

const Session = ({ sessionTitle }) => (
  <div className={styles["session-wrapper"]}>{sessionTitle}</div>
);

export default Session;
