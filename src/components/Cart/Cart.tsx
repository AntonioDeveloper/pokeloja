import { useContext } from "react";
import { PokemonContext } from '../../context/PokeContext';
import { PokemonGeneralType } from '../../@types/PokemonContextType';

interface Products {
  products: any;
  qtde: number;
}

export function Cart({ products, qtde }: Products) {

  //console.log("PROD", products)
  //const { pokemonsList } = useContext(PokemonContext)

  return (
    <div className="cart-container">
      <h1>Carrinho</h1>
      <div className="chosen-prods" >
        {products.map((prod: any) => {
          return (
            <div className="prod-block" key={prod.id}>
              <img src={prod.sprites.front_default} />
              <p>{prod.name}</p>
              <p>{qtde}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}