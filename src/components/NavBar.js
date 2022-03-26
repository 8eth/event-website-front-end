import React from 'react'
import { NavLink } from "react-router-dom";
// import { FiHome, FiInfo, FiPlusSquare } from "react-icons/fi";

function NavBar() {
  return (
    <div>NavBar
        <NavLink
            to="/"
            exact
            className="active item"
            activeStyle={{
                background: "#E6E6E8",
            }}
        >
            {/* <FiHome />  */}
            Home
        </NavLink>
        <NavBar
            to="/AddRecipe"
            exact
            className="item"
            activeStyle={{
              background: "#E6E6E8",
            }}
        >
            {/* <FiInfo />  */}
            RSVP
        </NavBar>
    </div>
  )
}

export default NavBar