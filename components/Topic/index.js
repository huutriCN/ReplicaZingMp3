import styles from "./Topic.module.scss";

const Topic = ({ className }) => (
  <div className={`${styles.topic} ${className}`}>Hot Topic</div>
);

export default Topic;
