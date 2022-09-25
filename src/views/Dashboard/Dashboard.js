import { useState } from "react";
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
import { DataTable } from "../../components/DataTable";
import { ProductItems } from "../../data/mock";
import { Colors } from "../../theme/colors";

const COLUMNS = {
  DELETE: "",
  PRODUCT_NAME: "Product Name",
  PRICE: "Price",
  QUANTITY: "Quantity",
  TOTAL_PRICE: "Total Price",
  ACTION: "",
};

const Dashboard = () => {
  const [cartItemsData, setCartItemsData] = useState(ProductItems);

  return (
    <div className="rwa-dashboard">
      <PageHeader />
      <Container fluid>
        <Row>
          <Col md={8}>
            <SearchBox
              placeholder=""
              label="Scan or type product"
              className="mb-4"
            />
            <DataTable
              data={cartItemsData}
              config={[
                {
                  title: COLUMNS.DELETE,
                  render: (data) => {
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
                  title: COLUMNS.PRODUCT_NAME,
                  render: (data) => {
                    return (
                      <CustomText
                        text={data?.Name || ""}
                        className="fw-bold"
                        size={14}
                      />
                    );
                  },
                },
                {
                  title: COLUMNS.PRICE,
                  tdClass: "price-field-disabled",
                  render: (data) => {
                    return <TextInput disabled value={data?.Price || ""} />;
                  },
                },
                {
                  title: COLUMNS.QUANTITY,
                  tdClass: "qty-field",
                  render: (data) => {
                    return (
                      <TextInput
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
                  title: COLUMNS.TOTAL_PRICE,
                  render: (data) => {
                    return (
                      <CustomText
                        text={(data?.Price * data?.Qty).toFixed(1) || ""}
                        className="fw-bold"
                      />
                    );
                  },
                },
                {
                  title: COLUMNS.ACTION,
                  render: (data) => {
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
            <div className="rwa-table-ftr bg-white px-2 pt-2 pb-4 d-flex">
              <FontAwesomeIcon
                icon={faShoppingBag}
                color={Colors.lightBlue}
                className="fs-40"
                width={40}
                height={40}
              />
              <div className="ms-3">
                <CustomText text="SKU" className="fw-bold" size={14} />
                <CustomText text="aaa" size={12} />
              </div>
              <div className="ms-3">
                <CustomText text="Tax" size={14} />
                <CustomText text="1.30" size={12} />
              </div>
              <TextInput placeholder="Discount%" className="discount-field" />
            </div>
          </Col>
          <Col md={4}>
            <CheckoutPanel data={ProductItems} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
