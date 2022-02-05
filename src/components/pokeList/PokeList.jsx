import React from "react";

import { useFetch } from "../HOOKS/useFetch";

import Loader from "../loader/Loader.jsx";
import PokeItem from "./PokeItem.jsx";

import "./pokeList.css";

const PokeList = ({ handleOpenCard }) => {
  const { data, isLoading } = useFetch({
    url: "https://pokeapi.co/api/v2/pokemon/?limit=151",
  });

  if (isLoading && !data) return <Loader />;
  console.log(isLoading, data);

  return (
    <section className="pokelist">
      {data && data.results ? (
        data.results.map(({ name }, index) => (
          <PokeItem
            key={name}
            name={name}
            index={index + 1}
            handleOpenCard={handleOpenCard}
          />
        ))
      ) : (
        <p>test</p>
      )}
    </section>
  );
};

export default PokeList;
