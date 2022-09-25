import { Spinner } from "reactstrap";

const Loader = (props) => {
  const { className = "" } = props;
  return (
    <div className={`rwa-loader ${className}`}>
      <Spinner />
    </div>
  );
};

export default Loader;
