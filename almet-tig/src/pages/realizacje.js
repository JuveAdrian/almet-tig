import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Realizajce extends React.Component {
    render () {
        return (
            <div>
                <Navbar pageName={'Realizacje'} />
                Realizajce
                <Footer />
            </div>
        )
    }
}

export default Realizajce;