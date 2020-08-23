import React from 'react';

import { Grid, Typography, Box, Divider } from '@material-ui/core';
import { GridList, GridListTile, ListSubheader } from '@material-ui/core';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../public/prefabrykacja/', false, /\.(png|jpe?g|svg)$/));

console.log(images);

class Prefabrykacja extends React.Component {
    render () {
        return (
            <div>
                <Navbar pageName={'Prefabrykacja'} />
                <Grid container xs={12}>
                    <Grid item xs={11} style={{ padding: '30px 0' }}>
                        <Typography variant="h2" style={{ paddingBottom: '30px', textAlign: 'center' }}>
                            Almet-Tig
                        </Typography>
                        <Typography variant="body1" style={{ lineHeight: '2em', textAlign: 'center' }}>
                        Na naszym warsztacie produkcyjnym dysponujemy walcami do blachy o grubości 20m, gietarką do blach, spawarką orbitalną. W ostatnim czasie zakupiliśmy również urządzenie laserowe do wycinania elementów z blach, rur oraz profili o grubości do 28mm. Produkujemy również zbiorniki o pojemności do 16m3 oraz średnicy do 3m. Prefabrykujemy także, elementy rurociągów, elementy rurowe o dużym przekroju – kanały, skidy, bloki zaworowe (spawanie orbitalne), konstrukcje wsporcze rurociągów, platformy obsługowe i inne.
                        
                        </Typography>
                        <Divider style={{ margin: '60px' }}/>
                        <Box>
                            <GridList cellHeight={200} cols={4} spacing={5}>
                                <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                                    <ListSubheader component="div" style={{ color: '#000', fontSize: '1.2em', textAlign: 'center' }}>Galeria Prefabrykacji</ListSubheader>
                                </GridListTile>
                            {images.map((el) => (
                                <GridListTile cols={el.cols || 1}>
                                    <Zoom zoomMargin={40}>
                                        <img src={el} style={{ width: '100%'}} />
                                    </Zoom>
                                   
                                </GridListTile>
                            ))}
                            </GridList>
                        </Box>
                        
                    </Grid>
                </Grid>
                <Footer />
            </div>
        )
    }
}

export default Prefabrykacja;