import { useContext, useState, useEffect } from "react";
import { PokemonContext } from '../../context/PokeContext';
import { PokemonGeneralType } from '../../@types/PokemonContextType';
import { Cart } from "../Cart/Cart";
import { Counter } from "../Counter/Counter";

export function Body() {

  const { pokemonsList, defineOffset, setDefineOffset, setPokemonName, selectedPokemon } = useContext(PokemonContext)

  let { pokemonName } = useContext(PokemonContext);

  const [pickedPokem, setPickedPoken] = useState<PokemonGeneralType[]>([]);

  const [repeatedArray, setRepeatedArray] = useState<PokemonGeneralType[]>([]);

  function pagForward() {
    setDefineOffset((defineOffset) => defineOffset + 100);
  }
  function pagBackward() {
    if (defineOffset >= 100) {
      setDefineOffset((defineOffset) => defineOffset - 100)
    } else if (defineOffset === 0) {
      return;
    }
  }

  //console.log("TESTE", repeatedArray);

  console.log("REPEATED", repeatedArray);
  let countProd = 1;

  return (
    <div className="body-container">

      <form className="find-pokemon">
        <input type="text" name="pesquisar" placeholder="Pesquisar" />
        <button type="submit" onClick={(e) => {
          e.preventDefault();

          pokemonName = document.querySelector("input")?.value;

          setPokemonName(pokemonName);

        }}>Buscar</button>
      </form>

      <section className="board">
        {
          selectedPokemon.name === undefined ?
            (
              pokemonsList.map((res: PokemonGeneralType) => {
                return (
                  <div className="card" key={res.id} onClick={() => {
                    const repeatedItem = pickedPokem.find(item => {
                      return item === res
                    });
                    if (!repeatedItem) {
                      res.qtde = Number(document.querySelector("#qtde")?.getAttribute("placeholder")) + 1;
                      setPickedPoken((pickedPokem: any) => [...pickedPokem, res]);

                    } else {
                      res.qtde = Number(document.querySelector("#qtde")?.getAttribute("placeholder")) + 1;
                      setRepeatedArray((repeatedArray) => [...repeatedArray, res]);
                      console.log("PLACEH", document.querySelector("#qtde")?.getAttribute("placeholder"));
                      console.log("OPS, já tenho esse item", repeatedItem, "countProd", countProd);
                      return;
                    }
                    console.log("REPEATED", repeatedItem);
                  }}>
                    <Counter />
                    <p>{res.name}</p>
                    <img src={res.sprites.front_default} />
                    <p>Preço: {res.price}</p>
                    <p>Qtde: {res.qtde}</p>
                  </div>
                )
              })
            )
            :
            (
              <div className="card" key={selectedPokemon.id}
                onClick={() => {
                  const repeatedItem = pickedPokem.find(item => {
                    return item === selectedPokemon
                  });
                  if (!repeatedItem) {
                    setPickedPoken((pickedPokem: any) => [...pickedPokem, selectedPokemon]);
                  } else {
                    setRepeatedArray((repeatedArray) => [...repeatedArray, selectedPokemon]);
                    // setCountPokemons((countPokemons) => countPokemons + 1);
                    console.log("OPS, já tenho esse item", repeatedItem);
                    return;
                  }
                }}
              >
                <p>{selectedPokemon.name}</p>
                <img src={selectedPokemon.sprites.front_default} />
                <p>Preço: {selectedPokemon.price}</p>
              </div>
            )
        }
        <button type="submit" onClick={pagBackward}>Voltar</button>
        <button type="submit" onClick={pagForward}>Ir</button>
      </section>

      <Cart products={pickedPokem} />

    </div>
  )
}