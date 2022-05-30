import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Firms from './pages/Firms';
import Models from './pages/Models';
import Marks from './pages/Marks';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Firms />} />
                    <Route path=":firm" element={<Models />} />
                    <Route path=":firm/:model" element={<Marks />} />
                </Route>
                <Route path="*" element={<p>Custom not found - 404</p>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
