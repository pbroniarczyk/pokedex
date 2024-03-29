import React, { FC } from "react";
import Link from "next/link";

import type { IPokemon } from "@/core/IPokemon";

type Props = {
  pokemon: IPokemon;
};

const PokemonTile: FC<Props> = ({ pokemon }) => {
  return (
    <div className="pokemon-tile p-10 w-fit">
      <Link href={`/pokemon-list/${pokemon._id}`}>{pokemon.name}</Link>
    </div>
  );
};

export default PokemonTile;
