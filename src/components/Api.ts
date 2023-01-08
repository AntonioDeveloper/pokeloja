import axios from 'axios';

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/"
})


// const teste = api.get("?limit=10").then((res) => res.data)
//   .catch((err) => {
//     console.log("Não achei nenhum Pokémon :(" + err);
//   })

// console.log("API", teste);