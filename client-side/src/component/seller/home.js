import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isToken } from '../../helpers/utils';
import { Header,AddProperty,Allproperties } from './index';
import { fetchProperty } from '../../Action/property';

class home extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
       this.props.dispatch(fetchProperty());
    }
    // componentDidUpdate(prevProps){
    //     console.log(prevProps.isadd,';',this.props.isadd);
    // }

    render() {
        let { isLoggedin } = this.props.auth;
        const { allproperty } = this.props.isadd;
        // console.log('length:',allproperty);
        isLoggedin = (isLoggedin || isToken());
        if(!isLoggedin){
            return <Redirect to='/house-let/admin/login' />;
        }
        return (
            <div>
                <Header />
                <AddProperty />
                { !allproperty ? ( <div className="display-properties"> <h1>No Data</h1> </div>) : (
                    <div className="display-properties">
                    {allproperty.map((data) => (
                        <Allproperties property={data} key={data._id} />
                    ))}
                </div>
                )}
                {allproperty.length==0 &&
                    <div className="display-properties">
                        <h1>Add properties!</h1>
                    </div>
                }
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      auth: state.auth,
      isadd: state.isadd,
    };
  }
export default connect(mapStateToProps)(home);