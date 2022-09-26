import { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faWarehouse,
  faMagnifyingGlass,
  faSackDollar,
  faTag,
  faChartLine,
  faCalendarCheck,
  faCartPlus,
  faTableCellsLarge,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../helpers/routerHelpers";
import SubMenu from "./SubMenu";
import logo from "../../assets/images/logo.png";

const submenus = [
  [
    {
      title: "Item 1",
    },
    {
      title: "Item 2",
    },
  ],
  [
    {
      title: "Item 1",
    },
    {
      title: "Item 2",
    },
  ],
  [
    {
      title: "Item 1",
    },
    {
      title: "Item 2",
    },
  ],
  [
    {
      title: "Available Apps",
    },
    {
      title: "My Apps",
    },
  ],
];

const SideBar = ({ isOpen, handleSidebarClose }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        width <= 1023 && handleSidebarClose();
      }}
    >
      <div
        className={classNames("rwa-side-navbar sidebar h-100", {
          "is-open": isOpen,
        })}
      >
        <div className="sidebar-header d-flex align-items-center justify-content-between">
          <Link to={APP_ROUTES.DASHBOARD}>
            <img
              src={logo}
              className="img-fluid rwaw-150"
              alt="Rewaa Inventory System"
            />
          </Link>
          <FontAwesomeIcon
            icon={faBars}
            onClick={handleSidebarClose}
            className="pointer sidebar-toggle-btn"
          />
        </div>
        <div className="side-menu">
          <Nav vertical className="list-unstyled pb-3">
            <NavItem>
              <NavLink tag={Link} to={APP_ROUTES.DASHBOARD}>
                <FontAwesomeIcon icon={faHome} className="me-2" />
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link}>
                <FontAwesomeIcon icon={faWarehouse} className="me-2" />
                Inventory
              </NavLink>
            </NavItem>
            <SubMenu title="POS" icon={faMagnifyingGlass} items={submenus[0]} />
            <NavItem>
              <NavLink tag={Link}>
                <FontAwesomeIcon icon={faSackDollar} className="me-2" />
                Expenses
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link}>
                <FontAwesomeIcon icon={faTag} className="me-2" />
                Promotions
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link}>
                <FontAwesomeIcon icon={faChartLine} className="me-2" />
                Reports
              </NavLink>
            </NavItem>
            <SubMenu
              title="Order Management"
              icon={faCalendarCheck}
              items={submenus[1]}
            />
            <SubMenu
              title="Stock Control"
              icon={faCartPlus}
              items={submenus[2]}
            />
            <SubMenu
              title="Applications"
              icon={faTableCellsLarge}
              items={submenus[3]}
            />
            <NavItem>
              <NavLink tag={Link}>
                <FontAwesomeIcon icon={faGear} className="me-2" />
                Settings
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default SideBar;
