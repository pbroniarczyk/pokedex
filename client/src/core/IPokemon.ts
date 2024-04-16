export interface IPokemonStats {
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
}

export interface IPokemonImage {
  splash: string;
  sprite: string;
  thumbnail: string;
}

export interface IPokemonProfile {
  height: string;
  weight: string;
}

export interface IPokemonEvolution {
  prev?: string[];
  next?: string[];
}

export interface IPokemon {
  id: string;
  description: string;
  evolution?: IPokemonEvolution;
  image: IPokemonImage;
  name: string;
  number: number;
  profile: IPokemonProfile;
  species: string;
  stats: IPokemonStats;
  type: string[];
}
