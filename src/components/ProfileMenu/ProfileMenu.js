import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Colors } from "../../theme/colors";

const ProfileMenu = ({ t }) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);

  return (
    <Dropdown
      isOpen={dropdownToggle}
      toggle={() => setDropdownToggle(!dropdownToggle)}
    >
      <DropdownToggle color="">
        <FontAwesomeIcon icon={faEllipsisV} color={Colors.black} />
      </DropdownToggle>
      <DropdownMenu end={true}>
        <DropdownItem>
          <FontAwesomeIcon icon={faRightFromBracket} color={Colors.black} />
          <span className="ms-2">{t("Logout")}</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default withTranslation()(ProfileMenu);
