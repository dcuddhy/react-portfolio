import React, { Component } from 'react';
import './index.css';
import Navigation from '../components/navigation';
import Header from '../components/header';
import Portfolio from '../components/portfolio';
import About from '../components/about';
import Resume from '../components/resume';
import Footer from '../components/footer';
import PortfolioModals from '../components/portfoliomodals';
import ScrollTopButton from '../components/scrolltopbutton';
// import registerServiceWorker from '../components/registerServiceWorker';


class Index extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Header />
                <About />
                <Portfolio />
                <Resume />
                <Footer />
                <PortfolioModals />
                <ScrollTopButton />
            </div>
        );
    }
}

export default Index;
