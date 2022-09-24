import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { faGlobe, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ProfileMenu } from "../ProfileMenu";
import { Colors } from "../../theme/colors";

const Topbar = () => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar color="light" light className="rwa-top-navbar" expand="lg">
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Nav className="ms-auto" navbar>
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
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
