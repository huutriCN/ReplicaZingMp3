/// components
import ChartSong from "./index";

const Template = ({ Title, Artists, Thumbnail, SongPercent, Ranking }) => (
  <div style={{ width: "200px", backgroundColor: "#15081f" }}>
    <ChartSong
      title={Title}
      artistsNames={Artists}
      thumbnail={Thumbnail}
      rankingNumber={Ranking}
      percent={SongPercent}
    />
  </div>
);

export default {
  title: "views/Home/components/ChartSong",
  component: ChartSong,
  argTypes: {
    Title: {
      options: [
        "Trọn Vẹn Nghĩa Tình",
        "Đám Cưới Nha?",
        "Sau Lưng Anh Có Ai Kìa",
      ],
      control: { type: "select" },
    },
    Artists: {
      options: [["Ưng Hoàng Phúc"], ["Hồng Thanh"]],
      control: { type: "select" },
    },
    Thumbnail: {
      control: {
        type: "file",
        accept: [".png", ".jpg"],
      },
    },
    Ranking: {
      control: {
        type: "number",
        min: 0,
        max: 9,
        step: 1,
      },
    },
    SongPercent: {
      control: {
        type: "number",
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};

export const Primary = Template.bind({});
Primary.args = {
  Title: "Trọn Vẹn Nghĩa Tình",
  Artists: ["Ưng Hoàng Phúc"],
  Thumbnail:
    "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/c/8/7/fc8731ef0a79cdf73c3f30a0f01e4485.jpg?fs=MTY1MjIwNjUyOTU0MHx3ZWJWNHw",
  Ranking: 0,
  SongPercent: 37,
};
