import { useContext, useState, useEffect } from "react";
import { PokemonContext } from '../../context/PokeContext';
import { PokemonGeneralType, PokeCart } from '../../@types/PokemonContextType';
import { PokemonSprites } from '../../@types/PokemonSprites';
import { NamedAPIResource } from '../../@types/NamedApiResource';
import { Cart } from "../Cart/Cart";

export function Body() {

  const { pokemonsList } = useContext(PokemonContext)

  const [pickedPokem, setPickedPoken] = useState<PokemonGeneralType[]>([]);

  const [repeatedArray, setRepeatedArray] = useState<PokemonGeneralType[]>([]);

  // const [countPokemons, setCountPokemons] = useState<number>(0);

  let qtde = 0;

  // const isArr = Object.prototype.toString.call(pickedPokem) == '[object Array]';
  // pickedPokem.push("Pikachu")

  console.log("TESTE", repeatedArray);

  return (
    <div className="body-container">

      <form className="find-pokemon">
        <input type="text" name="pesquisar" placeholder="Pesquisar" />
        <button type="submit">Buscar</button>
      </form>

      <section className="board">
        {pokemonsList.map((res: PokemonGeneralType) => {

          return (
            <div className="card" key={res.id} onClick={() => {
              const repeatedItem = pickedPokem.find(item => {
                return item === res
              });
              if (!repeatedItem) {
                setPickedPoken((pickedPokem: any) => [...pickedPokem, res]);
              } else {
                setRepeatedArray((repeatedArray) => [...repeatedArray, res]);
                // setCountPokemons((countPokemons) => countPokemons + 1);
                console.log("OPS, já tenho esse item", repeatedItem);
                return;
              }
              console.log("REPEATED", repeatedItem);
            }}>
              <p>{res.name}</p>
              <img src={res.sprites.front_default} />
              <p>Preço: {res.price}</p>
            </div>
          )
        })}
      </section>

      <Cart products={pickedPokem} />

    </div>
  )
}