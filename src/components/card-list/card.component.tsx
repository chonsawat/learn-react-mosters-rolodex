import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import "./card.styles.css";
import { Monster } from "../../home/home.component";

const CardItem = ({ id, name, email }: Monster) => {
  return (
    <div className="card-container">
      <Card style={{ width: "100%", height: "400px" }}>
        <Card.Img
          variant="top"
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set4&size=180x180`}
        />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={12} bg="danger" />
          </Placeholder>
          <Card.Title>
            <strong>{name}</strong>
          </Card.Title>
          <Card.Text>Email: {email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
