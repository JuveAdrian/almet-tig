import React from 'react';

import { Grid, Typography, Divider} from '@material-ui/core';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Projektowanie extends React.Component {
    render () {
        return (
            <div>
                <Navbar pageName={'Projektowanie'} />
                <Grid container xs={12}>
                    <Grid item xs={11} style={{ padding: '30px 0' }}>
                        <Typography variant="h2" style={{ paddingBottom: '30px', textAlign: 'center' }}>
                            Almet-Tig
                        </Typography>
                        <Typography variant="body1" style={{ lineHeight: '2em', textAlign: 'center' }}>
                        Firma ALMET-TIG zajmuje się również projektowaniem: procesów technologicznych, rurociągów, bloków zaworowych, skidów, zbiorników, platform i konstrukcji wsporczych wraz z obliczeniami statyczno-wytrzymałościowymi. Nasi projektanci są członkami EHEDG (Europejskie Stowarzyszenie Inżynierów, Projektantów i Konstruktorów).
                        <br /><br />
                        <strong>Nasi projektanci są w stanie wykonać:</strong>
                        <Divider />
                        <ul style={{ listStyle: 'none', marginTop: '20px' }}>
                            <li>Projektowanie procesu technologicznego</li>
                            <li>Schematy PFD</li>
                            <li>Obliczenia hydrauliczne, cieplne i mechaniczne</li>
                            <li>Schematy P&ID</li>
                            <li>Dobór urządzeń procesowych, armatury zaworowej oraz kontrolno-pomiarowej</li>
                            <li>Listę wyposażenia</li>
                            <li>Modele 3D i wizualizacja</li>
                            <li>Modele instalacji 3D zgodnie ze schematami P&ID klienta</li>
                            <li>Rzuty (Layout)</li>
                            <li>Rysunki robocze</li>
                            <li>Listę materiałów</li>
                            <li>Pomiary istniejących obszarów (także skanowanie 3D)</li>
                            <li>Aktualizacja PID (inwentaryzacja sprzętu i rurociągów)</li>
                        </ul>
                        </Typography>
                        
                        
                    </Grid>
                </Grid>
                <Footer />
            </div>
        )
    }
}

export default Projektowanie;