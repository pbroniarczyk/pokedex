import React from "react";

import { BackIcon } from "./icons";

const CardTitle = ({ handleCloseCard, name }) => {
  if (window.innerWidth <= 678) {
    return (
      <div className="card__title-wrapper">
        <button className="card__return" onClick={handleCloseCard}>
          {BackIcon}
        </button>
        <h2 className="card__title">{name}</h2>
      </div>
    );
  } else return <h2 className="card__title">{name}</h2>;
};

export default CardTitle;
