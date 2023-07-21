import React from "react";
import{Container, CardBody, Footer, Title, Description, ImagemPrincipal} from './style'
import MinhaImagemteste from '../../image/vermelho.png';


const Card= (props) => {
    return (
        <Container>
            <CardBody>
            <ImagemPrincipal item xs={6} src={props.image}></ImagemPrincipal>
                <Footer>
                    
                    <Title>
                        <h1>{props.title}</h1>
                    </Title>

                    <Description>
                        <p>
                        {props.description}
                        </p>
                    </Description>
                </Footer>
            </CardBody>
        </Container>
    );
};

export default Card;