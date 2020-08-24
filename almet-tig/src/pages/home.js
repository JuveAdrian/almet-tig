import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Grid, Card, CardHeader, Typography, Box } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import VisibilityIcon from '@material-ui/icons/Visibility';

import jumbofoto from '../public/glowna/jumbo.jpg';
import tarczysnki from '../public/referenecje/Tarczyński_Group_Logo.png';
import tarczynskiPdf from '../public/referenecje/tarczynski.pdf';

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

class Home extends React.Component {
    render () {
        return (
            <div style={{ height: '100vh' }}>
                <Navbar pageName={'Strona Główna'} />
                <Grid container xs={12}>
                    <Grid item xs={11} 
                        style={{ 
                            height: '500px', 
                            width: '100%',
                            background: `url(${jumbofoto})`,
                            backgroundPosition: 'center'
                        }}>
                        <Typography variant="h3" style={{ color: '#fff', display: 'flex', justifyContent: 'center', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.4)', margin: '15% 10%' }}>
                            ALMET-TIG <br /> DOSKONAŁOŚĆ W KAŻDYM CALU
                        </Typography>
                    </Grid>


                    <Grid item xs={11} style={{ padding: '30px 0' }}>
                        <Typography variant="h2" style={{ paddingBottom: '30px', textAlign: 'center' }}>
                            Almet-Tig
                        </Typography>
                        <Typography variant="body1" style={{ lineHeight: '2em', textAlign: 'center' }}>
                        Jesteśmy młodą firmą na polskim rynku ale doświadczenie które posiadamy oraz wiedze w zakresie budowania i spawania instalacji technologicznych w przemyśle spożywczym , chemicznym oraz wielu innych gałęziach przemysłu . Kadra pracownicza posiada wszystkie uprawnienia spawalnicze oraz zakresie bhp którą cały czas doszkalamy . Doświadczenie jakie nabyliśmy jako firma to praca dla największych korporacji na świecie zajmujących się instalacjami technologicznymi , takimi jak GEA, ACO SICCA DANIA, SACOFRINA, INSS-POL, i wiele innych firm które są wiodącymi markami w Europie i nie tylko. Pracowaliśmy dla nich na kontraktach w całej Europie oraz na innych kontynentach . Po ponad 10 latach zbierania doświadczenia wyżej wymienionych firmach postanowiliśmy stworzyć ALMET-TIG który dzięki wiedzy oraz zaangażowaniu z rzesza najlepszą kadre spawalniczą .<br />
                        <strong>Zapraszamy do Współpracy </strong>
                        </Typography>
                        <Grid container xs={12} spacing={3}  style={{ padding: '30px 0' }} >
                            {Cechy.map((item) => (
                                <Grid item xs={12} sm={6} md={4} >
                                    <Card style={{ minHeight: '370px', border: '1px solid #999' }}>
                                        <Box style={{ fontSize: '8em', textAlign: 'center', color: '#ff9800' }}>
                                            {item.icon}
                                        </Box>
                                        
                                        <CardHeader title={item.name} style={{ textAlign: 'center', paddingTop: '10px' }} />
                                        <Typography variant="body2" style={{ textAlign: 'center', padding: '10px 20px', lineHeight: '1.6em' }}>
                                            {item.description}
                                        </Typography>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid> 
                    <Grid item xs={11} style={{ padding: '30px 0' }}>
                        <Typography variant="h4" style={{ paddingBottom: '30px', textAlign: 'center' }}>
                                Pracujemy dla najlepszych
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <a href={tarczynskiPdf} ><img src={tarczysnki} style={{ width: '200px' }} /></a>
                        </Box>
                        
                    </Grid>
                </Grid>
                <Footer />
            </div>
        )
    }
}

export default Home;