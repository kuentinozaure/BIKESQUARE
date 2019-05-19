import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
// import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Modal, Jumbotron } from 'react-bootstrap';

class Itemfreestyle extends Component{
    
    constructor(props){
        super(props);
    
        this.state = {
            libelleSplit : "",
        };
      }

    componentDidMount(){
        if (this.props.libelle.length >=100){
            this.setState({
                libelleSplit: this.props.libelle.substr(0, 100)+" ..."
            })
        }else{
            this.setState({
                libelleSplit: this.props.libelle
            })
        }
    }
    render() {
    return (
        <div class="col-3">
            <div className="card mt-3 tab-card">
                <div className="card-header tab-card-header text-dark">
                    {this.props.titre}
                </div>
                <div className="tab-content" >
                    <div className="tab-pane fade show active p-3" role="tabpanel" aria-labelledby="one-tab">
                        <p className="card-text">
                            <img className="img-fluid img-thumbnail" width="100%" src={this.props.image} />
                        </p>
                        <h5 className="card-title text-dark"></h5>
                        <p className="card-text  text-dark">{this.state.libelleSplit}</p>
                        <a  className="btn btn-primary">En savoir plus</a>              
                    </div>
                </div>
            </div>
        </div>
    );
    }
}
export default Itemfreestyle;