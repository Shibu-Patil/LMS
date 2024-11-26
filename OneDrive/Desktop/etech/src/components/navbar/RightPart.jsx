import { IoSearchSharp } from "react-icons/io5";
const RightPart = () => {
  return (
    <div class="navbar-right">
    <div class="search-bar">
      <input type="text" placeholder="Search" class="search-input"/>
      
      <IoSearchSharp  className="search-icon" />
    
    </div>
    <div class="profile">
      <img src="" alt="Profile" class="avatar"/>
    </div>
  </div>
  )
};

export default RightPart;
