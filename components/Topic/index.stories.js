import TopicComponent from "./index";

export default {
  title: "Topic",
  component: TopicComponent,
};

export const PrimaryTopic = () => (
  <TopicComponent primary> Topic </TopicComponent>
);
