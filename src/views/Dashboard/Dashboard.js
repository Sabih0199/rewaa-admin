import { useState } from "react";
import { withTranslation } from "react-i18next";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faChevronDown,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { PageHeader } from "../../components/PageHeader";
import { SearchBox } from "../../components/SearchBox";
import { CustomText } from "../../components/CustomText";
import { TextInput } from "../../components/TextInput";
import { CheckoutPanel } from "../../components/CheckoutPanel";
import { CustomDataTable } from "../../components/CustomDataTable";
import { ProductItems } from "../../data/mock";
import { Colors } from "../../theme/colors";

const Dashboard = ({ t }) => {
  const [cartItemsData, setCartItemsData] = useState(ProductItems);

  return (
    <div className="rwa-dashboard">
      <PageHeader />
      <Container fluid>
        <Row>
          <Col md={8}>
            <SearchBox
              placeholder=""
              label={t("Scan or type product")}
              className="mb-4"
            />
            <CustomDataTable
              data={cartItemsData}
              columns={[
                {
                  name: "",
                  selector: (data) => {
                    return (
                      <FontAwesomeIcon
                        icon={faTrash}
                        color={Colors.darkGray}
                        className="pointer fs-30"
                        width={40}
                        height={40}
                      />
                    );
                  },
                },
                {
                  name: t("Product Name"),
                  selector: (data) => {
                    return (
                      <CustomText
                        text={t(data?.Name) || ""}
                        className="fw-bold"
                        size={14}
                      />
                    );
                  },
                },
                {
                  name: t("Price"),
                  selector: (data) => {
                    return (
                      <TextInput
                        className="price-field-disabled"
                        disabled
                        value={data?.Price || ""}
                      />
                    );
                  },
                },
                {
                  name: t("Quantity"),
                  selector: (data) => {
                    return (
                      <TextInput
                        className="qty-field"
                        type="number"
                        min="1"
                        value={data?.Qty}
                        id={`qty-${data?.id}`}
                        name={`qty-${data?.id}`}
                        onChange={(e) => {
                          let updatedCartItem = cartItemsData.map((item) =>
                            item.id === data.id
                              ? {
                                  ...item,
                                  Qty: Number(e.target.value),
                                }
                              : item
                          );
                          setCartItemsData(updatedCartItem);
                        }}
                      />
                    );
                  },
                },
                {
                  name: t("Total Price"),
                  selector: (data) => {
                    return (
                      <CustomText
                        text={(data?.Price * data?.Qty).toFixed(1) || ""}
                        className="fw-bold"
                      />
                    );
                  },
                },
                {
                  name: "",
                  selector: (data) => {
                    return (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        color={Colors.darkGray}
                        className="pointer"
                      />
                    );
                  },
                },
              ]}
            />
            <div className="rwa-table-ftr bg-white px-2 py-4 d-flex">
              <FontAwesomeIcon
                icon={faShoppingBag}
                color={Colors.lightBlue}
                className="fs-40"
                width={40}
                height={40}
              />
              <div className="ms-3">
                <CustomText text="SKU" className="fw-bold" size={14} />
                <CustomText text={t("aaa")} size={12} />
              </div>
              <div className="ms-3">
                <CustomText text="Tax" size={14} />
                <CustomText text="1.30" size={12} />
              </div>
              <TextInput
                placeholder={t("Discount%")}
                className="discount-field"
              />
            </div>
          </Col>
          <Col md={4}>
            <CheckoutPanel data={cartItemsData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withTranslation()(Dashboard);
