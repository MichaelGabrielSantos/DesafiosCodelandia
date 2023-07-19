import React from "react";
import{Container, Title, Subtitle,ImagemPrincipal, TextContainer2, Content, Button} from './style'
import MinhaImagemteste from '../../image/illustration.svg';

const Menu = () => {
    return (
        <Container>
            <Content>
                <TextContainer2 >
                    <Title>Lorem ipsum dolor sit amet</Title>
                    <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</Subtitle>
                    <Button></Button>
                </TextContainer2>
            
                <ImagemPrincipal item xs={6} src={MinhaImagemteste}></ImagemPrincipal>
            </Content>
        </Container>
    );
};

export default Menu;