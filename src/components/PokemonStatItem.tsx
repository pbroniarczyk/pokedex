import { FC } from "react";

type Props = {
  label: string;
  value: number;
};

const PokemonStatItem: FC<Props> = ({ label, value }) => {
  return (
    <div className="pokemon-details__stat-item flex justify-start items-center">
      <p className="pokemon-details__stat-label w-[130px] text-xs">{label}:</p>
      <p className="pokemon-details__stat-value font-bold">{value || "-"}</p>
    </div>
  );
};

export default PokemonStatItem;
