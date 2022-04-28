import HeaderComponent from "./index";

export default {
  title: "layouts/Header",
  component: HeaderComponent,
};

export const PrimaryHeader = () => (
  <HeaderComponent primary> Header</HeaderComponent>
);
