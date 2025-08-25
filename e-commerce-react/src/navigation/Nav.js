import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUserAdd } from "react-icons/ai";


function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className="search-input" placeholder="Enter your search shoes."></input>
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a>
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;