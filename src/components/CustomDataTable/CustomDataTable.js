import DataTable from "react-data-table-component";

const CustomDataTable = (props) => {
  const { className = "", columns = [], data = [] } = props;

  return (
    <div className={`rwa-data-table ${className}`}>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default CustomDataTable;
