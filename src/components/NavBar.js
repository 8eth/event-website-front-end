import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <NavLink
            to="/pictures"
            exact
            className="ui right floated button"
            activeStyle={{
              background: "#E6E6E8",
            }}
        >
            Pictures
        </NavLink>
      <NavLink
            to="/rsvp"
            exact
            className="ui right floated button"
            activeStyle={{
              background: "#E6E6E8",
            }}
        >
            RSVP
        </NavLink>
        <NavLink
            to="/"
            exact
            className="ui right floated button"
            activeStyle={{
                background: "#E6E6E8",
            }}
        >
            Home
        </NavLink>
        
    </div>
  )
}

export default NavBar