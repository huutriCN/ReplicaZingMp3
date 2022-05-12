import AlbumComponent from "./index";

const Template = ({ Title, Artists, Thumbnail, ImageHeight, ImageWidth }) => (
  <AlbumComponent
    title={Title}
    artists={Artists}
    imageHeight={ImageHeight}
    imageWidth={ImageWidth}
    thumbnail={Thumbnail}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  Title: "Xuân Hạ Thu Đông, rồi lại Xuân - Tập 9+10",
  Artists: ["Nhiều nghệ sĩ"],
  Thumbnail:
    "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/d/f/7/7df7cf2a31cb35a945e61a870be5556a.jpg",
  ImageWidth: "110px",
  ImageHeight: "110px",
};

export default {
  title: "views/Home/components/AlbumComponent",
  component: AlbumComponent,
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
    ImageWidth: {
      options: ["50px", "65px", "110px", "151px"],
      control: { type: "select" },
    },
    ImageHeight: {
      options: ["50px", "65px", "110px", "151px"],
      control: { type: "select" },
    },
    Thumbnail: {
      control: {
        type: "file",
        accept: [".png", ".jpg"],
      },
    },
  },
};
