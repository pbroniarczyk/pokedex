const getPokemonList = async () => {
  const res = await fetch("http:localhost:8080/pokemon");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default getPokemonList;
