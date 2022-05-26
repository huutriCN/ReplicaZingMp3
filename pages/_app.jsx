// styles
import "../styles/reset.css";
import "antd/dist/antd.css";
import "../styles/global.scss";
// context
import { ProvideLocale } from "../contexts/LocaleContext";
// locales
import locales from "@/locales/index";
// components
import Header from "../layouts/Header";
import Navbar from "../layouts/Navbar";
import MainLayouts from "../layouts/MainLayouts";
import Footer from "../layouts/Footer";

const MyApp = ({ Component, pageProps }) => (
  <ProvideLocale locales={locales}>
    <Header />
    <Navbar />
    <MainLayouts>
      <Component {...pageProps} />
    </MainLayouts>
    <Footer />
  </ProvideLocale>
);

export default MyApp;
