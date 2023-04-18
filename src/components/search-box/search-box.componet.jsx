import Form from "react-bootstrap/Form";
import "./search-box.styles.css";

const Searchbar = ({ onSearchChange, placeHolderString, value }) => {
  return (
    <div>
      <Form>
        <Form.Group className="mt-5 mb-3 mx-5">
          <Form.Control
            onChange={onSearchChange}
            type="email"
            placeholder={placeHolderString}
            value={value}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Searchbar;
