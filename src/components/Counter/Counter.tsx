import { useState, useEffect, MouseEvent } from 'react';
import { PokemonGeneralType } from '../../@types/PokemonContextType';

interface Counter {
  prod: PokemonGeneralType;
}

export function Counter({ prod }: Counter) {

  const [countProductsCart, setCountProductsCart] = useState<number>(0);

  useEffect(() => {
    prod.qtde = countProductsCart;
    console.log("Counter", prod.qtde);
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