import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa';
import CursosFeitos from './componentes/CursosFeitos';
import MinhaLista from './componentes/MinhaLista';

import styled from 'styled-components'


const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg, #013359 35%, #2e5d7f 100%);  
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <CursosFeitos/>
      <MinhaLista/>
    </AppContainer>
  );
}

export default App;
