import { useContext, useState } from "react";
import { PokemonContext } from '../../context/PokeContext';
import { PokemonGeneralType, PokeCart } from '../../@types/PokemonContextType';
import { PokemonSprites } from '../../@types/PokemonSprites';
import { NamedAPIResource } from '../../@types/NamedApiResource';
import { Cart } from "../Cart/Cart";

export function Body() {

  const { pokemonsList } = useContext(PokemonContext)

  const [pickedPokem, setPickedPoken] = useState<PokeCart[]>([]);

  // const isArr = Object.prototype.toString.call(pickedPokem) == '[object Array]';
  // pickedPokem.push("Pikachu")

  console.log("TESTE", pickedPokem);

  return (
    <div className="body-container">

      <form className="find-pokemon">
        <input type="text" name="pesquisar" placeholder="Pesquisar" />
        <button type="submit">Buscar</button>
      </form>

      <section className="board">
        {pokemonsList.map((res: PokemonGeneralType) => {
          return (
            <div className="card" key={res.id} onClick={(e) => setPickedPoken((pickedPokem: any) => [...pickedPokem, res])}>
              <p>{res.name}</p>
              <img src={res.sprites.front_default} />
            </div>
          )
        })}
      </section>

      <Cart products={pickedPokem} />

    </div>
  )
}