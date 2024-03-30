import React from "react";
import Link from "next/link";

import type { IPokemon } from "@/core/IPokemon";

import PokemonTile from "@/components/PokemonTile";

const getPokemonList = async () => {
  const res = await fetch("http:localhost:8080/pokemon");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const page = async () => {
  const pokemonListData: IPokemon[] = await getPokemonList();

  return (
    <div className="pokemon-list-page w-full">
      <h2>PokeList</h2>
      <Link href="/">powrót</Link>
      <hr className="my-4" />
      <section className="mt-10 flex justify-center gap-4 flex-wrap">
        {pokemonListData.map((pokemon) => (
          <PokemonTile key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </div>
  );
};

export default page;
