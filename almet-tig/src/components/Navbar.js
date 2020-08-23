import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Box,
    Typography
} from '@material-ui/core';
import {
   ArrowBack,
   Person,
   Home,
   Apps,
   Build,
   Info 
} from '@material-ui/icons';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#1769aa',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13),
        paddingTop: '10px'
    },
    listItem: {
        color: '#eceff1'
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Strona Główna',
        listLink: '/'
    },
    {
        listIcon: <Home />,
        listText: 'O nas',
        listLink: '/o-nas'
    },
    {
        listIcon: <Home />,
        listText: 'Realizacje',
        listLink: '/realizacje'
    },
    {
        listIcon: <Home />,
        listText: 'Projektowanie',
        listLink: '/projektowanie'
    },
    {
        listIcon: <Home />,
        listText: 'Prefabrykacja',
        listLink: '/prefabrykacja'
    },
    {
        listIcon: <Home />,
        listText: 'Dla Domu',
        listLink: '/dla-domu'
    },
    {
        listIcon: <ContactMailIcon />,
        listText: 'Kontakt',
        listLink: '/kontakt'
    }
]

const Navbar = (props) => {
    const [state, setState] = useState({
        right: false
    })

    const toogleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    }

    const classes = useStyles();

    const sideList = slider => (
        <Box className={ classes.menuSliderContainer } component="div" onClick={toogleSlider(slider, false)} >
            <Link to='/'>
                <Avatar className={classes.avatar}  alt="avatar" />
            </Link>
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => ( 
                <ListItem button key={key}>
                    <ListItemIcon className={ classes.listItem }>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <Link to={lsItem.listLink}>
                        <ListItemText className={ classes.listItem } primary={lsItem.listText} />
                    </Link> 
                </ListItem>
                 )) }
            </List>
        </Box>
    );

    return (
        <Box component="nav" >
            <AppBar position="sticky" style={{background: '#1769aa'}}>
                <Toolbar>
                    <IconButton onClick={toogleSlider("left", true)}>
                        <MenuIcon style={{ color: '#ffffff' }} />
                    </IconButton>
                    <Typography variant="h5" style={{ color: "#ffffff" }}>
                        {props.pageName}
                    </Typography>
                    <MobilRightMenuSlider 
                        anchor="lfet"
                        open={state.left}
                        onClose={toogleSlider("left", false)}
                        >
                        {sideList("right")}
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;