import React from 'react';
import styled from 'styled-components';



export const Container = styled.div`
  height:auto;
  width: 100%;


 margin: 0 auto;

 color:#fff;
 display: flex;


`;

export const ButtonZ = styled.button`
  height:40px;
  width: 45%;
  transform: skew(-24deg);
  transition: 1s;

  background: transparent;
  color:#fff;

  border: 4px solid #658e76;
  
  margin: 40px auto;
  padding: 10px;

  align-items: center;


  display: flex;

  

  

 &:hover{
  cursor: pointer;
  background-color: #658e76;
  transform: rotate3d(24deg);
  height: 45px;
  width: 50%;
  transition: 1s;
 }


 p{
  transform: skew(24deg);
  font-size: 1rem;

  margin:0  auto;
 }

`;

export const Icon = styled.img`
  transform: skew(24deg);

  margin-left: 10px;

`;