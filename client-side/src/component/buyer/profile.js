import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Header,DisplayApplyProperty} from './';
import { data as propertyList } from './data';
import { isUserToken } from '../../helpers/utils';
import { Redirect } from 'react-router-dom';


class profile extends Component {
    render() {
        // console.log('profile:',this.props.user);
        if(!isUserToken()){
            return <Redirect to='/user' />;
        }
        
        return (
            <div>
                <Header />
                <h1 className="text-white p-2" style={{marginLeft:"30vw"}}>Applied Houses</h1>
                {propertyList.length <=0 ? (<div className="loader"></div>) : (
                    <div className="display-properties">
                        {propertyList.map((data) => (
                            <DisplayApplyProperty property={data} key={data._id} />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

function mapStoreToProps(state) {
    return {
      user: state.user,
    };
  }
export default connect(mapStoreToProps)(profile);