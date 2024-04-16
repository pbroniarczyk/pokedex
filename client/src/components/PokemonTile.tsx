import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import type { IPokemon } from "@/core/IPokemon";

type Props = {
  pokemon: IPokemon;
};

const PokemonTile: FC<Props> = ({ pokemon }) => (
  <Link href={`/pokemon-list/${pokemon.id}`}>
    <div className="pokemon-tile w-32 lg:w-40 h-32 lg:h-40 rounded-md transition-shadow flex flex-col justify-center items-center hover:shadow-md">
      <Image
        className="object-contain"
        src={pokemon.image.thumbnail}
        alt={pokemon.name}
        width={50}
        height={50}
        placeholder="blur"
        blurDataURL={pokemon.image.sprite}
      />
      <h3 className="mt-3">{pokemon.name}</h3>
    </div>
  </Link>
);

export default PokemonTile;
