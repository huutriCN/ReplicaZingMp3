// libs
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
/// components
import TitleComponent from "../../components/TitleComponent";
import NewsComponent from "../../components/NewsComponent";
import ImageCoverComponent from "../../components/ImageCoverComponent";
// actions
import { fetchNews } from "@/redux/actions/News.action";
// mocks
import data from "@/mocks/News";
// others
import styles from "./styles.module.scss";
import newDS from "@/dataSources/News";

const News = () => {
  const dispatch = useDispatch();
  const newDT = useSelector((state) => state.newsReducer.news);

  useEffect(() => {
    dispatch(fetchNews(data));
  });

  return (
    <div className={styles["news-wrapper"]}>
      <TitleComponent showedPlay={false} title={newDS.title} />
      {newDT.map((news, index) => {
        if (index === 0)
          return (
            <ImageCoverComponent
              key={news.title}
              newsTitle={news.title}
              image={news.thumbnail}
              size="large"
            />
          );
        return (
          <NewsComponent
            key={news.title}
            imageWidth={newDS.NEWS_IMAGE_WIDTH}
            imageHeight={newDS.NEWS_IMAGE_HEIGHT}
            {...news}
          />
        );
      })}
    </div>
  );
};

export default News;
