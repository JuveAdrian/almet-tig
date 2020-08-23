import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Kontakt extends React.Component {
    render () {
        return (
            <div>
                <Navbar pageName={'Kontakt'} />
               
                <Footer />
            </div>
        )
    }
}

export default Kontakt;