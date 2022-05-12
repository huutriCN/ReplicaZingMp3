// components
import ImageCover from "./index";

const Template = ({ Thumbnail, Ranking, size, Title, Artists, NewsTitle }) => (
  <ImageCover
    thumbnail={Thumbnail}
    rankingNumber={Ranking}
    title={Title}
    newsTitle={NewsTitle}
    artistsNames={Artists}
    size={size}
  />
);

export default {
  title: "views/Home/components/ImageCover",
  component: ImageCover,
  argTypes: {
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
    Artists: {
      options: [["Ưng Hoàng Phúc"], ["Hồng Thanh"]],
      control: { type: "select" },
    },
    Title: {
      options: [
        "Trọn Vẹn Nghĩa Tình",
        "Đám Cưới Nha?",
        "Sau Lưng Anh Có Ai Kìa",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["small", "large"],
      control: { type: "select" },
    },
  },
};

export const Primary = Template.bind({});
Primary.args = {
  Thumbnail:
    "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/d/f/7/7df7cf2a31cb35a945e61a870be5556a.jpg",
  Ranking: 0,
  size: "small",
  Title: "Đám Cưới Nha?",
  Artists: ["Hồng Thanh", "DJ Mie"],
};

export const Secondary = Template.bind({});
Secondary.args = {
  Thumbnail:
    "https://znews-photo.zingcdn.me/w480/Uploaded/ofh_btgazsox/2022_04_21/aespa_savage_interview_281221.jpg",
  size: "large",
  NewsTitle: "Mô hình đào tạo thực tập sinh bậc nhất Hàn Quốc",
};
