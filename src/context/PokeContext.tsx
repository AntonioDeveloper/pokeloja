import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from '../components/Api';
import { PokemonGeneralType, FirstPokelist } from '../@types/PokemonContextType';
import axios from "axios";
import { PokemonSprites } from "../@types/PokemonSprites";
import { NamedAPIResource } from "../@types/NamedApiResource";

interface PokemonContextType {
  pokemonsList: PokemonGeneralType
}

interface PokemonContextProviderProps {
  children: ReactNode
}

export const PokemonContext = createContext({} as PokemonContextType);

export function PokemonContextProvider({ children }: PokemonContextProviderProps) {

  const [firstPokeList, setFirsPokeList] = useState<FirstPokelist>({
    name: "",
    url: "",
    results: []
  })

  const [pokemonsList, setPokemon] = useState<PokemonGeneralType>({
    map() { },
    id: 0,
    /** The name for this resource */
    name: "",
    /** The base experience gained for defeating this Pokémon */
    base_experience: 0,
    /** The height of this Pokémon in decimetres */
    height: 0,
    /** Set for exactly one Pokémon used as the default for each species */
    is_default: false,
    /** Order for sorting. Almost national order, except families are grouped together */
    order: 0,
    /** The weight of this Pokémon in hectograms */
    weight: 0,
    /** A list of abilities this Pokémon could potentially have */
    abilities: [],
    /** A list of forms this Pokémon can take on */
    forms: [],
    /** A list of game indices relevent to Pokémon item by generation */
    game_indices: [],
    /** A list of items this Pokémon may be holding when encountered */
    held_items: [],
    /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
    location_area_encounters: "",
    /** A list of moves along with learn methods and level details pertaining to specific version groups */
    moves: [],
    /** A set of sprites used to depict this Pokémon in the game.
     * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
     */
    sprites: {} as PokemonSprites,
    /** The species this Pokémon belongs to */
    species: {} as NamedAPIResource,
    /** A list of base stat values for this Pokémon */
    stats: [],
    /** A list of details showing types this Pokémon has */
    types: [],
  });

  // useEffect(() => {
  //   api.get("?limit=10")
  //     .then((response) => setPokemon(() => response.data))
  //     .catch((err) => {
  //       console.log("Não achei nenhum Pokémon :(" + err);
  //     })
  // }, [])

  let dataArray: any;
  let urlArr: any;
  let finalRes: any;

  useEffect(() => {

    api.get("?limit=10")
      .then((response) => {
        setFirsPokeList(() => response.data);
        urlArr = firstPokeList.results.map((t: FirstPokelist) => t.url);
        dataArray = urlArr.map((url: string) => {
          console.log(url);
          return axios.get(url);
        })
        Promise.all(dataArray).then(res => {
          finalRes = res.map((r: any) => {
            return r.data;
          })
          console.log("Context FinalRes", finalRes);
          setPokemon(() => finalRes)
        })
      })
      .catch((err) => {
        console.log("Não achei nenhum Pokémon :(" + err);
      })
  }, []);


  console.log("Context State", pokemonsList);

  return (
    <PokemonContext.Provider value={{ pokemonsList }}>
      {children}
    </PokemonContext.Provider>
  )
}