import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationItem from "./LocationItem.jsx";

import { BackIcon } from "./icons.js";
import "../card.css";

const CardLocations = ({ pokemon, sectionPulled, toggleSectionList }) => {
  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/encounters`)
      .then((response) => {
        filterLocationByVersion(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const filterLocationByVersion = (locationsToFilter) => {
    const LOCATION_LIST = [];
    locationsToFilter.map((element) => {
      element.version_details.map((ver) => {
        if (
          ver.version.name === "red" ||
          (ver.version.name === "blue" && !LOCATION_LIST.includes(element))
        ) {
          LOCATION_LIST.push(element);
        }
      });
    });

    setLocationList(LOCATION_LIST);
  };

  return (
    <section
      className={`card__section card__panel card__desc ${
        sectionPulled ? "card__panel--pulled" : null
      }`}
    >
      <div className="desc__wrapper desc__wrapper--reverse">
        <h3 className="card__subtitle">Locations</h3>
        <button
          className="section__link section__link--back"
          onClick={() => {
            toggleSectionList("sectionLocationsPulled");
          }}
        >
          {BackIcon}
        </button>
      </div>
      <div className="card__moves-list card__panel-list">
        {locationList.map((element, index) => (
          <LocationItem
            key={element.location_area.name}
            location={element.location_area.name}
            index={index}
            version={element.version_details}
          />
        ))}
      </div>
    </section>
  );
};

export default CardLocations;
