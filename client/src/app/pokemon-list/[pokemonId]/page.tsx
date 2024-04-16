import Link from "next/link";
import Image from "next/image";

import type { IPokemon } from "@/core/IPokemon";
import getPokemonDetails from "@/utils/getPokemonDetails,";

import "./pokemon-details.css";

const PokemonDetails = async ({ params: { pokemonId } }: { params: { pokemonId: string } }) => {
  const pokemonDetailsData: IPokemon = await getPokemonDetails(pokemonId);

  return (
    <div className="pokemon-details-page">
      <Link href="/pokemon-list">powrót</Link>

      <div className="pokemon-details__content flex">
        <Image
          alt={pokemonDetailsData.name}
          src={pokemonDetailsData.image.splash}
          width={200}
          height={200}
          priority
        />

        <aside>
          <h1 className="pokemon-details__name">{pokemonDetailsData.name}</h1>
          <div className="pokemon-details__type-wrapper flex gap-4">
            {pokemonDetailsData.type.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <p className="pokemon-details__desc">{pokemonDetailsData.description}</p>
        </aside>
      </div>
    </div>
  );
};

export default PokemonDetails;
