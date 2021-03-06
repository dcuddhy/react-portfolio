import React, { Component } from 'react';


class Navigation extends Component {
    // why isn't this rendering?
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#page-top">Drew Cuddhy</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden">
                                <a href="#page-top"> </a>
                            </li>
                            <li className="page-scroll">
                                <a href="#about">About</a>
                            </li>
                            <li className="page-scroll">
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li className="page-scroll">
                                <a href="#resume">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
