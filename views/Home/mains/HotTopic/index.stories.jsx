import HotTopicComponent from "./index";

export default {
  title: "views/Home/mains/HotTopic",
  component: HotTopicComponent,
};

export const PrimaryHotTopic = () => (
  <HotTopicComponent primary> HotTopic</HotTopicComponent>
);
