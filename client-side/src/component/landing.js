import React, { Component } from 'react';

class landing extends Component {
    render() {
        return (
            <div className="landing-container">
                <div className="description">
                    <span className="heading">House Let</span>
                    <span className="heading-two">One Stop for buy/sell your House</span>
                    <div className="button">
                        <a href='/admin/login' type='button' className="btn btn-primary m-2 mt-5 btn-lg">Seller</a>
                        <a type='button' className="btn btn-secondary m-2 mt-5 btn-lg">Buyer</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default landing;