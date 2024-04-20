import { FC } from "react";

import { Icons } from "@/components/Icons";

type Props = {
  label: string;
  value: string;
};

const PokemonProfileStatItem: FC<Props> = ({ label, value }) => {
  return (
    <div className="pokemon-details__profile-stat-item">
      <p className="flex items-center">
        <Icons.ruller className="mr-2 rotate-90" width={20} height={20} />
        {value}
      </p>
      <p className="text-[10px] text-center text-secondary-300">{label}</p>
    </div>
  );
};

export default PokemonProfileStatItem;
