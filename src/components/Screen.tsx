import { useContext } from "react";
import { PokemonContext } from '../context/PokeContext';

export function Screen() {

  const { pokemon } = useContext(PokemonContext)

  //const testArr = Object.keys(pokemon).map((key) => [key, pokemon[key]])

  console.log("App", pokemon.name);
  return (
    <div className="container">
      <p>{pokemon.name}</p>
    </div>
  )
}