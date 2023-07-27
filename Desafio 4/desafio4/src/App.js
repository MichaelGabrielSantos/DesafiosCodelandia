import React from 'react';
import styled from 'styled-components';
import './App.css';
import {Container, SideLeft, TextContainer, SideRight, ImagemPrincipal, Header, LOGO} from './style'
import Text from './compoments/Text/text'
import Button from './compoments/buttons/button'
import chihiro from './assets/image/illustration.png'
import logo from './assets/image/logo.png'

function App() {
  return (
    <Container>
      <Header>
        <LOGO src={logo}/>
      </Header>
      <SideLeft>
        <TextContainer>
          <Text/>
          <Button/>
        </TextContainer>
      </SideLeft>
      <SideRight>
        <ImagemPrincipal src={chihiro}/>

        
      </SideRight>
      
    </Container>
  );
}

export default App;
