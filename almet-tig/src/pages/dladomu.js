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
  
const images = importAll(require.context('../public/dladomu/', false, /\.(png|jpe?g|svg)$/));

console.log(images);

class DlaDomu extends React.Component {
    render () {
        return (
            <div>
                <Navbar pageName={'Realizacje'} />
                <Grid container xs={12}>
                    <Grid item xs={11} style={{ padding: '30px 0' }}>
                        <Typography variant="h2" style={{ paddingBottom: '30px', textAlign: 'center' }}>
                            Almet-Tig
                        </Typography>
                        <Typography variant="body1" style={{ lineHeight: '2em', textAlign: 'center' }}>
                        Realizujemy projekty dla domu.
                        </Typography>
                        <Divider style={{ margin: '60px' }}/>
                        <Box>
                            <GridList cellHeight={200} cols={4} spacing={5}>
                                <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                                    <ListSubheader component="div" style={{ color: '#000', fontSize: '2em', textAlign: 'center' }}>Galeria dla domu</ListSubheader>
                                </GridListTile>
                            {images.map((el) => (
                                <GridListTile cols={el.cols || 1}>
                                    <Zoom zoomMargin={40}>
                                        <img src={el} alt={el} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
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

export default DlaDomu;