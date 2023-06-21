import React from "react";
import{Container, Title, Subtitle,ImagemPrincipal, TextContainer2} from './style'
import MinhaImagemteste from '../../image/illustration.svg';
import { Grid } from '@material-ui/core';

const Menu = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Title>Lorem ipsum dolor sit amet</Title>
                <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</Subtitle>
            </Grid>
            <ImagemPrincipal item xs={6} src={MinhaImagemteste}></ImagemPrincipal>
        </Grid>
    );
};

export default Menu;