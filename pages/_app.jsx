// libs
import { Provider } from "react-redux";
// styles
import "../styles/reset.css";
import "antd/dist/antd.css";
import "../styles/global.scss";
// context
import wrapper, { configureStore } from "../redux/store";
import { ProvideLocale } from "../contexts/LocaleContext";
// locales
import locales from "@/locales/index";
// components
import Header from "../layouts/Header";
import Navbar from "../layouts/Navbar";
import MainLayouts from "../layouts/MainLayouts";
import Footer from "../layouts/Footer";

const store = configureStore();

const MyApp = ({ Component, pageProps }) => (
  <ProvideLocale locales={locales}>
    <Provider store={store}>
      <Header />
      <Navbar />
      <MainLayouts>
        <Component {...pageProps} />
      </MainLayouts>
      <Footer />
    </Provider>
  </ProvideLocale>
);

export default wrapper.withRedux(MyApp);
