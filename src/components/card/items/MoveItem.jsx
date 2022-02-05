import React from "react";

import "../card.css";

const MoveItem = ({ expandMove, index, move, moveDetails }) => {
  let combinedText;
  if (move.name === moveDetails.name && moveDetails.effect_chance) {
    let attackChance = moveDetails.effect_chance
      ? moveDetails.effect_chance
      : null;

    if (attackChance) {
      let text = moveDetails.effect_entries[0].short_effect;
      combinedText = text.replace(/\$effect_chance/, attackChance);
    }
  } else if (move.name === moveDetails.name)
    combinedText = moveDetails.effect_entries[0].short_effect;

  return (
    <div className="desc__section moves-list__item">
      <div
        className="item__title"
        onClick={(e) => {
          expandMove(e, move, index);
        }}
      >
        {move.name}
      </div>
      {move.name === moveDetails.name ? (
        <div className="item__details">
          <p className="details">type: {moveDetails.type.name}</p>
          <p className="details">
            damage_class: {moveDetails.damage_class.name}
          </p>
          <p className="details">power: {moveDetails.power}</p>
          <p className="details">PP: {moveDetails.pp}</p>
          <p className="details">accuracy: {moveDetails.accuracy}</p>
          <hr />
          <p className="details">{combinedText}</p>
        </div>
      ) : null}
    </div>
  );
};

export default MoveItem;
