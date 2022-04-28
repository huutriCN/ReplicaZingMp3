import NavbarComponent from "./index";

export default {
  title: "layouts/Navbar",
  component: NavbarComponent,
};

export const PrimaryNavbar = () => (
  <NavbarComponent primary> Navbar </NavbarComponent>
);
