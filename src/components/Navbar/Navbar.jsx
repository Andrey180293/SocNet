import React from "react";
import x from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = (props) => {
  let Members = props.store
    .getState()
    .sidebarState.sidebarData.map((props) => (
      <Sidebar key={props.id} id={props.id} name={props.name} />
    ));

  return (
    <nav className={x.nav}>
      <ul className={x.nav_main}>
        <li className={`${x.item} ${x.activeLink}`}>
          <NavLink to="/profile" activeClassName={x.activeLink}>
            {" "}
            Main Profile
          </NavLink>
        </li>
        <li className={x.item}>
          <NavLink to="/dialogs" activeClassName={x.activeLink}>
            {" "}
            Messages
          </NavLink>
        </li>
        <li className={x.item}>
          <NavLink to="/users" activeClassName={x.activeLink}>
            {" "}
            Users
          </NavLink>
        </li>
        <li className={x.item}>
          <NavLink to="/news" activeClassName={x.activeLink}>
            {" "}
            News
          </NavLink>
        </li>
        <li className={x.item}>
          <NavLink to="/music" activeClassName={x.activeLink}>
            {" "}
            Music
          </NavLink>
        </li>
        <li className={x.item}>
          <NavLink to="/setting" activeClassName={x.activeLink}>
            {" "}
            Setting
          </NavLink>
        </li>
      </ul>
      <h3>Friends</h3>
      <div className={x.side}>{Members}</div>
    </nav>
  );
};
export default Navbar;
