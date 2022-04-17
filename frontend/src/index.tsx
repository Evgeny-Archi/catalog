import React, { FC } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Brand from './pages/Brand/Brand';
import Model from './pages/Model/Model';

const App: FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path=":brand" element={<Brand />} />
                <Route path=":brands/:model" element={<Model />} />
            </Routes>
            <Footer />
        </Router>
    );
};

ReactDom.render(<App />, document.getElementById('root'));
