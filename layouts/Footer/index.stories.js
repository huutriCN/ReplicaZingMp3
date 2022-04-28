import FooterComponent from "./index";

export default {
  title: "Footer",
  component: FooterComponent,
};

export const PrimaryFooter = () => (
  <FooterComponent primary> Footer</FooterComponent>
);
