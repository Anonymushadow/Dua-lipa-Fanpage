import { Footer, Navbar } from '@components/layout/Components.layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '@pages/Home/Home';
import { About } from '@pages/About/About';
import { Disclaimer } from '@pages/Disclaimer/Disclaimer';
import { Contact } from '@pages/Contact/Contact';
import { ImageCreditsPage } from '@pages/ImageCreditsPage/ImageCreditsPage';

export const RouterComponent = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/disclaimer" element={<Disclaimer />}/>
                <Route path="/credits" element={<ImageCreditsPage />}/>
                <Route path="/*" element={<h1>404</h1>}/>
            </Routes>
            <Footer />
        </Router>
    );
};