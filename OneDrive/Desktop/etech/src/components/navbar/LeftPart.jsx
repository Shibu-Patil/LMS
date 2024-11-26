
import './Navbar.css'
const LeftPart = () => {
  return (
    <div class="navbar-left">
    <a href="#" class="logo">
      <img src="	https://themes.stackbros.in/eduport-next/assets/logo-22DQx7cW.svg" alt="Logo" class="logo-img"  /> 
    </a>
   <a href="" class="category">
   <button class="category-btn">
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="icon">
        <circle cx="4" cy="4" r="2"></circle>
        <circle cx="12" cy="4" r="2"></circle>
        <circle cx="4" cy="12" r="2"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
      Category
    </button>
   </a>
  </div>
  )
};

export default LeftPart;
