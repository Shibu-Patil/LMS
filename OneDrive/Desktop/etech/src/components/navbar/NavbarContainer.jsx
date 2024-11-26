import LeftPart from "./LeftPart";
import MiddlePart from "./MiddlePart";
import RightPart from "./RightPart";

const NavbarContainer = () => {
  return  <nav class="navbar">
    <div class="container">
    <LeftPart/>
    <MiddlePart/>
    <RightPart/>
  </div>
  </nav>;
};

export default NavbarContainer;
