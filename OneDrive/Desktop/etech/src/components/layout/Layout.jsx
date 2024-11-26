import LeftPart from "../navbar/LeftPart";
import NavbarContainer from "../navbar/NavbarContainer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>

    
      <NavbarContainer/>
      <Outlet />
    </div>
  );
};

export default Layout;
