import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import classNames from "classnames";
import { TopNavbar } from "../../components/TopNavbar";
import { SideNavbar } from "../../components/SideNavbar";
import { Dashboard } from "../Dashboard";
import { Inventory } from "../Inventory";
import { APP_ROUTES } from "../../helpers/routerHelpers";

const DefaultLayout = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  // const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);

  // const updateWidthAndHeight = () => {
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", updateWidthAndHeight);
  //   return () => window.removeEventListener("resize", updateWidthAndHeight);
  // });

  return (
    <main id="rwa-main" className="rwa-default-layout">
      <SideNavbar
        handleSidebarClose={() => {
          setSidebarOpen(false);
        }}
        isOpen={sidebarIsOpen}
      />
      <div
        className={classNames("rwa-content-wrapper content", {
          "is-open": sidebarIsOpen,
        })}
      >
        <TopNavbar
          isSidebarOpen={sidebarIsOpen}
          handleSidebarOpen={() => {
            setSidebarOpen(true);
          }}
        />
        <Routes>
          <Route exact path={APP_ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route exact path={APP_ROUTES.INVENTORY} element={<Inventory />} />
        </Routes>
      </div>
    </main>
  );
};

export default DefaultLayout;
