import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Projektowanie extends React.Component {
    render () {
        return (
            <div>
                <Navbar pageName={'Projektownie'} />
                Projektowanie
                <Footer />
            </div>
        )
    }
}

export default Projektowanie;