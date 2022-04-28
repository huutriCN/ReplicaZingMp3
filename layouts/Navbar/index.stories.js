import NavbarComponent from "./index";

export default {
  title: "Navbar",
  component: NavbarComponent,
};

export const PrimaryNavbar = () => (
  <NavbarComponent primary> Navbar </NavbarComponent>
);
