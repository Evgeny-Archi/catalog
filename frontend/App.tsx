import React, { FC } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './Routing';

const App: FC = () => {
    return (
        <>
            <Header />
            <Routing />
            <Footer />
        </>
    );
};

export default App;
