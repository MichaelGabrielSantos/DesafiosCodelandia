import React from 'react';
import styled from 'styled-components';
import './App.css';
import {Container, SideLeft} from './style'
import Text from './compoments/Text/text'
import Button from './compoments/buttons/button'

function App() {
  return (
    <Container>
      <SideLeft>
      <Text/>
      <Button/>
      </SideLeft>
      
    </Container>
  );
}

export default App;
