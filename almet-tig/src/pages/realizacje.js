import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Realizajce extends React.Component {
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
                        Specjalizujemy się w realizacji projektów w następujących branżach:
                        <ul style={{ listStyle: 'none', marginTop: '20px' }}>
                            <li>przemysł spożywczy</li>
                            <li>przemysł mleczarski</li>
                            <li>browarnictwo</li>
                            <li>przemysł chemiczny</li>
                            <li>przemysł farmaceutyczny</li>
                            <li>branża kosmetyczna</li>
                            <li>dla domu</li>
                        </ul>
                        </Typography>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        )
    }
}

export default Realizajce;