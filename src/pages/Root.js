import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer/Footer";
import NavBar from "../components/layout/NavBar/NavBar";

const Root = () => {
  return (
    <div className="content">
      <NavBar />
      <div className="page-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Root;
