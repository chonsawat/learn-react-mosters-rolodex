import Card from "./card.component";

import "./card-list.styles.css";
import { Monster } from "../../home/home.component";

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list mb-5">
      {monsters.map((monster) => {
        return (
          <div key={monster.id} className="mt-5">
            <Card id={monster.id} name={monster.name} email={monster.email} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
