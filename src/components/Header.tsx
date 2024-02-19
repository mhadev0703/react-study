import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    
    const onHomeClick = () => {
      navigate("/");
    };

    const onAboutClick = () => {
      navigate("/about");
    };
    
    return (
      <header>
        <ul>
            <li>
            <button onClick={onHomeClick}>Home</button>
            </li>
            <li>
              <button onClick={onAboutClick}>About</button>
            </li>
        </ul>
      </header>
    );
}

export default Header;