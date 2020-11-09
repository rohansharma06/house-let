import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header,DisplayProperty } from './';
import { fetchAllProperty,allPropertySuccess } from '../../Action/property';
import { data as propertyList } from './data';
import { isToken } from '../../helpers/utils';

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            city:'',
            bhk:'',
            rent:'',
            isfilterapply: false,
            data:[],
        }
    }
    componentDidMount(){
        this.props.dispatch(fetchAllProperty());
    }
    handleInputChange = (field, value) => {
        this.setState({
          [field]: value,
        });
    };
    applyFilter = (e) => {
        e.preventDefault();
        const { bhk,rent,city } = this.state;
        let property=[];
        if(rent){
            property = propertyList.filter(item => item.rent == rent);
        }else if(city){
            property = propertyList.filter(item => item.city == city);
        }else if(bhk){
            property = propertyList.filter(item => item.bhk == bhk);
        }
        else if(bhk && rent && city){
            property = propertyList.filter(item => item.bhk == bhk && item.city == city && item.rent == rent);
        }else if(bhk && rent){
            property = propertyList.filter(item => item.bhk == bhk && item.rent == rent);
        }else if(bhk && city){
            property = propertyList.filter(item => item.bhk == bhk && item.city == city);
        }else{
            property = propertyList.filter(item => item.rent == rent && item.city == city);
        }
        this.setState({
            isfilterapply:true,
            data: property
        })
    //    console.log('filter apply:',property);
    }
    removefilter = () => {
        this.setState({
            city:'',
            bhk:'',
            rent:'',
            isfilterapply: false,
            data:[],
        })
    }
    render() {
        const { user } = this.props;
        let { isfilterapply, data } = this.state;
        if(!isfilterapply){
            data = propertyList;
        }
        // console.log('yaee:',this.state.data);
        return (
            <div>
                <Header />
                <form className="form-inline filter-container">
                    <span className="filter-heading">Filters:</span>
                    <div className="form-group mx-sm-3">
                        <input type="text" className="form-control" id="inputPassword2" placeholder="City" onChange={(e) => this.handleInputChange('city',e.target.value)} value={this.state.city}/>
                    </div>
                    <div className="form-group mx-sm-3">
                        <input type="number" className="form-control" id="inputPassword2" placeholder="BHK" onChange={(e) => this.handleInputChange('bhk',e.target.value)} value={this.state.bhk} />
                    </div>
                    <div className="form-group mx-sm-3">
                        <input type="number" className="form-control" id="inputPassword2" placeholder="Rent" onChange={(e) => this.handleInputChange('rent',e.target.value)} value={this.state.rent} />
                    </div>
                    {isfilterapply ? (<i className="fa fa-close ml-3" style={{fontSize:"30px",color:"red"}} onClick={this.removefilter}></i>) : 
                     ( <button type="submit" className="btn btn-primary" onClick={this.applyFilter}>Apply</button>) 
                    }
                    
                    
                </form>
                {data.length <=0 ? (<div className="loader"></div>) : (
                    <div className="display-properties">
                        {data.map((data) => (
                            <DisplayProperty property={data} key={data._id} />
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

export default connect(mapStoreToProps)(Home);