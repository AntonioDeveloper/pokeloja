import { Screen } from './components/Screen';
import { PokemonContextProvider } from './context/PokeContext';

export function App() {


  return (
    <PokemonContextProvider>
      <Screen />
    </PokemonContextProvider>
  )
}

