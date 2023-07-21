
import './App.css';
import Menu from './components/Menu/menu'
import Contact from './components/ContactMe/Contact';
import { Header, ContainerPrincipal} from './main'
import Card from './components/Cards/card'
import { Content,CardsContent, Break, Footer } from './main';
import Fundo1 from './image/vermelho.png'
import Fundo2 from './image/Rectangle (1).png'
import Fundo3 from './image/Rectangle (2).png'
import Fundo4 from './image/Rectangle (3).png'
import Fundo5 from './image/Rectangle (4).png'
import Fundo6 from './image/Rectangle (5).png'


function App() {
  return (
    <div className="App">
      <ContainerPrincipal>
          <Header>
            <Menu/>
          </Header>
          <Content>
            <CardsContent>
              <Card title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl." image={Fundo1}/> 
              <Card title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl." image={Fundo2}/> 
              <Card title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl." image={Fundo3}/> 
              <Card title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl." image={Fundo4}/> 
              <Card title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl." image={Fundo5}/> 
              <Card title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl." image={Fundo6}/> 
            </CardsContent>
          </Content>
          <Footer>
            <Contact></Contact>
          </Footer>
          
      </ContainerPrincipal>
          
       
    </div>
  );
}

export default App;
