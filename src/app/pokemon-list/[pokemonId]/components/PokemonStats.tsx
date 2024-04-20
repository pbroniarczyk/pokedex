import { FC } from "react";

import type { PokemonStats } from "@/core/Pokemon";

import PokemonStatItem from "@/components/PokemonStatItem";

type Props = {
  stats: PokemonStats;
};

const PokemonStats: FC<Props> = ({ stats }) => {
  return (
    <div className="pokemon-details__stats mt-14">
      <h2 className="mb-5">Base stats</h2>

      <PokemonStatItem label="HP" value={stats.hp} />
      <PokemonStatItem label="ATTACK" value={stats.attack} />
      <PokemonStatItem label="DEFENSE" value={stats.defense} />
      <PokemonStatItem label="SP. ATTACK" value={stats.spAttack} />
      <PokemonStatItem label="SP. DEFENSE" value={stats.spDefense} />
      <PokemonStatItem label="SPEED" value={stats.speed} />
    </div>
  );
};

export default PokemonStats;
