import React, { useEffect, useState } from "react";
import axios from "axios";

import Loader from "../loader/Loader.jsx";
import PokeItem from "./PokeItem.jsx";

import "./pokeList.css";

const PokeList = ({ handleOpenCard }) => {
  const [pokeList, setPokeList] = useState([]);
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setLoader(false);
        setPokeList(response.data.results);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  if (isLoading) return <Loader />;

  return (
    <section className="pokelist">
      {pokeList.map(({ name }, index) => (
        <PokeItem
          key={name}
          name={name}
          index={index + 1}
          handleOpenCard={handleOpenCard}
        />
      ))}
    </section>
  );
};

export default PokeList;
