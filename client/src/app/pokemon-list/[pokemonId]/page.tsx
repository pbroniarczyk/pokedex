import Image from "next/image";

import Navigation from "@/components/Navigation";

import type { Pokemon } from "@/core/Pokemon";
import getPokemonDetails from "@/utils/getPokemonDetails,";

const PokemonDetails = async ({ params: { pokemonId } }: { params: { pokemonId: string } }) => {
  const pokemonDetailsData: Pokemon = await getPokemonDetails(pokemonId);
  console.log(pokemonDetailsData);

  return (
    <div className="pokemon-details-page py-12 px-5">
      <Navigation className="mb-24" label="back" link="/pokemon-list" />

      <div className="pokemon-details flex flex-col md:flex-row">
        <Image
          className="pokemon-details__image mx-auto"
          alt={pokemonDetailsData.name}
          src={pokemonDetailsData.image.splash}
          width={200}
          height={200}
          priority
        />

        <div className="pokemon-details__content">
          <h1 className="pokemon-details__name headline text-center mt-5 ">
            {pokemonDetailsData.name}
          </h1>
          <div className="pokemon-details__type-wrapper flex justify-center gap-4 mb-12">
            {pokemonDetailsData.type.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <p className="pokemon-details__desc">{pokemonDetailsData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
