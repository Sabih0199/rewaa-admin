import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faRotateLeft,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { CustomText } from "../CustomText";
import { ToggleBtn } from "../ToggleBtn";
import { TextInput } from "../TextInput";
import { Colors } from "../../theme/colors";

const CheckoutPanel = (props) => {
  const { className = "", data = {} } = props;
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [toggleDiscount, setToggleDiscount] = useState(false);

  return (
    <div className={`rwa-checkout-panel ${className}`}>
      <div className="panel-head mb-4">
        <div className="head-content d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <FontAwesomeIcon icon={faClock} color={Colors.black} />
            <CustomText text="Park Sale" className="fw-bold ms-2" size={12} />
          </div>
          <div className="d-flex">
            <FontAwesomeIcon icon={faRotateLeft} color={Colors.black} />
            <CustomText
              text="Retrieve Sale"
              className="fw-bold ms-2"
              size={12}
            />
          </div>
          <Dropdown
            isOpen={dropdownToggle}
            toggle={() => setDropdownToggle(!dropdownToggle)}
          >
            <DropdownToggle color="" className="settings-btn">
              <FontAwesomeIcon icon={faEllipsisH} color={Colors.black} />
            </DropdownToggle>
            <DropdownMenu end={true}>
              <DropdownItem>item 1</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="panel-body mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <CustomText text="Subtotal" size={14} />
            <CustomText
              text="Tax Exclusive"
              className="ms-2 opacity-25"
              size={12}
            />
          </div>
          <CustomText text="144.70" className="fw-bold" size={14} />
        </div>
        <div className="sep-1px my-3"></div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <CustomText text="Discount" size={14} />
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-2">
              <CustomText text="%" />
              <ToggleBtn
                className="mx-1"
                checked={toggleDiscount}
                onChange={() => {
                  setToggleDiscount(!toggleDiscount);
                }}
              />
              <CustomText text="SAR" />
            </div>
            <TextInput
              className="discount-field"
              type="number"
              min="1"
              value={discount}
              onChange={(e) => {
                setDiscount(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <CustomText text="Discount" size={14} />
          <CustomText text="0.00" className="fw-bold" size={14} />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <CustomText text="Promotions" size={14} />
          <CustomText text="0.00" className="fw-bold" size={14} />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <CustomText text="Tax" size={14} />
          <CustomText text="21.70" className="fw-bold" size={14} />
        </div>
        <div className="sep-1px my-3"></div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <CustomText text="Total" className="fw-bold" size={14} />
            <CustomText
              text="Tax Exclusive"
              className="ms-2 opacity-25"
              size={12}
            />
          </div>
          <div className="d-flex align-items-center">
            <CustomText text="166.40" className="fw-bold" size={14} />
            <CustomText
              text="SAR"
              className="fw-bold ms-2 opacity-25"
              size={14}
            />
          </div>
        </div>
      </div>
      <div className="panel-footer">
        <div className="ftr-content">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <CustomText text="Pay" className="fw-bold text-white" />
              <CustomText
                text={`${data.length} items`}
                className="text-white ms-2"
                size={12}
              />
            </div>
            <CustomText text="166.40 SAR" className="fw-bold text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPanel;
