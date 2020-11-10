import React, { Component } from 'react';

class allProperties extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const {} = this.props.data;
        console.log('alldata:',this.props.property.rentApply);
        const {name,city,rent,bhk,description,phone,_id} = this.props.property;
        return (
            <div className="card" style={{width: "18rem",margin:"5px 5px 5px 5px",display:"inline-block"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyWmTKjbzc5iD-b9RrkzL7dtGQf_pOxghr4Q&usqp=CAU" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name} || <i>{city}</i> </h5>
                    {/* <p className="card-text" style={{lineHeight:"3px"}}> */}
                    <p className="card-text">
                        <span className="bg-blue">Size/BHK</span>:{bhk}, <span className="bg-blue">Rent</span>:{rent} p/m
                    </p>
                    <p className="card-text"> <span className="bg-blue">Contact No</span>: {phone}</p>
                    <p className="card-description" style={{fontSize:'13px'}}>{description}</p>
                    
                    
                    <a href={"/house-let/admin/profile:"+_id} className="btn btn-primary">Vew Applications</a>
                </div>
            </div>
                
            
        );
    }
}

export default allProperties;