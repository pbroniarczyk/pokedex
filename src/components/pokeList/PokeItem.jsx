import React from "react";

import "./pokeItem.css";

const importAllSprites = (r) => {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
};

const images = importAllSprites(
  require.context("../../assets/img/sprites", false, /.*\.png/)
);
let zerosAmount;

const PokeList = ({ handleOpenCard, index, name }) => {
  if (index < 10) zerosAmount = "00";
  if (index >= 10 && index < 100) zerosAmount = "0";
  if (index >= 100) zerosAmount = "";

  return (
    <div className="pokelist__item" onClick={handleOpenCard(name)}>
      <img
        className="pokelist__sprite"
        src={images[`${zerosAmount + index}.png`]}
        alt={`${name}-sprite`}
      />
      {name}
    </div>
  );
};

export default PokeList;
