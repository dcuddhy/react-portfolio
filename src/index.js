import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './navigation';
import Header from './header';
import Portfolio from './portfolio';
import About from './about';
import Resume from './resume';
import Footer from './footer';
import PortfolioModals from './portfoliomodals';
import ScrollTopButton from './scrolltopbutton';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Navigation />
        <Header />
        <About />
        <Portfolio />
        <Resume />
        <Footer />
        <PortfolioModals />
        <ScrollTopButton />
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
