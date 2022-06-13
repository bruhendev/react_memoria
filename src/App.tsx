import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png'

function App() {
  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} alt="logo" width="200" />
        </C.LogoLink>

        <C.InfoArea>
          ...
        </C.InfoArea>

        <button>Reinicar</button>
      </C.Info>
      <C.GridArea>
        ...
      </C.GridArea>
    </C.Container>
  );
}

export default App;
