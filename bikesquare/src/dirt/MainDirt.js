import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import Itemdirt from './ItemDirt.js';
import axios from 'axios';
// import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Modal, Jumbotron } from 'react-bootstrap';

class Maindirt extends Component{
    
    constructor(props){
        super(props);
    
        this.state = {
            valeurSearchBar : "",
            itemFreestyle : [],
            bmxs : [],
        };
      }

      handleSearch(e){
        this.setState({
            valeurSearchBar:e.target.value,
        })
        console.log(this.state.valeurSearchBar)
      }
    
    componentDidMount(){
        axios.get("http://localhost:8000/bmx/")
            .then(res=>{
                let tabBmx = []
                let i = 0;
                for (i = 0; i < res.data.length; i++) {
                    if(res.data[i].type == "DIRT"){
                        tabBmx.push(res.data[i]);
                    }                
                }
                this.setState({
                    bmxs:tabBmx,
                })
            }
        )
    }

    generateItem(value){
        let items = [];
        let i = 0 ;
        let nbBmx;

        if(value === "nothing in searchbar"){
            this.state.bmxs.map((bmx, index) =>{
                items.push(
                    <Itemdirt titre={bmx.titre}
                                   libelle = {bmx.libelle}
                                   image = {bmx.image}
                                   prix = {bmx.prix}
                                   type = {bmx.type}
                    />
                )
            })
        }else{
            let titre ="";
            let libelle ="";
            let type = "";
            nbBmx = 0;

            this.state.bmxs.map((bmx, index) =>{
                titre = bmx.titre;
                libelle = bmx.libelle;
                type = bmx.type;


                if(titre.includes(this.state.valeurSearchBar)
                || libelle.includes(this.state.valeurSearchBar)
                || type.includes(this.state.valeurSearchBar)
                ){
                    nbBmx+=1
                    items.push(
                    <Itemdirt titre={bmx.titre}
                                   libelle = {bmx.libelle}
                                   image = {bmx.image}
                                   prix = {bmx.prix}
                                   type = {bmx.type}
                    />)
                }
            }) 
            if(nbBmx === 0) {
                items.push(
                    <div className="alert alert-dark" role="alert">
                        <h1>Aucun Dirt trouvé</h1>
                    </div>
                )

            }
        }
        return items;
    }

    display(){
        let content;

        if (this.state.valeurSearchBar === ""){
            content = this.generateItem("nothing in searchbar")
        }else{
            content = this.generateItem("thing in searchbar")
        }
        return content
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
                        <h2>NOS DIRTS</h2>
                        <div className="row">
                            {this.display()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    }
}
export default Maindirt;