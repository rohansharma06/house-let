import React, { Component } from 'react';

class header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand nav-heading ml-5" href="#">
                    <i className="fas fa-home icon pr-2"></i> House Let
                </a>
            </nav>
        );
    }
}

export default header;