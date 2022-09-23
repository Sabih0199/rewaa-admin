import { Button as EvButton } from "reactstrap"

const Button = (props) => {
    const {
        onClick = () => { },
        className = "",
        title,
        isLoading = false,
        disabled,
        type,
        secondary = false,
        size = "lg"
    } = props;
    return (
        <EvButton
            color={secondary ? "secondary" : "primary"}
            outline={secondary}
            type={type}
            disabled={isLoading || disabled}
            onClick={onClick}
            className={`ev-btn ${className} ${secondary ? "ev-btn-secondary" : "ev-btn-primary"} ${size && `ev-btn-${size}`}`}
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
        </EvButton>
    );
};
export default Button;