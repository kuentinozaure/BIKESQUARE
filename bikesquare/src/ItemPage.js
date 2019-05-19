import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
// import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Modal, Jumbotron, Alert } from 'react-bootstrap';
import Mainfreestyle from './freestyle/MainFreestyle.js';
import Accueil from './accueil/Accueil.js';
import Race from  './race/MainRace.js';

class ItemPage extends Component{
    
    constructor(props){
        super(props);
    
        this.state = {
            value : this.props.onglet,
        };
      }

      /*
        Quand le composant recois de nouveau props
      */
      componentWillReceiveProps(){
          console.log("props receive")
          console.log(this.props)
          this.setState({
              value:this.props.onglet
          })
      }

      /*
        Quand mon composant est actualisé faire un check sur le champ qu on souhaite pour voir si il est pas 
        egale au props d'avant sinon boucle infini
      */
      componentDidUpdate(){
        console.log("update")
        console.log(this.props)

        if (this.state.value !=this.props.onglet){
            this.setState({
                value:this.props.onglet
            })
        }
    }

    /*
        Quand le composant est monté
    */
      componentDidMount(){
      }

    display(){
        switch (this.state.value) {
            case 'ACCUEIL':
                //return("accueil")
                return(<Accueil/>)
              break;
            case 'FREESTYLE':
                //return("freestyle")
                return(<div><Mainfreestyle /></div>)
            case 'DIRT':
                    return("dirt")
              break;
            case 'RACE':
                    return(<div><Race/></div>)
              break;
            case 'REPARATION':
                    return("repa")
              break;
          }
    }

    render() {
    return (
        <div>
            {this.display()}
        </div>
    );
    }
}
export default ItemPage;