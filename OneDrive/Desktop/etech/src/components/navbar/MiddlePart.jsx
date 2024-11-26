import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const MiddlePart = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const linkData = [
    {
      path: "/",
      name: "Demos",
      dropdown: [
        { path: "/demo1", name: "Demo 1", dropdown: [] },
        { path: "/demo2", name: "Demo 2" },
        { path: "/demo3", name: "Demo 3" }
      ]
    },
    {
      path: "/",
      name: "Pages",
      dropdown: [
        { path: "/demo1", name: "Demo 1" },
        { path: "/demo2", name: "Demo 2" },
        { path: "/demo3", name: "Demo 3" }
      ]
    },
    {
      path: "/login",
      name: <Login/>,
    },
    {
      path: "/register",
      name: <Register/>,
    }
  ];

  return (
    <div className="nav-links">
      {linkData.map((link, index) => {
        if (link.dropdown) {
          return (
            <div
              key={index}
              className="dropdown"
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              <Link to={link.path} className="dropdown-link">
                {link.name}
              </Link>
              {isDropdownVisible && (
                <div className="dropdown-menu">
                  {link.dropdown.map((item, subIndex) => (
                    <Link key={subIndex} to={item.path} className="dropdown-item">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        } else {
          return (
            <Link key={index} to={link.path} className="nav-item">
              {link.name}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default MiddlePart;
