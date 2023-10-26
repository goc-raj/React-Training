import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Contact from './Contact';
import NoPage from './NoPage';
import Layout2 from './Layout2';
import About from './About';
import Home2 from './Home2';

export default function ManageRouter() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Route>
            <Route path="/al" element={<Layout2 />}>
                <Route index element={<Home2 />} />
                <Route path="/al/about" element={<About />} />
            </Route>
            </Routes>
        </BrowserRouter>
    );
}
