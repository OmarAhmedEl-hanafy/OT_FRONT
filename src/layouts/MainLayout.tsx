import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useRef } from "react";

function MainLayout() {
  const navRef = useRef(null);
  return (
    <>
      <Navbar ref={navRef} />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
