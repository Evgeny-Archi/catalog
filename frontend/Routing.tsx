import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Firms from './pages/Firms';
import Models from './pages/Models';
import Marks from './pages/Marks';

const Routing: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Firms />} />
                <Route path=":firm" element={<Models />} />
                <Route path=":firm/:model" element={<Marks />} />
                <Route path="*" element={<p>Not found - 404</p>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
