import React from 'react';
import {Container,ButtonZ, Icon} from './style'
import play from '../../assets/image/play.svg'

function Button() {
  return (
    <Container>
        <ButtonZ>
          <Icon src={play}   />
          <p>Assistir Agora</p>
          
        </ButtonZ>

        <ButtonZ>
          <p>Assista o Trailer</p>
          
          </ButtonZ>
    </Container>
  );
}

export default Button;
