import { useContext } from "react";
import { PokemonContext } from '../../context/PokeContext';
import { PokemonGeneralType } from '../../@types/PokemonContextType';

interface Products {
  products: any;

}

export function Cart({ products }: Products) {

  console.log("PROD", products)
  //const { pokemonsList } = useContext(PokemonContext)

  const values: [] = products.map((prod: PokemonGeneralType) => {
    return prod.price;
  })
  console.log("PRICES", values)

  const total = values.reduce((acc: number, curr: number) => acc + curr, 0);

  return (
    <div className="cart-container">
      <h1>Carrinho</h1>
      <div className="chosen-prods" >
        {products.map((prod: any) => {
          return (
            <div className="prod-block" key={prod.id}>
              <img src={prod.sprites.front_default} />
              <p>{prod.name}</p>
              <p>{prod.price}</p>
            </div>
          )
        })}
        <p>Total: R$ {total.toFixed(2)}</p>
      </div>
    </div>
  )
}