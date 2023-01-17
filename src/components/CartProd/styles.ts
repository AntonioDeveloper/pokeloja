import styled from 'styled-components';

export const CartProdContainer = styled.div`
  .chosen-prods {
    .prod-block {
      padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .poke-name, .poke-price {
          font-family: "Montserrat", sans-serif;
        }

        .poke-name {
          font-size: 16px;
          font-weight: bold;
        }

        .poke-price {
          font-size: 14px;
        }

        &:hover {
          box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        }
    }

  }
`