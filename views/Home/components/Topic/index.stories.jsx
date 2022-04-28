import TopicComponent from "./index";

export default {
  title: "views/Home/components/Topic",
  component: TopicComponent,
};

export const PrimaryTopic = () => (
  <TopicComponent primary> Topic </TopicComponent>
);
