import React, { Component } from 'react';


class ScrollTopButton extends Component {
    render() {
        return (
            <div class="scroll-top page-scroll visible-xs visible-sm">
                <a class="btn btn-primary" href="#page-top">
                    <i class="fa fa-chevron-up"></i>
                </a>
            </div>
        );
    }
}

export default ScrollTopButton;
