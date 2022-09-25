import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "../TextInput";
import { Colors } from "../../theme/colors";

const SearchBox = (props) => {
  const {
    className = "",
    handleSearch = () => {},
    placeholder = "Search...",
    label = "Search Here",
  } = props;
  return (
    <div className={`rwa-searchbox ${className}`}>
      <span className="search-label">{label}</span>
      <FontAwesomeIcon
        icon={faSearch}
        color={Colors.textPrimary}
        className="search-icon"
      />
      <TextInput
        type="search"
        placeholder={placeholder}
        name="search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
