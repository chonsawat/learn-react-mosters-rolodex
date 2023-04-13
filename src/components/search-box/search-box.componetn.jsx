import { Component } from "react";
import Form from "react-bootstrap/Form";

class Searchbar extends Component {
  render() {
    const { onSearchChange } = this.props;
    return (
      <div>
        <Form>
          <Form.Group className="mt-5 mb-3 mx-5">
            <Form.Control
              onChange={onSearchChange}
              type="email"
              placeholder="Search monsters"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Searchbar;
