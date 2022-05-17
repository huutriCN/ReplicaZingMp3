// components
import ImageComponent from "./index";

const Template = ({
  Thumbnail,
  Ranking,
  ImageWidth,
  ImageHeight,
  showIcon,
}) => (
  <div style={{ width: "110px" }}>
    <ImageComponent
      thumbnail={Thumbnail}
      rankingNumber={Ranking}
      showIcon={showIcon}
      imageHeight={ImageHeight}
      imageWidth={ImageWidth}
    />
  </div>
);

export default {
  title: "views/Home/components/ImageComponent",
  component: ImageComponent,
  argTypes: {
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
    showIcon: {
      control: { type: "boolean" },
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
  Thumbnail:
    "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/d/f/7/7df7cf2a31cb35a945e61a870be5556a.jpg",
  Ranking: 0,
  showIcon: true,
  ImageWidth: "110px",
  ImageHeight: "110px",
};
