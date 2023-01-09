import { Body } from './components/Body/Body';
import { PokemonContextProvider } from './context/PokeContext';

export function App() {


  return (
    <PokemonContextProvider>
      <Body />
    </PokemonContextProvider>
  )
}

