import styled from 'styled-components';

export const ContentContainer = styled.main`
  width: 100%;
  min-height: 100%;

  .body-container {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;

    .search-bar {
      width: 100%;
      padding: 15px;

      .find-pokemon {
        input {
          border: none;
          border-bottom: 1px solid #000;
          margin-right: 10px;
        }

        button {
          border: none;
          border-radius: 0;
          padding: 15px;
          background-color: #000;
          color: #fff;
        }
      }
    }

    .control-buttons {
      width: 70%;
      display: flex;
      justify-content: center;

      button {
        margin-right: 10px;
        margin-left: 10px;
        border: none;
        border-radius: 0;
        padding-top: 10px;
        padding-bottom: 10px;
        width: 100px;
        background-color: #000;
        color: #fff;
      }
    }
  }

  .board-cart {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .board {
      width: 70%;
      min-height: 100%;
      padding: 15px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      column-gap: 5px;
      row-gap: 5px;

      .card {
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
  }
  
`