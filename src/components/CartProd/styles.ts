import styled from 'styled-components';

export const CartProdContainer = styled.div`

.prod-block {
    padding: 10px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .poke-name, .item-price, .total-cart, .cart-qtde {
      font-family: "Montserrat", sans-serif;
      padding-bottom: 10px;
    }

    .poke-name {
      font-size: 16px;
      font-weight: bold;
    }

    .item-price {
      font-size: 14px;
    }

    &:hover {
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    }
}

  
`