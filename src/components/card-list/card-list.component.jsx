import { Component } from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import "./card-list.styles.css";
import "./card.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    // console.log("render monster in CardList: ", monsters);

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <div key={monster.id} className="mt-5 card-container">
              <Card style={{ width: "20rem" }} className="">
                <Card.Img
                  variant="top"
                  alt={`monster ${monster.name}`}
                  src={`https://robohash.org/${monster.id}?set=set4&size=180x180`}
                />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={12} bg="danger" />
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
