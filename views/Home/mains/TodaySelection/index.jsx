// libs
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
// components
import Selection from "../../components/Selection";
// actions
import { fetchTodaySelection } from "@/redux/actions/TodaySelection.action";
// mocks
import data from "@/mocks/TodaySelection";
// hooks
import usePagination from "@/hooks/usePagination";
// others
import styles from "./styles.module.scss";
import selection from "@/dataSources/TodaySelection";

const TodaySelection = () => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const todaySelection = useSelector(
    (state) => state.todaySelectionReducer.todaySelection,
  );

  useEffect(() => {
    dispatch(fetchTodaySelection(data));
  }, []);

  const { currentPage, onHandleChange, start, end } = usePagination({
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
        {todaySelection.slice(start, end).map((selectionItem) => (
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
