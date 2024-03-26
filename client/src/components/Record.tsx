import React, { FC } from "react";
import { Link } from "react-router-dom";

import { IPokemon } from "../core/Pokemon";

type Props = {
  pokemon: IPokemon;
};

const Record: FC<Props> = ({ pokemon }) => {
  return (
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{pokemon.number}</td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{pokemon.name}</td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{pokemon.type}</td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        <div className="flex gap-2">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
            to={`/pokemon/${pokemon._id}`}
          >
            Edit
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default Record;
