import { Table } from "reactstrap";
import { Loader } from "../Loader";

const DataTable = (props) => {
  const {
    config,
    data,
    onRowClick,
    loading = false,
    className = "",
    onScrollHandler = () => {},
  } = props;

  const isRowClickable = () => {
    return onRowClick && typeof onRowClick === "function";
  };

  const handleRowClick = (e, dataObj) => {
    if (isRowClickable()) {
      onRowClick(e, dataObj);
    }
  };

  return (
    <div
      className={`table-responsive rwa-data-table ${className}`}
      onScroll={onScrollHandler}
    >
      <Table className="mb-0">
        <thead>
          <tr>
            {config.map((item, index) => {
              return (
                <th
                  className={`${item?.className} ${item?.thClass}`}
                  key={index}
                >
                  {item?.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data &&
            !!data.length &&
            data.map((dataObj, dataIndex) => {
              return (
                <tr
                  key={dataIndex}
                  onClick={(e) => handleRowClick(e, dataObj)}
                  className={`${isRowClickable() ? "pointer" : ""}`}
                >
                  {config.map((item, index) => {
                    return (
                      <td
                        className={`${item?.className} ${item?.tdClass}`}
                        key={index}
                      >
                        {item.render(dataObj, dataIndex)}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          {""}
        </tbody>
      </Table>
      {data && !!data.length && loading && <Loader className="text-center" />}
      {(!data || !data.length) && (
        <div className="d-flex justify-content-center align-items-center py-5">
          {loading ? <Loader /> : <p>{"No Data Available"}</p>}
        </div>
      )}
    </div>
  );
};

export default DataTable;
