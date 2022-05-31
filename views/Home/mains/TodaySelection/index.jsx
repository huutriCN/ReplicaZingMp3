// libs
import { useState } from "react";
import { Pagination } from "antd";
// components
import Selection from "../../components/Selection";
// hooks
import useSelect from "@/hooks/useSelect";
import usePagination from "@/hooks/usePagination";
// actions
import { fetchTodaySelection } from "@/redux/actions/TodaySelection.action";
// mocks
import data from "@/mocks/TodaySelection";
// others
import styles from "./styles.module.scss";
import selection from "@/dataSources/TodaySelection";

const TodaySelection = () => {
  const [isHover, setIsHover] = useState(false);

  const { currentPage, onHandleChange, start, end } = usePagination({
    total: data.length,
    itemPerPage: selection.TOTAL_ITEM_PER_PAGE,
    isHover,
  });

  const todaySelection = useSelect(
    fetchTodaySelection,
    (state) => state.todaySelectionReducer.todaySelection,
    data,
  );

  return (
    <div
      className={styles["today-selection-wrapper"]}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <h3 className={styles["today-selection-title"]}>{selection.title}</h3>
      <div className={styles["today-selection-content"]}>
        {todaySelection.slice(start, end).map((selectionItem) => (
          <Selection
            key={selectionItem.title}
            imageWidth={selection.SELECTION_IMAGE_WIDTH}
            imageHeight={selection.SELECTION_IMAGE_HEIGHT}
            {...selectionItem}
          />
        ))}
      </div>
      <div className={styles["today-selection-paginate"]}>
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
