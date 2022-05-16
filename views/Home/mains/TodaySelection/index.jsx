// libs
import { useState } from "react";
import { Pagination } from "antd";
// components
import Selection from "../../components/Selection";
// mocks
import data from "../../../../mocks/TodaySelection";
// hooks
import usePagination from "../../../../hooks/usePagination";
// others
import styles from "./styles.module.scss";
import selection from "../../../../dataSources/TodaySelection";

const TodaySelection = () => {
  const [isHover, setIsHover] = useState(false);

  const { currentPage, onHandleChange } = usePagination({
    total: data.length,
    itemPerPage: selection.TOTAL_ITEM_PER_PAGE,
    isHover,
  });

  return (
    <div
      className={styles["selection-wrapper"]}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <h3 className={styles["selection-title"]}>{selection.title}</h3>
      <div className={styles["selection-content"]}>
        {data
          .slice(
            (currentPage - 1) * selection.TOTAL_ITEM_PER_PAGE,
            (currentPage - 1) * selection.TOTAL_ITEM_PER_PAGE +
              selection.TOTAL_ITEM_PER_PAGE,
          )
          .map((selectionItem) => (
            <Selection
              key={selectionItem.title}
              imageWidth={selection.SELECTION_IMAGE_WIDTH}
              imageHeight={selection.SELECTION_IMAGE_HEIGHT}
              {...selectionItem}
            />
          ))}
      </div>
      <div className={styles["selection-paginate"]}>
        <Pagination
          onChange={onHandleChange}
          current={currentPage}
          total={data.length}
          pageSize={selection.TOTAL_ITEM_PER_PAGE}
        />
      </div>
    </div>
  );
};

export default TodaySelection;
