import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import Itempiece from './ItemPiece.js';
// import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Modal, Jumbotron } from 'react-bootstrap';
import axios from 'axios';

class Mainpiece extends Component{
    
    constructor(props){
        super(props);
    
        this.state = {
            itemPiece : [],
            pieces : [],
            typeVelo : [],
            typePiece : [],
        };
      }
    
    componentDidMount(){
        axios.get("http://localhost:8000/piece/")
            .then(res=>{
                let tabPiece = [];
                let tabTypePiece = [];
                let tabTypeVelo = [];
                let i = 0;

                for (i = 0; i < res.data.length; i++) {
                    if (tabTypePiece.includes(res.data[i].typePiece) === false){
                        tabTypePiece.push(res.data[i].typePiece);
                    }
                    if (tabTypeVelo.includes(res.data[i].typeVelo) === false){
                        tabTypeVelo.push(res.data[i].typeVelo);
                    }
                    tabPiece.push(res.data[i]);               
                }
                this.setState({
                    pieces:tabPiece,
                    typeVelo:tabTypeVelo,
                    typePiece : tabTypePiece,
                })
            }
        )
    }

    generateItem(value){
        let items = [];
        let i = 0 ;
        let nbBmx;

        // this.state.typeVelo.map((typeVelo,index) =>{
        //         items.push(<div className="container">
        //         <div className="row">
        //         <div className="col-0">
        //         </div>
        //             <div className="col-10">
        //                 <b><h3>{typeVelo}</h3></b>
        //             </div>
        //             <div className="col-2">
        //         </div>
        //         </div>
        //     </div>)
                this.state.typePiece.map((typePiece,index) =>{
                    items.push(
                        <div className="container">
                            <div className="row">
                            <div className="col-1">
                                </div>
                                <div className="col-9">
                                    <h4>{typePiece}</h4>
                                </div>
                                <div className="col-2">
                                </div>
                            </div>
                        </div>)
                    this.state.pieces.map((bmx, index) =>{
                        if(typePiece == bmx.typePiece ){
                            items.push(
                                <Itempiece titre={bmx.titre}
                                            libelle = {bmx.libelle}
                                            image = {bmx.image}
                                            prix = {bmx.prix}
                                            qte = {bmx.quantite}
                                            type = {bmx.type}
                                />
                            )
                        }
                    })
                })//Fin type piece
            // })//fin type velo
        return items;
    }

    componentDidUpdate(){
        console.log(this.state.valeurSearchBar)
        
    }

    render() {
    return (
    <div>
        <br></br>
        <div className="row">
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                            <div className="row">
                                {this.generateItem()}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    }
}
export default Mainpiece;