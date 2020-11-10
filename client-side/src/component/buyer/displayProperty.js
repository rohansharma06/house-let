import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isUserToken } from '../../helpers/utils';
import { userapplyrent } from '../../Action/user';


class allProperties extends Component {
    constructor(props) {
        super(props);
    }
    handleapply= (id) =>{
        this.props.dispatch(userapplyrent(id));
        
    }
    render() {
        const {applyRent} =this.props.user;
        const {name,city,rent,bhk,description,phone,_id,rentApply} = this.props.property;
        // console.log('rent:',rentApply[0]);
        let isapplied=false;
        rentApply.map(data=>{
            console.log('rent:',data.buyer._id);
            if(data.buyer._id == localStorage.getItem('userId')){
                isapplied = true;
            }
        })
        return (
            <div className="card" style={{width: "18rem",margin:"5px 5px 5px 5px",display:"inline-block"}} id={_id}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyWmTKjbzc5iD-b9RrkzL7dtGQf_pOxghr4Q&usqp=CAU" className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{name} || <i>{city}</i> </h5>
                    {/* <p className="card-text" style={{lineHeight:"3px"}}> */}
                    <p className="card-text">
                        <span className="bg-blue">Size/BHK</span>:{bhk}, <span className="bg-blue">Rent</span>:{rent} p/m
                    </p>
                    <p className="card-text"> <span className="bg-blue">Contact No</span>: {phone}</p>
                    <p className="card-description" style={{fontSize:'13px'}}>{description}</p>

                    {isUserToken()  && !isapplied && <a  className="btn btn-primary" onClick={() => this.handleapply({_id})}>Apply</a> }
                    {isUserToken() && isapplied && <button className="btn btn-success" onClick={() => this.handleapply({_id})} disabled>Applied</button>}
                </div>
                
            </div>
                
            
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}
export default connect(mapStateToProps)(allProperties);