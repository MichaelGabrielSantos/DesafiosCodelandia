import styled from 'styled-components';

export const App = styled.div`
width: 100%;
height: 100vh;
`; 


export const ContainerPrincipal = styled.div`
width: 100%;
height: 100vh;

`;

export const Header = styled.div`
width: 100%;
height: 44vh;
`; 

export const Content = styled.div`
width: 100%;
background-color: #F9F9F9;
height: auto;
display: flex;

@media (max-width: 767px){
    
}

`; 

export const CardsContent = styled.div`


width: 70%;
height: 100%;
background-color: #F9F9F9;

display: grid;
grid-template-columns: repeat(3, 1fr); /* Cria 4 colunas de tamanho igual */
grid-template-rows: repeat(2, 350px); /* Cria 2 linhas de 100 pixels de altura cada */


margin: 0 auto;

@media (max-width: 767px){
    display: list-item;
}

`; 

export const Break = styled.div`
flex-basis: 100%;
height: 0;
`; 


