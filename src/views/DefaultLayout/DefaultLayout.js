import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import classNames from "classnames";
import { TopNavbar } from "../../components/TopNavbar";
import { SideNavbar } from "../../components/SideNavbar";
import { Home } from "../Home";
import { APP_ROUTES } from "../../helpers/routerHelpers";

const DefaultLayout = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <main id="rwa-main" className="rwa-default-layout">
      <SideNavbar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <div
        className={classNames("rwa-content-wrapper content", {
          "is-open": sidebarIsOpen,
        })}
      >
        <TopNavbar />
        <Container fluid>
          <Routes>
            <Route exact path={APP_ROUTES.DASHBOARD} component={Home} />
          </Routes>
        </Container>
      </div>
    </main>
  );
};

export default DefaultLayout;
