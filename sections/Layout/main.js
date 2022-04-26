import Footer from "../Footer/main";
import Header from "../Header/main";
import Navbar from "../Navbar/main";

const Layout = ({ children }) => (
  <>
    <Header />
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
