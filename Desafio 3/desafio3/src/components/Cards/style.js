import styled from 'styled-components';




export const Container = styled.div`
max-width: 300px;
width: 70%;
max-height: 80%;
height: 100%;
background-color: #fff;
margin: 40px auto;

display: grid;
grid-template-rows: 55% 45%;

filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.10));

`; 


export const CardBody = styled.div`
width: 100%;
height: 100%;

`; 

export const Footer = styled.div`
width: 100%;
height: 100%;
background-color: #fff;



`; 

export const Title = styled.div`
font-size: 0.7rem;
text-align: left;

margin-left: 25px;

`; 

export const Description = styled.div`

p{
    font-size: 12px;
    text-align: left;
    margin: 15px 0 0 25px;
    line-height: 20px;
    width: 180px;

    color: #555;
}

`;

export const ImagemPrincipal = styled.img`
width: 100%;

height: 100%;
background-size: 100%;

`; 







