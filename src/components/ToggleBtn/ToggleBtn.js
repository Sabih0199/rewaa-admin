const ToggleBtn = (props) => {
  const {
    checked = false,
    value = null,
    onChange = () => {},
    className = "",
  } = props;

  return (
    <div className={`rwa-toggle-switch-btn d-flex ${className}`}>
      <input
        className={checked ? "switched" : ""}
        type="checkbox"
        checked={checked}
        onChange={() => onChange(value)}
        id="switch-toggle"
      />
      <label htmlFor="switch-toggle"></label>
    </div>
  );
};
export default ToggleBtn;
