import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from '../components/Api';
import { PokemonGeneralType } from '../@types/PokemonContextType';
import { NamedAPIResource } from '../@types/NamedApiResource';
import { PokemonSprites } from '../@types/PokemonSprites';

interface PokemonContextType {
  pokemon: PokemonGeneralType
}

interface PokemonContextProviderProps {
  children: ReactNode
}

export const PokemonContext = createContext({} as PokemonContextType);

export function PokemonContextProvider({ children }: PokemonContextProviderProps) {

  const [pokemon, setPokemon] = useState<PokemonGeneralType>({
    id: 0,

    name: "",

    base_experience: 0,

    height: 0,

    is_default: false,

    order: 0,

    weight: 0,

    abilities: [],

    forms: [],

    game_indices: [],

    held_items: [],

    location_area_encounters: "",

    moves: [],

    sprites: {} as PokemonSprites,

    species: {} as NamedAPIResource,

    stats: [],

    types: [],
  });

  useEffect(() => {
    api.get("3")
      .then((response) => setPokemon(() => response.data))
      .catch((err) => {
        console.log("Não achei nenhum Pokémon :(" + err);
      })
  }, [])

  console.log("Context", pokemon);

  return (
    <PokemonContext.Provider value={{ pokemon }}>
      {children}
    </PokemonContext.Provider>
  )
}