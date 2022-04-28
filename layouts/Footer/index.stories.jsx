import FooterComponent from "./index";

export default {
  title: "layouts/Footer",
  component: FooterComponent,
};

export const PrimaryFooter = () => (
  <FooterComponent primary> Footer</FooterComponent>
);
