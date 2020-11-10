import React, { Component } from 'react';
import { connect } from 'react-redux';
import { acceptApplication } from '../../Action/property';

class propertyCard extends Component {
    constructor(props){
        super(props)
    }
    submitApplicationStatus = (id,status) => {
        // console.log(id,status);
        this.props.dispatch(acceptApplication(id,status));
    }
    render() {
        const {user} = this.props;
        const {name,phone} = user.buyer;
        // console.log(user._id)
        return (
            <div className="card" style={{width: "18rem",margin:"5px 5px 5px 5px",display:"inline-block"}}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{phone}</h6>
                    <p className="card-text">House look Great to me can we schedulae a call to some price negoitiation.</p>
                    {user.status === 0 && 
                        <div>
                            <button className="btn btn-success m-2" onClick={(e) => this.submitApplicationStatus(user._id,1)}>Accept</button>
                            <button className="btn btn-danger m-2" onClick={(e) => this.submitApplicationStatus(user._id,2)}>Decline</button>
                        </div>
                    }
                    {user.status === 1 && 
                        <div>
                            <button className="btn btn-success m-2" disabled>Accepted</button>
                        </div>
                    }
                    {user.status === 2 && 
                        <div>
                            <button className="btn btn-danger m-2" disabled>Decline</button>
                        </div>
                    }
                    
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      isadd: state.isadd,
    };
  }
export default connect(mapStateToProps)(propertyCard);