import React from 'react';

import { Grid, Typography, Divider, TextField, Button, Box } from '@material-ui/core';

class Footer extends React.Component {
    render () {
        return (
            <Grid container xs={12} style={{ backgroundColor: '#1769aa', color: '#fff', display: 'flex', alignItems: 'flex-end', bottom: '0' }}>

                <Grid item container xs={11} style={{ borderRadius: '20px', border: '1px solid #ddd', backgroundColor: '#1769aa', margin: '20px 0' }}>
                    <Grid item xs={12} md={6} style={{ padding: '30px 20px', textAlign: 'center'}}>
                        <Typography variant="h6" style={{ color: '#ddd' }}>
                            ZADZWOŃ DO NAS !
                        </Typography>
                        <Typography variant="h3" style={{ padding: '20px 0 10px 0' }}> 
                            667-466-431
                        </Typography>
                        <Typography variant="body1" style={{ padding: '20px 60px', color: '#ddd' }}>
                        Nasza firma zajmuje się świadczeniem usług spawalniczych, głównie spawanie stali nierdzewnych, metodą TIG. Wykonujemy kompletne instalacje technologiczne oraz montaż i prefabrykację takich urządzeń jak zbiorniki, bloki zaworowe, układy pompowo zaworowe, skidy, platformy, suszarnie rozpyłowe, cyklony oraz wszelkiego rodzaju konstrukcje.
                        </Typography>
                        <Divider style={{ backgroundColor: '#fff', margin: '40px 50px', color: '#ddd' }} />
                        <Typography variant="h6" style={{ color: '#ddd' }}>
                            NASZ ADRES
                        </Typography>
                        <Typography variant="body1" style={{ color: '#ddd' }}>
                            ul. Polna 22G<br />
                            Sułów 56-300<br />
                            NIP: 916 134 39 80<br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'nowrap' }}>
                        <Box>
                            <form noValidate autoComplete="off" action="mailto:grabkowski.adrian@gmail.com" method="post" style={{ marginBottom: '40px' }}>
                                <TextField id="outlined-basic" name="imie_i_nazwisko" label="Imię i Nazwisko" variant="outlined" style={{ backgroundColor: '#104773', border: 'none', color: '#fff', marginBottom: '20px', marginLeft: '10%', width: '80%' }} />
                                <TextField id="outlined-basic" name="email" label="Email" variant="outlined" style={{ backgroundColor: '#104773', border: 'none', color: '#fff', marginBottom: '20px', marginLeft: '10%', width: '80%' }} />
                                <TextField id="outlined-basic" name="telefon" label="Telefon" variant="outlined" style={{ backgroundColor: '#104773', border: 'none', color: '#fff', marginBottom: '20px', marginLeft: '10%', width: '80%' }} />
                                <TextField id="outlined-basic" name="tresc" label="Treść" variant="outlined" size="medium" multiline="true" rows="6" style={{ backgroundColor: '#104773', border: 'none', color: '#fff', marginBottom: '20px', marginLeft: '10%', width: '80%' }} />
                                <Button label={'Wyślij'} type="submit" style={{ backgroundColor: '#ff9800', width: '80%', color: '#fff', fontWeight: 'bold', padding: '10px 0', marginLeft: '10%' }}>Wyślij</Button>
                            </form>
                        </Box>
                        
                    </Grid>
                </Grid>


                <Grid item xs={10}  md={6} style={{ padding: '20px 30px' }}>
                <Typography variant="h2">
                        Almet-Tig
                    </Typography>
                    
                </Grid>
                <Grid item container xs={10} md={4} style={{ padding: '0px 20px', backgroundColor: '#1769aa' }}>
                    <Grid item xs={6} >
                        <Typography variant="h6">
                            Almet-Tig
                        </Typography>
                        <Typography variant="body1" style={{ paddingTop: '10px' }}>
                            ul. Polna 22G<br />
                            Sułów 56-300<br />
                            NIP: 916 134 39 80<br />
                        </Typography>
                    </Grid>
                    <Grid item xs={6} >
                        <Typography variant="h6">
                           Usługi
                        </Typography>
                        <Typography variant="body1" style={{ textJustify: 'justify' }}>
                            <ul style={{ listStyle: 'none', paddingTop: '10px' }}>
                                <li>Produkcja</li>
                                <li>Montaż</li>
                                <li>Doradztwo i nadzór</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
                <Divider style={{ color: '#fff' }}/>
                <Typography variant="body1" style={{ padding: '20px 0', textAlign: 'left' }}>
                    Almet-Tig 2020 | Develop by Adrian Grabkowski 
                </Typography>
            </Grid>
        )
    }
}

export default Footer;