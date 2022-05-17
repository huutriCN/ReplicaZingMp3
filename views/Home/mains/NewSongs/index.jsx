// libs
import { useState } from "react";
import { Pagination } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import VPopComponent from "../../components/VPopComponent";
// hooks
import usePagination from "../../../../hooks/usePagination";
/// mocks
import data from "../../../../mocks/NewSongs";
// others
import styles from "./styles.module.scss";
import NewSong from "../../../../dataSources/NewSongs";

const NewSongs = () => {
  const [isHover, setIsHover] = useState(false);

  const { currentPage, onHandleChange } = usePagination({
    total: data.length,
    itemPerPage: NewSong.TOTAL_ITEM_PER_PAGE,
    isHover,
  });

  return (
    <div
      className={styles["session-wrapper"]}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={styles["session-wrapper-inner"]}>
        <TitleComponent showedPlay={false} title={NewSong.title} size="large" />
        {data
          .slice(
            (currentPage - 1) * NewSong.TOTAL_ITEM_PER_PAGE,
            (currentPage - 1) * NewSong.TOTAL_ITEM_PER_PAGE +
              NewSong.TOTAL_ITEM_PER_PAGE,
          )
          .map((song) => (
            <VPopComponent
              key={song.title}
              imageWidth={NewSong.NEWS_IMAGE_WIDTH}
              imageHeight={NewSong.NEWS_IMAGE_HEIGHT}
              {...song}
            />
          ))}
        <div className={styles["session-pagination"]}>
          <Pagination
            simple
            onChange={onHandleChange}
            current={currentPage}
            total={data.length}
            pageSize={NewSong.TOTAL_ITEM_PER_PAGE}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default NewSongs;
