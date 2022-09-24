import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { faGlobe, faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ProfileMenu } from "../ProfileMenu";
import { Colors } from "../../theme/colors";

const Topbar = ({ isSidebarOpen, handleSidebarOpen = () => {} }) => {
  return (
    <Navbar className="rwa-top-navbar bg-white">
      {!isSidebarOpen && (
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleSidebarOpen}
          className="pointer"
        />
      )}
      <Nav className="ms-auto flex-row align-items-center" navbar>
        <NavItem>
          <NavLink tag={Link}>عربي</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link}>
            <FontAwesomeIcon icon={faGlobe} color={Colors.black} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link}>
            <FontAwesomeIcon icon={faBell} color={Colors.black} />
          </NavLink>
        </NavItem>
        <ProfileMenu />
      </Nav>
    </Navbar>
  );
};

export default Topbar;
