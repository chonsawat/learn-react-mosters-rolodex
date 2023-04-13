import { Component } from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log("render monster in CardList: ", monsters);

    return (
      <div>
        {monsters.map((monster) => {
          return (
            <div key={monster.id} className="mt-5">
              <Card style={{ width: "50rem" }} className="m-5">
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} bg="danger" />
                  </Placeholder>
                  <Card.Title>
                    <strong>{monster.name}</strong>
                  </Card.Title>
                  <Card.Text>Email: {monster.email}</Card.Text>
                  <Card.Text>Website: {monster.website}</Card.Text>
                  <Card.Text>Phone: {monster.phone}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
