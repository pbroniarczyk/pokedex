import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import type { IPokemon } from "@/core/IPokemon";

type Props = {
  pokemon: IPokemon;
};

const PokemonTile: FC<Props> = ({ pokemon }) => {
  return (
    <Link href={`/pokemon-list/${pokemon._id}`}>
      <div className="pokemon-tile p-10 w-full max-w-40 border border-slate-500 rounded-md">
        <Image
          className="object-contain"
          src={pokemon.image}
          alt={pokemon.name}
          width={50}
          height={50}
        />
        <h3>{pokemon.name}</h3>
      </div>
    </Link>
  );
};

export default PokemonTile;
