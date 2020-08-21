import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Onas extends React.Component {
    render () {
        return (
            <div>
                <Navbar pageName={'O nas'} />
                O nas
                <Footer />
            </div>
        )
    }
}

export default Onas;