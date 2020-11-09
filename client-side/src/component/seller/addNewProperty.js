import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addproperty, addPropertyFailed } from '../../Action/property';


class addNewProperty extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            city:'',
            rent:'',
            phone:'',
            bhk:'',
            description:'',
        }
    }
    handleInputChange = (field, value) => {
        this.setState({
          [field]: value,
        });
    };
    clearInputState = () => {
        this.setState({
            name:'',
            city:'',
            rent:'',
            phone:'',
            bhk:'',
            description:'',
        });
        this.props.dispatch(addPropertyFailed(''));
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        const {name, city, rent, phone, bhk, description } = this.state;
        
       if (name && city && rent && phone && bhk && description) {
            this.props.dispatch(addproperty(name, city, rent, phone, bhk, description));
        }else{
            this.props.dispatch(addPropertyFailed('Enter valid field!'));
        }
    }
    render() {
        const { message, inProgress } = this.props.isadd;
        // console.log('data:',this.props)
        return (
            <div style={{marginTop:"15px"}}>
                <div className="add-property">
                    <button type="button" className="btn btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">Add Property</button>
                </div>

                {/* -- Modal */}
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add House for Rent</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.clearInputState}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        {message && <div className="alert error-dailog">{message}</div>}
                            <form>
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="Name*"
                                        required
                                        onChange={(e) => this.handleInputChange('name', e.target.value)}
                                        value={this.state.name}
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="City*"
                                        required
                                        onChange={(e) => this.handleInputChange('city', e.target.value)}
                                        value={this.state.city}
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="number"
                                        placeholder="Contact No*"
                                        required
                                        onChange={(e) => this.handleInputChange('phone', e.target.value)}
                                        value={this.state.phone}
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="number"
                                        placeholder="Rent*"
                                        required
                                        onChange={(e) => this.handleInputChange('rent', e.target.value)}
                                        value={this.state.rent}
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="number"
                                        placeholder="BHK*"
                                        required
                                        onChange={(e) => this.handleInputChange('bhk', e.target.value)}
                                        value={this.state.bhk}
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="Description*"
                                        required
                                        onChange={(e) => this.handleInputChange('description', e.target.value)}
                                        value={this.state.description}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.onFormSubmit}>Submit</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({isadd}) => ({
    isadd,
});
export default connect(mapStateToProps)(addNewProperty);