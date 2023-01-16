import { PokemonGeneralType } from '../../@types/PokemonContextType';
import { useState, useEffect } from 'react';

interface Products {
  products: any;
}

export function Cart({ products }: Products) {

  const [qtde, setQtde] = useState<number>(0);

  useEffect(() => {
    products.forEach((item: any) => {
      setQtde(item.qtde);
      console.log("EACH", item.qtde);
    })
  }, [products]);



  console.log("Cart", products)
  //const { pokemonsList } = useContext(PokemonContext)

  const values: [] = products.map((prod: PokemonGeneralType) => {
    console.log("VALUE", prod.qtde);
    return prod.price * prod.qtde;
  })
  console.log("PRICES", values)

  const total = values.reduce((acc: number, curr: number) => acc + curr, 0);

  return (
    <div className="cart-container">
      <h1>Carrinho</h1>
      <div className="chosen-prods" >
        {products.map((prod: any) => {
          console.log("MAP", prod, prod.qtde);
          return (
            <div className="prod-block" key={prod.id}>
              <img src={prod.sprites.front_default} />
              <p>{prod.name}</p>
              <p>{prod.price}</p>
              <p className="cart-qtde">{qtde}</p>
            </div>
          )
        })}
        <p>Total: R$ {total.toFixed(2)}</p>
      </div>
    </div>
  )
}