import { Button as RwaButton } from "reactstrap";

const Button = (props) => {
  const {
    onClick = () => {},
    className = "",
    title,
    isLoading = false,
    disabled,
    type,
    secondary = false,
    size = "md",
  } = props;
  return (
    <RwaButton
      color={secondary ? "secondary" : "primary"}
      outline={secondary}
      type={type}
      disabled={isLoading || disabled}
      onClick={onClick}
      className={`rwa-btn ${className} ${
        secondary ? "rwa-btn-secondary" : "rwa-btn-primary"
      } ${size && `rwa-btn-${size}`}`}
    >
      {isLoading ? (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      ) : (
        title
      )}
    </RwaButton>
  );
};
export default Button;
