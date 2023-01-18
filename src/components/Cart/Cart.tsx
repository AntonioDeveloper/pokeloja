import { PokemonGeneralType } from '../../@types/PokemonContextType';
import { useState, useEffect } from 'react';
import { CartProd } from '../CartProd/CartProd';
import { CartContainer } from './styles';

interface Products {
  products: any;
  repeated: any;
}

export function Cart({ products, repeated }: Products) {

  const [qtde, setQtde] = useState<number>(0);
  let teste = 0;

  useEffect(() => {
    products.forEach((item: any) => {
      setQtde((item.qtde));

      //console.log("EACH", item.qtde);
    })
  }, [products, repeated.length]);


  teste = qtde;

  const [totalCart, setTotalCart] = useState<number>(0);

  const [finalCart, setFinalCart] = useState<number>(0);

  //console.log("Cart", products, "TESTE", teste);
  //const { pokemonsList } = useContext(PokemonContext)

  // const values: [] = products.map((prod: PokemonGeneralType) => {
  //   //console.log("VALUE", teste);
  //   return prod.price * teste;
  // });
  let finalRes = 0;

  useEffect(() => {

    const result = Array.from(document.querySelectorAll(".total-cart"));
    const totalRes = result.map((res: any) => {
      return parseFloat(res.innerHTML.slice(7, res.innerHTML.length));
    });

    finalRes = totalRes.reduce((acc: number, curr: number) => {
      return acc + curr;
    }, 0);

    setFinalCart(finalRes);
    console.log("TOTAL", totalRes);
  }, [totalCart]);

  function testeEffect() {
    return finalRes;
  }

  useEffect(() => {
    console.log("FINAL", finalRes);
    testeEffect();
  }, [finalRes])
  console.log("FORA", finalCart);
  //console.log("MUDEI", cartArr)

  // const i = cartArr.reduce((acc: number, curr: number) => {
  //   return acc + curr;
  // }, 0);

  // console.log("SOMA", i);

  //console.log("VALUE", prodVal);

  // products.forEach((prod: PokemonGeneralType) => {
  //   setQtde((prodVal: any) => [...prodVal, (prod.price * teste));
  //   console.log("VALUE", teste);
  //   return prod.price * teste;
  // });

  //console.log("PRICES", values)

  //const total = values.reduce((acc: number, curr: number) => acc + curr, 0);

  //console.log("totalCart", totalCart);
  return (
    <CartContainer>
      <div className="cart-container">
        <h1>Carrinho</h1>
        <div className="chosen-prods" >
          {products.map((prod: any) => {
            console.log("MAP", prod, prod.qtde);
            return (
              <CartProd key={prod.id} item={prod} totalCart={totalCart} setTotalCart={setTotalCart} />
            )
          })}
          <p className="total-value"><strong>Total: </strong>R$ {finalCart.toFixed(2)}</p>
        </div>
      </div>
    </CartContainer>
  )
}