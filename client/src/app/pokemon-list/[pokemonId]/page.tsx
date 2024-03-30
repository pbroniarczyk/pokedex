import React from "react";
import Link from "next/link";
import Image from "next/image";

import type { IPokemon } from "@/core/IPokemon";

const getPokemonDetails = async (pokemonId: string) => {
  const res = await fetch(`http://localhost:8080/pokemon/${pokemonId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const page = async ({ params: { pokemonId } }: { params: { pokemonId: string } }) => {
  const pokemonDetailsData: IPokemon = await getPokemonDetails(pokemonId);

  return (
    <div className="pokemon-details-page">
      <Link href="/pokemon-list">powrót</Link>

      <div className="pokemon-details-page__content flex">
        <Image
          alt={pokemonDetailsData.name}
          src={pokemonDetailsData.image.splash}
          width={200}
          height={200}
          priority
        />

        <aside>
          <h1>{pokemonDetailsData.name}</h1>
          <div className="flex gap-4">
            {pokemonDetailsData.type.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <p>{pokemonDetailsData.description}</p>
        </aside>
      </div>
    </div>
  );
};

export default page;
