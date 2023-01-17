import { Body } from './components/Body/Body';
import { ContentContainer } from './components/Body/styles';
import { PokemonContextProvider } from './context/PokeContext';
import { GlobalStyle } from './styles/global';

export function App() {

  return (
    <PokemonContextProvider>
      <ContentContainer>
        <Body />
      </ContentContainer>
      <GlobalStyle />
    </PokemonContextProvider>
  )
}

