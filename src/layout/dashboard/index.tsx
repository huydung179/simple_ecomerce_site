import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
// import Footer from "./Footer";

export default function DashboardLayout() {
  return (
    <>
      <DashboardNavbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
