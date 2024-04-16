import Link from "next/link";
import Navigation from "@/components/Navigation";

import type { IPokemon } from "@/core/IPokemon";
import getPokemonList from "@/utils/getPokemonList";

import PokemonTile from "@/components/PokemonTile";

const PokemonList = async () => {
  const pokemonListData: IPokemon[] = await getPokemonList();

  return (
    <div className="pokemon-list-page w-full max-w-[1366px] mx-auto flex flex-col items-center justify-start p-3 md:p-10 xl:p-24">
      <Navigation label="back" link="/" />

      <h2>PokeList</h2>

      <hr className="my-4" />
      <section className="mt-10 flex justify-center flex-wrap">
        {pokemonListData.map((pokemon) => (
          <PokemonTile key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </div>
  );
};

export default PokemonList;
