export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
}

export interface PokemonImage {
  splash: string;
  sprite: string;
  thumbnail: string;
}

export interface PokemonProfile {
  height: string;
  weight: string;
}

export interface PokemonEvolution {
  prev?: string[];
  next?: string[];
}

export interface Pokemon {
  id: string;
  description: string;
  evolution?: PokemonEvolution;
  image: PokemonImage;
  name: string;
  number: number;
  profile: PokemonProfile;
  species: string;
  stats: PokemonStats;
  type: string[];
}
