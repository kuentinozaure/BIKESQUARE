import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
// import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Modal, Jumbotron } from 'react-bootstrap';

class Itemaccueil extends Component{
    
    constructor(props){
        super(props);
    
        this.state = {
        };
      }
      
    render() {
    return (
    <div>
    <div class="row">
        <div class="col-12">
            <div className="card mt-3 tab-card">
                <div className="card-header tab-card-header text-dark">
                    NOUVEAU BMX RADIO Bike Dice Metalic Green 20
                </div>
                <div className="tab-content" >
                    <div className="tab-pane fade show active p-3" role="tabpanel" aria-labelledby="one-tab">
                        <p className="card-text">
                            <img className="rounded float-center img-fluid img-thumbnail" width="50%" src="https://media.cdnws.com/_i/18871/31389/2825/92/bmx-subrosa-sono-xl-satin-army-green-2019.jpeg" />
                        </p>
                        <h5 className="card-title text-dark"></h5>
                        <p className="card-text  text-dark">Le BMX RADIO Bike Dice 20 pouces et ...</p>
                        <a  className="btn btn-primary ">En savoir plus</a>              
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="col-12">
        <div className="card mt-3 tab-card">
            <div className="card-header tab-card-header text-dark">
                Le FISE A MTP
            </div>
            <div className="tab-content" >
                <div className="tab-pane fade show active p-3" role="tabpanel" aria-labelledby="one-tab">
                    <p className="card-text">
                        <img className="img-fluid img-thumbnail" width="100%" src="http://www.fise.fr/sites/default/files/acceuil.jpg" />
                    </p>
                    <h5 className="card-title text-dark"></h5>
                    <p className="card-text  text-dark">Quand : du 29 mai au 2 juin

Où : Rives du Lez, Montpellier, France

Sports :

- BMX Dirt
- BMX Street
- FISE World Series Skateboard Street
- FIG Parkour World Cup
- Scooter Freestyle
- Spine Ramp Competitions
- UCI BMX Freestyle Park World Cup
- UCI BMX Flatland World Cup
- Wakeboard
- WS Roller Freestyle World Cup
- WDSF Breaking

 

Etape 2 - Montpellier, France

Ensuite, c’est le retour à nos racines! Cette étape n'a pas besoin d'introduction, elle est LÉGENDAIRE. Ce festival est considéré comme le plus attendu parmi les athlètes et les fans d'action sports. Plus de 600 000 spectateurs en 2018, ce qui en fait le plus grand événement d'action sports de l'année. Célèbre pour non seulement l'incroyable niveau en sports mais aussi pour sa vie nocturne incroyable, c'est un arrêt que vous devez pas manquer!</p>
                    <a  className="btn btn-primary " href ="http://www.fise.fr/fr/fise-world-series-2019/fise-montpellier-2019" target="_blank" >En savoir plus</a>              
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    );
    }
}
export default Itemaccueil;