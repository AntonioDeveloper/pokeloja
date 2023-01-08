import { Body } from './components/Body';
import { PokemonContextProvider } from './context/PokeContext';

export function App() {


  return (
    <PokemonContextProvider>
      <Body />
    </PokemonContextProvider>
  )
}

