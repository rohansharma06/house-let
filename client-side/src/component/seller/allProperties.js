import React, { Component } from 'react';

class allProperties extends Component {
    render() {
        return (
           
            <div className="card" style={{width: "18rem",margin:"5px 5px 5px 5px",display:"inline-block"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyWmTKjbzc5iD-b9RrkzL7dtGQf_pOxghr4Q&usqp=CAU" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
                
            
        );
    }
}

export default allProperties;