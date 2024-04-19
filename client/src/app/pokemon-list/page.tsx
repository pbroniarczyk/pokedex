import Navigation from "@/components/Navigation";
import { Icons } from "@/components/Icons";

import type { Pokemon } from "@/core/Pokemon";
import getPokemonList from "@/utils/getPokemonList";

import PokemonTile from "@/components/PokemonTile";

const PokemonList = async () => {
  const pokemonListData: Pokemon[] = await getPokemonList();

  return (
    <div className="pokemon-list-page w-full max-w-[1366px] mx-auto flex flex-col items-center justify-start p-3 md:p-10 xl:p-24">
      <div className="flex items-center relative w-full justify-start">
        <Navigation icon={<Icons.arrow width={48} height={48} />} link="/" />
      </div>

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
