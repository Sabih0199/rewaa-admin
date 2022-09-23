import { useState } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Navbar, NavbarBrand, NavbarToggler, Nav, NavLink, NavItem, Collapse } from "reactstrap"

import { Avatar } from "../Avatar"

import userAlpha from "../../assets/images/user-1.png"

const TopNavbar = (props) => {
    const { className = "" } = props;
    const [navbarToggleBtn, setNavbarToggleBtn] = useState(false);
    return (
        <div className={`ev-topnavbar ${className}`}>
            <Navbar
                container
                expand="md"
                dark
            >
                <NavbarBrand href="/" className="fw-bold">
                    Organisations
                </NavbarBrand>
                <NavbarToggler onClick={() => {
                    setNavbarToggleBtn(!navbarToggleBtn)
                }} />
                <Collapse navbar isOpen={navbarToggleBtn}>
                    <Nav
                        className="ms-auto align-items-center"
                        navbar
                    >

                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                English (USA)
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/">
                                University of London
                                <span className="d-inline-block ms-2">
                                    <Avatar url={userAlpha} className="evw-38 evh-38" />
                                </span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};
export default TopNavbar;