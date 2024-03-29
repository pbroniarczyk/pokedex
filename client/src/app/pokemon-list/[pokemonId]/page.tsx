import React from "react";
import Link from "next/link";

import type { IPokemon } from "@/core/IPokemon";

const getPokemonDetails = async (pokemonId: string) => {
  const res = await fetch(`http://localhost:8080/pokemon/${pokemonId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const page = async ({
  params: { pokemonId },
}: {
  params: { pokemonId: string };
}) => {
  const pokemonDetailsData: IPokemon = await getPokemonDetails(pokemonId);

  return (
    <div className="pokemon-details-page">
      <h2>pokemon-details</h2>
      <Link href="/pokemon-list">powrót</Link>
      <h1>{pokemonDetailsData.name}</h1>
    </div>
  );
};

export default page;
