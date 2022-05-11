import TitleComponent from ".";

export default {
  title: "views/Home/components/TitleComponent",
  component: TitleComponent,
};

export const PrimaryTitleComponent = () => (
  <TitleComponent primary> Title</TitleComponent>
);
