import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import Itemfreestyle from './ItemFreestyle.js'
// import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Modal, Jumbotron } from 'react-bootstrap';

class Mainfreestyle extends Component{
    
    constructor(props){
        super(props);
    
        this.state = {
            valeurSearchBar : "",
            itemFreestyle : []
        };
      }

      handleSearch(e){
        this.setState({
            valeurSearchBar:e.target.value,
        })
        console.log(this.state.valeurSearchBar)
      }
    
    componentDidMount(){
    }

    componentDidUpdate(){
        console.log(this.state.valeurSearchBar)
        
    }

    render() {
    return (
    <div>
        <br></br>
        <div className="row">
            <div className="col-2">
            </div>
            <div className="col-8">
                <input className="form-control mr-sm-2" type="search" placeholder="Rechercher" onChange={e => this.handleSearch(e)} aria-label="Search"/>
            </div>
            <div className="col-2">
            </div>
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>NOS BMX FREESTYLE</h2>
                        <Itemfreestyle/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    }
}
export default Mainfreestyle;