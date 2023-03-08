import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
