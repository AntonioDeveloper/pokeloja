import { useState, useEffect, MouseEvent } from 'react';

export function Counter() {

  const [countProductsCart, setCountProductsCart] = useState<number>(0);

  useEffect(() => {
    console.log("Counter", countProductsCart);
  }, [countProductsCart])

  return (
    <form className="counter">
      <input type="button" id="minus" name="minus" value="-" onClick={
        (e: MouseEvent) => {
          e.preventDefault();
          if (countProductsCart !== 0) {
            setCountProductsCart((countProductsCart) => countProductsCart - 1);
          } else {
            return;
          }
        }
      } />
      <input type="text" id="qtde" name="qtde" placeholder={`${countProductsCart}`} disabled />
      <input type="button" id="plus" name="plus" value="+" onClick={
        (e: MouseEvent) => {
          e.preventDefault();
          setCountProductsCart((countProductsCart) => countProductsCart + 1);
        }
      }
      />
    </form>
  )
}