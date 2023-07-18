import styled from 'styled-components';




export const Container = styled.div`
width: 100%;
height: 100%;
background: #D7D4FF;
display: flex;
justify-content: center;
align-items: center;
`; 

export const TextContainer2 = styled.div`


@media (min-width: 769px){
width:40%;
height: 100%;
text-align:left;

}

@media (max-width: 768px){
margin: 0 auto;
height: 40%;
width: 100%;
}
`; 



export const Title = styled.h1`
font-size: 1.4em;
color: #2B2B2B;
text-align:left;
`;


export const Subtitle = styled.h2`

@media (min-width: 769px){
color: #2B2B2B;
width: 100%;
font-size: 1.2rem;
text-align:left;
margin-top: 20px;
font-weight: lighter;

}

@media (max-width: 768px){
width: 100%;
font-size: 0.8rem;
text-align: left;
}

`;




export const ImagemPrincipal = styled.img`

@media (min-width: 769px){
width: 40%;
height: 100%;
margin-left: 20%;
}

@media (max-width: 768px){
margin: 0 auto;
width: 70%;
height: 50%;
}
`;

export const Content = styled.div`

@media (min-width: 769px){
width: 60%;
height: 60%;
margin: 0 auto;
display: flex;
justify-content: space-between;
gap: 20px;

}

@media (max-width: 768px){
width: 90%;
height: 100%;
padding:60px 0 20px 10px;
}

`;


export const Button = styled.button`
width: 100px;
height: 20px;

`;