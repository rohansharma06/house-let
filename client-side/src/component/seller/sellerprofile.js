import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header,PropertyCard } from './index';
import { fetchPropertyDetails} from '../../Action/property';

class sellerprofile extends Component {
    componentDidMount(){
        this.props.dispatch(fetchPropertyDetails());
    }
    render() {
        const {rentApply} = this.props.property;
        // console.log(this.props.property.rentApply);
        return (
            <div>
                <Header />
                
                <h1 className="mx-5 mt-2 text-blue">Rent Application</h1>
                {rentApply ? (
                    <div style={{margin:"10px 10px 10px 10px"}}>
                        {rentApply.map((data)=>(
                            <PropertyCard user={data} key={data._id} />
                        ))}
                    </div>
                ): (
                    <div style={{margin:"10px 10px 10px 10px"}}>
                       <h1>No Application</h1>
                    </div>
                )}
                
            </div>
        );
    }
}

function mapStoreToProps(state) {
    return {
      property : state.isadd.selectedProperty,
    };
  }
export default connect(mapStoreToProps)(sellerprofile);