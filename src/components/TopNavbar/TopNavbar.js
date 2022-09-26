import { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { faGlobe, faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ProfileMenu } from "../ProfileMenu";
import { Colors } from "../../theme/colors";
import i18n from "../../i18n";

const Topbar = ({ isSidebarOpen, handleSidebarOpen = () => {}, t }) => {
  const [selectedLang, setSelectedLang] = useState("");

  useEffect(() => {
    const currentLanguage = localStorage.getItem("I18N_LANGUAGE");
    setSelectedLang(currentLanguage);
  }, []);

  const changeLanguageAction = (lang) => {
    //set language as i18n
    i18n.changeLanguage(lang);
    localStorage.setItem("I18N_LANGUAGE", lang);
    setSelectedLang(lang);
  };

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
          <NavLink tag={Link} onClick={() => changeLanguageAction("ar")}>
            {t("Arabic")}
          </NavLink>
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

export default withTranslation()(Topbar);
