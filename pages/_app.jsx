import "../styles/reset.css";
import "../styles/globals.scss";

import Header from "../layouts/Header";
import Navbar from "../layouts/Navbar";
import MainLayouts from "../layouts/MainLayouts";
import Footer from "../layouts/Footer";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Header />
    <Navbar />
    <MainLayouts>
      <Component {...pageProps} />
    </MainLayouts>
    <Footer />
  </>
);

export default MyApp;
