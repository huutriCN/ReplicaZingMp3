// components
import ArtistComponent from ".";

const Template = ({ Artists, Thumbnail, Size }) => (
  <div
    style={
      Size === "200x200"
        ? { width: "210px", height: "200px" }
        : { width: "100px", height: "100px" }
    }
  >
    <ArtistComponent name={Artists} thumbnail={Thumbnail} />
  </div>
);

export default {
  title: "views/Home/components/ArtistComponent",
  component: ArtistComponent,
  argTypes: {
    Artists: {
      options: ["Đàm Vĩnh Hưng", "Khởi My", "Karik", "Bích Phương"],
      control: { type: "select" },
    },
    Size: {
      options: ["100x100", "200x200"],
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

export const Primary = Template.bind({});
Primary.args = {
  Artists: "Đàm Vĩnh Hưng",
  Thumbnail:
    "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/f/9/5/6f95a5545394cf4b65830cab489788e8.jpg#home_hotartist_01",
  Size: "200x200",
};
