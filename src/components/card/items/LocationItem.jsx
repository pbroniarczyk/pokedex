import React from "react";

import "../card.css";

const LocationItem = ({ location, version }) => {
  return (
    <div className="desc__section moves-list__item locations-list__item ">
      <div className="item__title">{location}</div>
      <div className="item__details">
        <div className="item__version">
          <span className="version__title">ver. </span>
          {version.map((element, index) => {
            if (element.version.name === "red") {
              return (
                <span
                  key={index}
                  className="version__orb version__orb--red"
                ></span>
              );
            }
            if (element.version.name === "blue") {
              return (
                <span
                  key={index}
                  className="version__orb version__orb--blue"
                ></span>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default LocationItem;
