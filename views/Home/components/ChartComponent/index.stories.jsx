/// components
import ChartComponent from "./index";

const Template = ({ ListSong }) => <ChartComponent songList={ListSong} />;

export default {
  title: "views/Home/components/ChartComponent",
  component: ChartComponent,
  argTypes: {},
};

export const Primary = Template.bind({});
Primary.args = {
  ListSong: [
    {
      title: "Trọn Vẹn Nghĩa Tình",
      artistsNames: ["Ưng Hoàng Phúc"],
      percent: 37,
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/c/8/7/fc8731ef0a79cdf73c3f30a0f01e4485.jpg?fs=MTY1MjIwNjUyOTU0MHx3ZWJWNHw",
    },
    {
      title: "Đám Cưới Nha?",
      artistsNames: ["Hồng Thanh"],
      percent: 36,
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/b/8/b/5b8b7cd3d1434afa3b2b9854efdc8756.jpg?fs=MTY1MjIwNjUyOTU0MHx3ZWJWNHw",
    },
    {
      title: "Sau Lưng Anh Có Ai Kìa",
      artistsNames: ["Thiều Bảo Trâm"],
      percent: 27,
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/8/0/7/1807c6b5fcc7058a14e1a288801221c7.jpg?fs=MTY1MjIwNjUyOTU0Mnx3ZWJWNHw",
    },
  ],
};
