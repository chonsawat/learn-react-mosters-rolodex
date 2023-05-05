import { ChangeEventHandler } from "react";
import Form from "react-bootstrap/Form";
import "./search-box.styles.css";

type SearchBoxProps = {
  id?: string;
  value?: string;
  className?: string;
  placeHolderString?: string;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
}

const Searchbar = ({ onSearchChange, placeHolderString, value, id }: SearchBoxProps) => {
  return (
    <Form id={id}>
      <Form.Group className="mx-5">
        <Form.Control
          onChange={onSearchChange} 
          type="text"
          placeholder={placeHolderString}
          value={value}
        />
      </Form.Group>
    </Form>
  );
};

export default Searchbar;
