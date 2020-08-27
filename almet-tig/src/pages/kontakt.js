import React from 'react';

import { Grid, Typography, Divider, TextField, Button } from '@material-ui/core';

import 'react-medium-image-zoom/dist/styles.css'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../public/dladomu/', false, /\.(png|jpe?g|svg)$/));

console.log(images);

class Kontakt extends React.Component {
    render () {
        return (
            <div>
                <Navbar pageName={'Kontakt'} />
                <Grid container xs={12}>
                    <Grid item xs={11} style={{ padding: '30px 0' }}>
                        <Typography variant="h2" style={{ paddingBottom: '30px', textAlign: 'center' }}>
                            Almet-Tig
                        </Typography>
                        <Typography variant="body1" style={{ lineHeight: '2em', textAlign: 'center' }}>
                        Zadzwoń lub wyślij nam e-maila – odpowiemy najszybciej, jak to będzie możliwe! <br /><br />

                        tel.: <strong>+48 667 466 431</strong><br />

                        e-mail: <strong>almet-tig@almet-tig.pl</strong><br />
                        </Typography>
                        <Divider style={{ margin: '30px 0' }} />
                        <form noValidate autoComplete="off" action="mailto:grabkowski.adrian@gmail.com" method="post" style={{ marginBottom: '40px' }}>
                                <TextField id="outlined-basic" name="imie_i_nazwisko" label="Imię i nazwisko" type="input" variant="outlined" style={{ backgroundColor: '#104773', border: 'none', color: '#fff', marginBottom: '20px', marginLeft: '10%', width: '80%' }} />
                                <TextField id="outlined-basic" name="email" label="Email" variant="outlined" style={{ backgroundColor: '#104773', border: 'none', color: '#fff', marginBottom: '20px', marginLeft: '10%', width: '80%' }} />
                                <TextField id="outlined-basic" name="telefon" label="Telefon" variant="outlined" style={{ backgroundColor: '#104773', border: 'none', color: '#fff', marginBottom: '20px', marginLeft: '10%', width: '80%' }} />
                                <TextField id="outlined-basic" name="tresc" label="Treść" variant="outlined" multiline="true" rows="6" style={{ backgroundColor: '#104773', border: 'none', color: '#fff', marginBottom: '20px', marginLeft: '10%', width: '80%' }} />
                                <Button
                                variant="contained"
                                component="label"
                                style={{ float: 'left' }}
                                >
                                Upload File
                                <input
                                    type="file"
                                    name="plik"
                                    style={{ display: "none" }}
                                />
                                </Button>
                                <Button label={'Wyślij'} type="submit" style={{ backgroundColor: '#ff9800', width: '80%', color: '#fff', fontWeight: 'bold', padding: '10px 0', marginLeft: '10%' }}>Wyślij</Button>
                            </form>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        )
    }
}

export default Kontakt;