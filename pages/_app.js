import "../styles/reset.css";
import "../styles/globals.scss";
import Header from "../layouts/Header";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Header />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
