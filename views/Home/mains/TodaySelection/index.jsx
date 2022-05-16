// components
import Selection from "../../components/Selection";

// mocks
import data from "../../../../mocks/TodaySelection";

// others
import styles from "./styles.module.scss";
import selection from "../../../../dataSources/TodaySelection";

const TodaySelection = () => (
  <div className={styles["selection-wrapper"]}>
    <h3 className={styles["selection-title"]}>{selection.title}</h3>
    <div className={styles["selection-content"]}>
      {data.map((selectionItem) => (
        <Selection
          key={selectionItem.title}
          imageWidth={selection.SELECTION_IMAGE_WIDTH}
          imageHeight={selection.SELECTION_IMAGE_HEIGHT}
          {...selectionItem}
        />
      ))}
    </div>
  </div>
);

export default TodaySelection;
