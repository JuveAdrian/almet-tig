import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Refabrykacja extends React.Component {
    render () {
        return (
            <div>
                <Navbar pageName={'Refabrykacja'} />
                Refabrykacja
                <Footer />
            </div>
        )
    }
}

export default Refabrykacja;