import { Input } from "reactstrap";

const TextInput = (props) => {
    const {
        type,
        className = "",
        invalid,
        valid,
        placeholder,
        value,
        name
    } = props;
    return (
        <Input
            value={value}
            className={`ev-input ${className}`}
            placeholder={placeholder}
            type={type}
            invalid={invalid}
            valid={valid}
            name={name}
        />
    );
};

export default TextInput;