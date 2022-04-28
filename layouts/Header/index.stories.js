import HeaderComponent from "./index";

export default {
  title: "Header",
  component: HeaderComponent,
};

export const PrimaryHeader = () => (
  <HeaderComponent primary> Header</HeaderComponent>
);
