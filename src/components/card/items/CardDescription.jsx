import React from "react";

import { ForwardIcon } from "./icons";
import "../card.css";

const CardContainer = ({ pokemon, toggleSectionList }) => {
  return (
    <section className="card__section card__desc">
      <div className="desc__wrapper">
        <span className="stat__name desc__section">
          height: <span className="stat__value">{pokemon.height}</span>
        </span>
        <span className="stat__name desc__section">
          weight: <span className="stat__value">{pokemon.weight}</span>
        </span>
      </div>
      <div className="desc__section">
        <h3 className="card__subtitle">Stats</h3>
        <div className="card__stats">
          {pokemon.stats.map((element, index) => (
            <span key={index} className="stat__name">
              {element.stat.name}:{" "}
              <span className="stat__value">{element.base_stat}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="desc__section">
        <h3 className="card__subtitle">Abilities</h3>
        <div className="card__abilities">
          {pokemon.abilities.map((element, index) => (
            <span key={index} className="ability__name">
              {element.ability.name}
            </span>
          ))}
        </div>
      </div>
      <div className="desc__section desc__wrapper">
        <h3 className="card__subtitle">Moves</h3>
        <button
          className="section__link"
          onClick={() => {
            toggleSectionList("isMovesSectionOpen");
          }}
        >
          {ForwardIcon}
        </button>
      </div>
      <div className="desc__section desc__wrapper">
        <h3 className="card__subtitle">Locations</h3>
        <button
          className="section__link"
          onClick={() => {
            toggleSectionList("isLocationsSectionOpen");
          }}
        >
          {ForwardIcon}
        </button>
      </div>
    </section>
  );
};

export default CardContainer;
