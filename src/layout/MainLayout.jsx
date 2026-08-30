import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
//import PopupModal from "../components/PopupModal";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* <PopupModal /> */}
      <main className="mt-15">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;