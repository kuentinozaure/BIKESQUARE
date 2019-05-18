import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import Itemaccueil from './ItemAccueil.js'
// import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Modal, Jumbotron } from 'react-bootstrap';

class Accueil extends Component{
    
    constructor(props){
        super(props);
    
        this.state = {
        };
      }
      
    render() {
    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Derniere nouveautés BMX</h2>
                    </div>
                    <br></br>
                    <Itemaccueil/>
                </div>
            </div>
        </div>
    );
    }
}
export default Accueil;