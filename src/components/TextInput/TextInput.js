import { Input } from "reactstrap";

const TextInput = (props) => {
  const {
    type = "text",
    className = "",
    invalid,
    valid,
    placeholder,
    value,
    name,
    onChange = () => {},
    disabled,
    ...rest
  } = props;
  return (
    <Input
      value={value}
      className={`rwa-input ${className} ${disabled && "bg-white"}`}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      invalid={invalid}
      valid={valid}
      name={name}
      disabled={disabled}
      {...rest}
    />
  );
};

export default TextInput;
