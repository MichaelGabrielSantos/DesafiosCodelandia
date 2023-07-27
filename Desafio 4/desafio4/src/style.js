import React from 'react';
import styled from 'styled-components';



export const Container = styled.div`
  height:100vh;
  width: 100%;

  background: linear-gradient(149deg, #628E75 0%, #1A4855 100%);

  display:grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 100px 1fr;


`;


export const Header = styled.div`
  grid-column: 1 / span 2;


`;


export const SideLeft = styled.div`
  height:auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1;

`;

export const TextContainer = styled.div`
  height:auto;
  width: 50%;

  margin: 0 auto;

`;

export const SideRight = styled.div`
  height:auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 2;

`;

export const ImagemPrincipal = styled.img`
  height:60%;
  width: 60%;
  

`;

export const LOGO = styled.img`
 height: 100%;
 width: 10%;
 position: relative;
 top: 40px;
 left: 210px;

`;