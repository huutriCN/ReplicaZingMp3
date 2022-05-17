// components
import AlbumDescription from ".";

const Template = ({ Title, Artists, Thumbnail, TextColor, Ranking }) => (
  <AlbumDescription
    title={Title}
    artistsNames={Artists}
    thumbnail={Thumbnail}
    color={TextColor}
    rankingNumber={Ranking}
  />
);

export default {
  title: "views/Home/components/AlbumDescriptionComponent",
  component: AlbumDescription,
  argTypes: {
    Title: {
      options: [
        "Xuân Hạ Thu Đông, rồi lại Xuân - Tập 9+10",
        "Xuân Hạ Thu Đông, rồi lại Xuân - Tập 5+6",
        "dreAMEE",
      ],
      control: { type: "select" },
    },
    Artists: {
      options: [["Nhiều nghệ sĩ"], ["YuniBoo", "Goctoi Mixer"]],
      control: { type: "select" },
    },
    Thumbnail: {
      control: {
        type: "file",
        accept: [".png", ".jpg"],
      },
    },
    TextColor: {
      options: ["white", "dark"],
      control: { type: "select" },
    },
    Ranking: {
      control: {
        type: "number",
        min: 0,
        max: 9,
        step: 1,
      },
    },
  },
};

export const Primary = Template.bind({});
Primary.args = {
  Title: "Xuân Hạ Thu Đông, rồi lại Xuân - Tập 9+10",
  Artists: ["Nhiều nghệ sĩ"],
  Thumbnail:
    "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/d/f/7/7df7cf2a31cb35a945e61a870be5556a.jpg",
  TextColor: "dark",
  Ranking: 0,
};
