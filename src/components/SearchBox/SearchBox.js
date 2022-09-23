import { Form } from "reactstrap";

import { TextInput } from "../TextInput"

const SearchBox = (props) => {
    const { className = "" } = props;
    return (
        <Form className={`ev-searchbox ${className}`}>
            <TextInput type="search" placeholder="Organization Search" name="search" />
            <TextInput
                type="submit"
            />
        </Form>
    );
};

export default SearchBox;