// components
import Header from "../layouts/Header";
import Navbar from "../layouts/Navbar";
import MainLayouts from "../layouts/MainLayouts";
import Footer from "../layouts/Footer";
import Home from "../views/Home";

export default {
  title: "Templates/Home",
};

export const PrimaryHome = () => (
  <>
    <Header />
    <Navbar />
    <MainLayouts>
      <Home />
    </MainLayouts>
    <Footer />
  </>
);
