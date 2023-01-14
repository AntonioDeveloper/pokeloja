import React, { createContext, ReactNode, useState, useEffect } from "react";
import { api } from '../components/Api';
import { PokemonGeneralType, FirstPokelist } from '../@types/PokemonContextType';
import axios from "axios";
import { PokemonSprites } from "../@types/PokemonSprites";
import { NamedAPIResource } from "../@types/NamedApiResource";

interface PokemonContextType {
  pokemonsList: PokemonGeneralType;
  defineOffset: number;
  setDefineOffset: React.Dispatch<React.SetStateAction<number>>;
  pokemonName: string | undefined;
  setPokemonName: React.Dispatch<React.SetStateAction<string | undefined>>
  selectedPokemon: PokemonGeneralType
  setSelectedPokemon: React.Dispatch<React.SetStateAction<PokemonGeneralType>>
}

interface PokemonContextProviderProps {
  children: ReactNode
}

export const PokemonContext = createContext({} as PokemonContextType);

export function PokemonContextProvider({ children }: PokemonContextProviderProps) {

  const [firstPokeList, setFirstPokeList] = useState<FirstPokelist>({
    name: "",
    url: "",
    results: []
  })

  const [selectedPokemon, setSelectedPokemon] = useState<PokemonGeneralType>({
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

    price: 0
  });

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

    price: 0
  });

  const [defineOffset, setDefineOffset] = useState<number>(0);

  const [pokemonName, setPokemonName] = useState<string | undefined>("");

  let dataArray: any;
  let urlArr: any;
  let finalRes: any;


  //Primeiro acesso, traz só o nome e as URLs
  useEffect(() => {

    api.get(`?limit=100&offset=0`)
      .then((response) => {
        setFirstPokeList(response.data);
      })
      .catch((err) => {
        console.log("Não achei nenhum Pokémon :(" + err);
      })
  }, []);

  useEffect(() => {
    //Traz a lista de Nome e URLs

    api.get(`?limit=100&offset=${defineOffset}`)
      .then((response) => {
        setFirstPokeList(response.data);
      })
      .catch((err) => {
        console.log("Não achei nenhum Pokémon :(" + err);
      })
  }, [defineOffset]);

  useEffect(() => {
    //ACESSA AS URLs e obtém mais dados dos Pokemons
    //console.log("EFFECT", firstPokeList);

    urlArr = firstPokeList.results.map((t: FirstPokelist) => t.url);
    dataArray = urlArr.map((url: string) => {
      return axios.get(url);
    })
    Promise.all(dataArray).then(res => {
      finalRes = res.map((r: any) => {
        r.data.price = parseFloat(((Math.random() * (100 - 10 + 1)) + 10).toFixed(2));
        return r.data;
      });
      //console.log("Context FinalRes", finalRes);
      setPokemon(() => finalRes)
    })
  }, [firstPokeList]);

  //console.log(pokemonName);

  //Busca o pokemon procurado na barra Pesquisa
  useEffect(() => {
    api.get(`${pokemonName}`)
      .then((response) => {
        setSelectedPokemon(response.data)
      })
      .catch((err) => {
        console.log(err, "Pokémon não encontrado.");
      });
  }, [pokemonName]);

  //console.log("Offset Context", defineOffset);

  return (
    <PokemonContext.Provider value={{ pokemonsList, defineOffset, setDefineOffset, selectedPokemon, setSelectedPokemon, pokemonName, setPokemonName }}>
      {children}
    </PokemonContext.Provider>
  )
}