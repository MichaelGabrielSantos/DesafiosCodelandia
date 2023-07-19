
import './App.css';
import Menu from './components/Menu/menu'
import { Header, ContainerPrincipal} from './main'
import Card from './components/Cards/card'
import { Content } from './components/Menu/style';

function App() {
  return (
    <div className="App">
      <ContainerPrincipal>
          <Header>
            <Menu/>
          </Header>
          <Content>
            <Card/> 
          </Content>
          
      </ContainerPrincipal>
          
       
    </div>
  );
}

export default App;
