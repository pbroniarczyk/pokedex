import React, { useEffect, useState } from "react";
import axios from "axios";

import Loader from "../loader/Loader.jsx";
import CardAvatar from "./items/CardAvatart.jsx";
import CardDescription from "./items/CardDescription.jsx";
import CardMoves from "./items/CardMoves.jsx";
import CardLocations from "./items/CardLocations.jsx";

import "./card.css";

const CardContainer = ({ handleCloseCard, pokemonName }) => {
  console.log("POKEMON", pokemonName);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [isLoaded, setLoader] = useState(false);
  const [sections, setSections] = useState({
    isMovesSectionOpen: false,
    isLocationsSectionOpen: false,
  });

  console.log("current POKEMON", currentPokemon);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setCurrentPokemon(response.data);
        setLoader(true);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const toggleSectionList = (panel) => {
    setSections((prevState) => ({
      [panel]: !prevState[panel],
    }));
  };

  if (isLoaded) {
    const { isMovesSectionOpen, isLocationsSectionOpen } = sections;

    return (
      <div className="card__item">
        <CardAvatar
          pokemon={currentPokemon}
          handleCloseCard={handleCloseCard}
        />
        <CardDescription
          pokemon={currentPokemon}
          toggleSectionList={toggleSectionList}
        />
        <CardMoves
          moves={currentPokemon.moves}
          sectionPulled={isMovesSectionOpen}
          toggleSectionList={toggleSectionList}
        />
        <CardLocations
          pokemon={currentPokemon}
          moves={currentPokemon.moves}
          sectionPulled={isLocationsSectionOpen}
          toggleSectionList={toggleSectionList}
        />
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default CardContainer;
