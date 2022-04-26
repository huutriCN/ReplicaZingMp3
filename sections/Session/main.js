import styles from "./Session.module.scss";

const Session = ({ className, sessionTitle }) => (
  <div className={`${styles.session} ${className}`}>{sessionTitle}</div>
);

export default Session;
