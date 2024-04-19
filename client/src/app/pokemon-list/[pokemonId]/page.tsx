import Image from "next/image";

import type { TypeColorVariants } from "@/core/pokemon-type";

import Navigation from "@/components/Navigation";
import { Icons } from "@/components/Icons";

import type { Pokemon } from "@/core/Pokemon";
import getPokemonDetails from "@/utils/getPokemonDetails,";

const typeVariants: TypeColorVariants = {
  bug: "bg-type-bug",
  dark: "bg-type-dark",
  dragon: "bg-type-dragon",
  electric: "bg-type-electric",
  fairy: "bg-type-fairy",
  fighting: "bg-type-fighting",
  fire: "bg-type-fire",
  flying: "bg-type-flying",
  ghost: "bg-type-ghost",
  normal: "bg-type-normal",
  grass: "bg-type-grass",
  ground: "bg-type-ground",
  ice: "bg-type-ice",
  poison: "bg-type-poison",
  psychic: "bg-type-psychic",
  rock: "bg-type-rock",
  steel: "bg-type-steel",
  water: "bg-type-water",
};

const PokemonDetails = async ({ params: { pokemonId } }: { params: { pokemonId: string } }) => {
  const pokemonDetailsData: Pokemon = await getPokemonDetails(pokemonId);

  const mainType = pokemonDetailsData.type[0].toLocaleLowerCase();
  const typeColorClass = typeVariants[mainType as keyof TypeColorVariants];

  return (
    <div
      className={`pokemon-details-page ${typeColorClass} min-h-screen pt-12 px-1 bg-[url(/pokeball-bg.svg)] bg-no-repeat bg-[length:29vh] bg-[right_0.5rem_top_0.5rem]`}
    >
      <div className="flex items-center relative px-5">
        <Navigation className="absolute text-white" icon={<Icons.arrow />} link="/pokemon-list" />

        <h1 className="pokemon-details__name headline text-center text-white mx-auto">
          {pokemonDetailsData.name}
        </h1>
      </div>

      <div className="splash-card py-36 px-5 mt-48 rel relative bg-secondary min-h-screen text-white rounded-t-lg">
        <div className="pokemon-details  flex flex-col md:flex-row">
          <Image
            className="pokemon-details__image absolute -top-36 left-2/4 -translate-x-2/4"
            alt={pokemonDetailsData.name}
            src={pokemonDetailsData.image.splash}
            width={250}
            height={250}
            priority
          />

          <div className="pokemon-details__content">
            <div className="pokemon-details__type-wrapper flex justify-center gap-4 mb-12">
              {pokemonDetailsData.type.map((item) => (
                <span
                  key={item}
                  className={`${typeVariants[item.toLocaleLowerCase() as keyof TypeColorVariants]} py-1 px-4 rounded-full`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="pokemon-details__desc">{pokemonDetailsData.description}</p>
      </div>
    </div>
  );
};

export default PokemonDetails;
