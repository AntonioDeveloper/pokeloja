import React, { useState, useEffect } from "react";
import { CartProdContainer } from "./styles";

interface CartProd {
  item: any;
  totalCart: number;
  setTotalCart: React.Dispatch<React.SetStateAction<number>>;
}
export function CartProd({ item, totalCart, setTotalCart }: CartProd) {
  //console.log("CartProd", item.qtde);

  const [total, setTotal] = useState<number>(0);

  //const [totalArr, setTotalArr] = useState<any>([]);

  let totalArr: any = [];

  useEffect(() => {
    setTotal((item.price * item.qtde));
  }, [item.qtde]);

  useEffect(() => {
    setTotalCart(total);
  }, [total]);


  //console.log("CartProd", total, "TOTAL ARR", totalArr, "QTDE", item.qtde);

  return (
    <CartProdContainer>
      <div className="prod-block" key={item.id}>
        <img src={item.sprites.front_default} />
        <p className="poke-name">{item.name}</p>
        <p className="item-price">R$ {item.price}</p>
        <p className="total-cart">Total: {total.toFixed(2)}</p>
        <p className="cart-qtde">Qtde: {item.qtde}</p>
      </div>
    </CartProdContainer>
  )
}