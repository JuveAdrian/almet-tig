import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Home extends React.Component {
    render () {
        return (
            <div>
                <Navbar pageName={'Strona Główna'} />
                Home
                <Footer />
            </div>
        )
    }
}

export default Home;