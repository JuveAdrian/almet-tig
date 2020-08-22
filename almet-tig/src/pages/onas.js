import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Grid, Card, CardHeader, CardContent, Typography, Box } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import VisibilityIcon from '@material-ui/icons/Visibility';

const Cechy = [
    {
        icon: <HomeIcon style={{ fontSize: '80px' }} />,
        name: 'Produkcja',
        description: 'Wykonujemy elementy instalacji technologicznych i urządzeń poza miejscem ich montażu, co znacząco skraca czas pracy'
    },
    {
        icon: <BuildIcon style={{ fontSize: '80px' }} />,
        name: 'Montaż',
        description: 'Nasi pracownicy to wyspecjalizowani fachowcy, co gwarantuje najwyższą jakość świadczonych usług'
    },
    {
        icon: <VisibilityIcon style={{ fontSize: '80px', textAlign: 'center' }} />,
        name: 'Doradztwo i nadzór',
        description: 'Gwarantujemy stałą pomoc profesjonalistów na każdym etapie powstawania instalacji. Współpracujemy z wieloma biurami projektowymi oraz firmami wykonującymi izolacje termiczne, instalacje elektryczne oraz automatykę'
    }
]

class Onas extends React.Component {
    render () {
        return (
            <div style={{ height: '100vh' }}>
                <Navbar pageName={'O nas'} />
                <Grid container xs={12}>
                    <Grid item xs={11} style={{ padding: '30px 0' }}>
                        <Typography variant="h2" style={{ paddingBottom: '30px', textAlign: 'center' }}>
                            Almet-Tig
                        </Typography>
                        <Typography variant="body1">
                        Nasza firma zajmuje się świadczeniem usług spawalniczych, głównie spawanie stali nierdzewnych, metodą TIG. Wykonujemy kompletne instalacje technologiczne oraz montaż i prefabrykację takich urządzeń jak zbiorniki, bloki zaworowe, układy pompowo zaworowe, skidy, platformy, suszarnie rozpyłowe, cyklony oraz wszelkiego rodzaju konstrukcje. Zatrudniamy profesjonalistów, a naszymi klientami są duże koncerny dostarczające technologię oraz armaturę procesową na całym świecie.
                        </Typography>
                        <Grid container xs={12} spacing={3}  style={{ padding: '30px 0' }} >
                            {Cechy.map((item) => (
                                <Grid item xs={12} sm={6} md={4} >
                                    <Card style={{ minHeight: '360px', border: '1px solid #999' }}>
                                        <Box style={{ fontSize: '8em', textAlign: 'center' }}>
                                            {item.icon}
                                        </Box>
                                        
                                        <CardHeader title={item.name} style={{ textAlign: 'center', paddingTop: '10px' }} />
                                        <Typography variant="body2" style={{ textAlign: 'center', paddingTop: '10px' }}>
                                            {item.description}
                                        </Typography>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid> 
                </Grid>
                <Footer />
            </div>
        )
    }
}

export default Onas;