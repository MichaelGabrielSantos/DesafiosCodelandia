
import './App.css';
import Menu from './components/Menu/menu'
import { Header, ContainerPrincipal} from './main'

function App() {
  return (
    <div className="App">
      <ContainerPrincipal>
          <Header>
            <Menu/>
          </Header>
      </ContainerPrincipal>
          
       
    </div>
  );
}

export default App;
