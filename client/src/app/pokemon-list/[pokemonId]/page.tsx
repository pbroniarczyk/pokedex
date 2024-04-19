import Image from "next/image";

import type { TypeColorVariants } from "@/core/pokemon-type";
import type { Pokemon } from "@/core/Pokemon";

import getPokemonDetails from "@/utils/getPokemonDetails,";

import Navigation from "@/components/Navigation";
import { Icons } from "@/components/Icons";
import PokemonStatItem from "@/components/PokemonStatItem";

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
      className={`pokemon-details-page ${typeColorClass} min-h-screen pt-3 px-1 bg-[url(/pokeball-bg.svg)] bg-no-repeat bg-[length:29vh] bg-[right_0.5rem_top_0.5rem]`}
    >
      <div className="flex justify-between items-center relative">
        <Navigation icon={<Icons.arrow width={48} height={48} />} link="/pokemon-list" />

        <h1 className="pokemon-details__name headline text-center text-white mx-auto">
          <span>{pokemonDetailsData.name}</span>
        </h1>

        <span className="mr-2 text-white italic text-lg">#{pokemonDetailsData.number}</span>
      </div>

      <div className="splash-card shadow-[inset_0_35px_60px_-15px_rgba(0,0,0,0.3)] py-36 px-5 mt-48 rel relative bg-secondary min-h-screen text-white rounded-t-lg">
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

            <div className="pokemon-details__profile flex justify-center items-center mb-10 gap-3">
              <div>
                <p className="flex items-center">
                  <Icons.ruller className="mr-2 rotate-90" width={20} height={20} />
                  {pokemonDetailsData.profile.height}
                </p>
                <p className="text-[10px] text-center text-secondary-300">HEIGHT</p>
              </div>

              <hr className="rotate-90 h-[1px] w-[40px] bg-white block border-0" />

              <div>
                <p className="flex items-center">
                  <Icons.weight className="mr-2" width={20} height={20} />
                  {pokemonDetailsData.profile.weight}
                </p>
                <p className="text-[10px] text-center text-secondary-300">WIDTH</p>
              </div>
            </div>
          </div>
        </div>

        <p className={`pokemon-details__poke-title ${typeColorClass} w-fit px-1`}>
          {pokemonDetailsData.species}
        </p>
        <p className="pokemon-details__desc">{pokemonDetailsData.description}</p>

        <div className="pokemon-details__stats mt-14">
          <h2 className="mb-5">Base stats</h2>

          <PokemonStatItem label="HP" value={pokemonDetailsData.stats.hp} />
          <PokemonStatItem label="ATTACK" value={pokemonDetailsData.stats.attack} />
          <PokemonStatItem label="DEFENSE" value={pokemonDetailsData.stats.defense} />
          <PokemonStatItem label="SP. ATTACK" value={pokemonDetailsData.stats.spAttack} />
          <PokemonStatItem label="SP. DEFENSE" value={pokemonDetailsData.stats.spDefense} />
          <PokemonStatItem label="SPEED" value={pokemonDetailsData.stats.speed} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
