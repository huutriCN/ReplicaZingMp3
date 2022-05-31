// libs
import { useState } from "react";
import { Pagination } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import VPopComponent from "../../components/VPopComponent";
// hooks
import usePagination from "@/hooks/usePagination";
import useSelect from "@/hooks/useSelect";
// actions
import { fetchNewSongs } from "@/redux/actions/NewSongs.action";
/// mocks
import data from "@/mocks/NewSongs";
// others
import styles from "./styles.module.scss";
import NewSong from "@/dataSources/NewSongs";

const NewSongs = () => {
  const [isHover, setIsHover] = useState(false);

  const { currentPage, onHandleChange, start, end } = usePagination({
    total: data.length,
    itemPerPage: NewSong.TOTAL_ITEM_PER_PAGE,
    isHover,
  });

  const newSongs = useSelect(
    fetchNewSongs,
    (state) => state.newSongsReducer.newSongs,
    data,
  );

  return (
    <div
      className={styles["new-songs-wrapper"]}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={styles["new-songs-wrapper-inner"]} id="news">
        <TitleComponent showedPlay={false} title={NewSong.title} size="large" />
        {newSongs.slice(start, end).map((song) => (
          <VPopComponent
            key={song.title}
            imageWidth={NewSong.NEWS_IMAGE_WIDTH}
            imageHeight={NewSong.NEWS_IMAGE_HEIGHT}
            {...song}
          />
        ))}
        <div className={styles["new-songs-pagination"]}>
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
