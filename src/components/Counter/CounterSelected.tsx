import { useState, useEffect, MouseEvent } from 'react';
import { PokemonGeneralType } from '../../@types/PokemonContextType';
import { CounterStyles } from './styles';

interface CounterSelected {
  prodSelected: PokemonGeneralType;
}

export function CounterSelected({ prodSelected }: CounterSelected) {

  const [countProductsCart, setCountProductsCart] = useState<number>(0);

  useEffect(() => {
    prodSelected.qtde = countProductsCart;
    console.log("Counter", prodSelected.qtde);
  }, [countProductsCart])

  return (
    <CounterStyles>
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
    </CounterStyles>
  )
}