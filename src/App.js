import React, { useState } from "react";

import PokeList from "./components/pokeList/PokeList.jsx";
import Modal from "./components/modal/Modal.jsx";

const App = () => {
  const [isCardOpen, setCardOpen] = useState(false);
  const [pokemon, setPokemon] = useState("");

  const handleOpenCard = (pokemon) => () => {
    setCardOpen(true);
    setPokemon(pokemon);
  };

  const handleCloseCard = () => {
    setCardOpen(false);
  };

  return (
    <div className="pokedex">
      <h1 className="pokedex__title">Gotta Catch'em All</h1>
      <PokeList handleOpenCard={handleOpenCard} />
      <Modal
        isOpen={isCardOpen}
        pokemon={pokemon}
        handleCloseCard={handleCloseCard}
      />
    </div>
  );
};

export default App;
