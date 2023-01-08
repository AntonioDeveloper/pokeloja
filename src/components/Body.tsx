import { useContext } from "react";
import { PokemonContext } from '../context/PokeContext';
import { PokemonGeneralType } from '../@types/PokemonContextType';

export function Body() {

  const { pokemonsList } = useContext(PokemonContext)

  // pokemonsList.forEach((r: PokemonGeneralType) => {
  //   console.log(r.sprites.front_default);
  // })


  return (
    <div className="container">
      {pokemonsList.map((res: PokemonGeneralType) => {
        return (
          <div key={res.name}>
            <p >{res.name}</p>
            <img src={res.sprites.front_default} />
          </div>
        )
      })}
    </div>
  )
}