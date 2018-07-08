import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './navigation';
import Header from './header';
import Portfolio from './portfolio';
import About from './about';
import Resume from './resume';
import Footer from './footer';
import PortfolioModals from './portfoliomodals';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Navigation />
        <Header />
        <Portfolio />
        <About />
        <Resume />
        <Footer />
        <PortfolioModals />
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
