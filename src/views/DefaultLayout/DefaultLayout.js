import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import classNames from "classnames";
import { TopNavbar } from "../../components/TopNavbar";
import { SideNavbar } from "../../components/SideNavbar";
import { Dashboard } from "../Dashboard";
import { Inventory } from "../Inventory";
import { APP_ROUTES } from "../../helpers/routerHelpers";

const DefaultLayout = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <main id="rwa-main" className="rwa-default-layout">
      <SideNavbar
        handleSidebarClose={() => {
          width > 1023 ? setSidebarOpen(false) : setMobileSidebarOpen(false);
        }}
        isOpen={width > 1023 ? sidebarIsOpen : mobileSidebarOpen}
      />
      <div
        className={classNames("rwa-content-wrapper content", {
          "is-open": width > 1023 ? sidebarIsOpen : mobileSidebarOpen,
        })}
      >
        <TopNavbar
          isSidebarOpen={width > 1023 ? sidebarIsOpen : mobileSidebarOpen}
          handleSidebarOpen={() => {
            width > 1023 ? setSidebarOpen(true) : setMobileSidebarOpen(true);
          }}
        />
        <Routes>
          <Route exact path={APP_ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route exact path={APP_ROUTES.INVENTORY} element={<Inventory />} />
          <Route
            path="/"
            element={<Navigate replace to={APP_ROUTES.DASHBOARD} />}
          />
        </Routes>
      </div>
    </main>
  );
};

export default DefaultLayout;
