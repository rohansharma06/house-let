import React, { Component } from 'react';

class allProperties extends Component {
    render() {
        return (
           
            <div className="card" style={{width: "18rem",margin:"5px 5px 5px 5px",display:"inline-block"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyWmTKjbzc5iD-b9RrkzL7dtGQf_pOxghr4Q&usqp=CAU" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Aman Rai || <i>Delhi</i> </h5>
                    <p className="card-text" style={{lineHeight:"2px"}}>
                        <p>Size:1Bhk</p>
                        <p>Rent:20,000 p/m</p>
                        <p>Contact No: 7676767678</p>
                    </p>
                    <p className="card-text">Fully furnish flat on the with beautiful area.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
                
            
        );
    }
}

export default allProperties;