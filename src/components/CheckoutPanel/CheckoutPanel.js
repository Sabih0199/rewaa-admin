const CheckoutPanel = (props) => {
  const { className = "", data = [] } = props;
  return <div className={`rwa-checkout-panel ${className}`}>{data.length}</div>;
};

export default CheckoutPanel;
