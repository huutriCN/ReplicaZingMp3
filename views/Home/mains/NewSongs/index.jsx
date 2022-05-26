// libs
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
// components
import TitleComponent from "../../components/TitleComponent";
import VPopComponent from "../../components/VPopComponent";
// hooks
import usePagination from "@/hooks/usePagination";
// actions
import { fetchNewSongs } from "@/redux/actions/NewSongs.action";
/// mocks
import data from "@/mocks/NewSongs";
// others
import styles from "./styles.module.scss";
import NewSong from "@/dataSources/NewSongs";

const NewSongs = () => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const newSongs = useSelector((state) => state.newSongsReducer.newSongs);

  const { currentPage, onHandleChange, start, end } = usePagination({
    total: data.length,
    itemPerPage: NewSong.TOTAL_ITEM_PER_PAGE,
    isHover,
  });

  useEffect(() => {
    dispatch(fetchNewSongs(data));
  }, []);

  return (
    <div
      className={styles["session-wrapper"]}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={styles["session-wrapper-inner"]} id="news">
        <TitleComponent showedPlay={false} title={NewSong.title} size="large" />
        {newSongs.slice(start, end).map((song) => (
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
