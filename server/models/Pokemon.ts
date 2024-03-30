class Pokemon {
  id: number;
  description: string;
  evolution?: { prev?: string[]; next?: string[] };
  image: {
    splash: string;
    thumbnail: string;
  };
  name: string;
  number: number;
  profile: {
    height: string;
    weight: string;
  };
  species: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  };
  type: string[];

  constructor(props: any) {
    this.id = props._id;
    this.description = props.description;
    this.evolution = props.evolution;
    this.image = {
      splash: props.image.hires,
      thumbnail: props.image.thumbnail,
    };
    this.name = props.name[0];
    this.number = props.id;
    this.profile = {
      height: props.profile.height,
      weight: props.profile.weight,
    };
    this.species = props.species;
    this.stats = {
      hp: props.base.HP,
      attack: props.base.Attack,
      defense: props.base.Defense,
      spAttack: props.base["Sp Attack"],
      spDefense: props.base["Sp. Defense"],
      speed: props.base.Speed,
    };
    this.type = props.type;
  }
}

export default Pokemon;
