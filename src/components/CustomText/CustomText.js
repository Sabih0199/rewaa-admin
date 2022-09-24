const CustomText = (props) => {
  const { size = 16, text, className = "" } = props;
  return <div className={`${className} fs-${size}`}>{text}</div>;
};

export default CustomText;
