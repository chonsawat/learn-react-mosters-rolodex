import { Component } from "react";
import Card from "./card.component";

import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return (
          <div key={monster.id} className="mt-5 mb-1">
            <Card id={monster.id} name={monster.name} email={monster.email} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
