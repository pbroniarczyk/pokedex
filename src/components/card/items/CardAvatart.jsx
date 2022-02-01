import React from "react";

import CardTitle from "./CardTitle";

import "../card.css";

const CardContainer = ({ handleCloseCard, pokemon }) => {
  const { id, name, sprites, types } = pokemon;

  return (
    <section className="card__section card__avatar">
      <CardTitle handleCloseCard={handleCloseCard} name={name} />

      <div className="card__basic">
        <div className="basic__types">
          {types.map((element, index) => (
            <span className={`type type--${element.type.name}`} key={index}>
              {element.type.name}
            </span>
          ))}
        </div>
        <span>
          No. <span className="basic__number">{id}</span>
        </span>
      </div>
      <div className="card__avatar">
        <img src={sprites.front_default} alt={name} />
      </div>
    </section>
  );
};

export default CardContainer;
