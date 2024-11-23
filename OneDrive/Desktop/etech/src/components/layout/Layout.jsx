import NavbarContainer from "../navbar/NavbarContainer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <NavbarContainer />
      <Outlet />
    </div>
  );
};

export default Layout;
