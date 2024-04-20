const getPokemonDetails = async (pokemonId: string) => {
  const res = await fetch(`http://localhost:8080/pokemon/${pokemonId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default getPokemonDetails;
