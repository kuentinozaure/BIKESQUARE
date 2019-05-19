import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import Itemaccueil from './ItemAccueil.js';
import axios from 'axios';
// import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Modal, Jumbotron } from 'react-bootstrap';

class Accueil extends Component{
    
    constructor(props){
        super(props);
    
        this.state = {
            news : [],
        };
    }

    componentDidMount(){
        axios.get("http://localhost:8000/news/")
        .then(res=>{
            let tabAccueil = []
            let i = 0;
            for (i = 0; i < res.data.length; i++) {
                if(res.data[i].isVisible == true){
                    tabAccueil.push(res.data[i]);
                }                
            }
            this.setState({
                news:tabAccueil,
            })
        }
    )
    }

    display(){
        let items = []

        this.state.news.map((neww, index) =>{
            items.push(
                <Itemaccueil nom={neww.nom}
                             libelle = {neww.libelle}
                             lien = {neww.lien}
                             image = {neww.image}
                             titre = {neww.titre}
                />
            )
        })

        return items
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
                    <div className="col-12">
                        <div className="row">
                            {this.display()}
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    );
    }
}
export default Accueil;