import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './navigation';
import Header from './header';
import Portfolio from './portfolio';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />
        <Navigation />
        <Header />
        <Portfolio />
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
