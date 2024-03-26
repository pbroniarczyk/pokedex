import React from "react";
import { useEffect, useState } from "react";

import { IPokemon } from "../core/Pokemon";

import Record from "./Record";

export default function RecordList() {
  const [pokemons, setRecords] = useState<IPokemon[]>([]);

  // This method fetches the pokemons from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:8000/pokemon/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const pokemons = await response.json();
      setRecords(pokemons);
    }
    getRecords();
    return;
  }, [pokemons.length]);

  // This method will map out the pokemons on the table
  function pokemonList() {
    return pokemons.map((pokemon) => {
      return <Record pokemon={pokemon} key={pokemon._id} />;
    });
  }

  return (
    <>
      <h3 className="text-lg font-semibold p-4">Employee Records</h3>
      <div className="border rounded-lg overflow-hidden">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&amp;_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Number
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Type
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">{pokemonList()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
