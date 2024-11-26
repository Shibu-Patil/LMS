import App from "../../App";
import NavbarContainer from "../navbar/NavbarContainer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <App />
      <Outlet />
    </div>
  );
};

export default Layout;
