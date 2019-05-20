import React, { Component } from 'react';
import Footer from './Footer.js';
import ItemPage from './ItemPage.js';
import Bikesquare from './images/bikesquare.jpg'


class Page extends Component{

  constructor(props){
    super(props);

    this.state = {
      TabValue : "ACCUEIL",
    };

    this.SetItem = this.SetItem.bind(this);
  }


  SetItem (value){
    this.setState({
        TabValue : value,
    })
  }



  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active col-xs-3">
                  {<a className="navbar-brand"  onClick={this.SetItem.bind(this,"ACCUEIL")}><img className="img-fluid img-thumbnail" width="12%" src={Bikesquare}/><span className="sr-only"></span></a>}
                </li>

                <li className="nav-item active col-xs-3">
                  <a className="nav-link"  onClick={() => this.SetItem("FREESTYLE")}>FREESTYLE</a> {/*onClick={e=>this.displayItem("freestyle")} onMouseEnter={()=>this.handleShowFreestyle()} onMouseLeave={()=>this.handleCloseFreestyle()} */}
                </li>

                <li className="nav-item active col-xs-3">
                  <a className="nav-link"  onClick={() => this.SetItem("DIRT")}>DIRT</a> 
                </li>

                <li className="nav-item active">
                  <a className="nav-link"  onClick={() => this.SetItem("RACE")}>RACE</a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link"  onClick={() => this.SetItem("PIECE")}>PIECES</a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link"  onClick={() => this.SetItem("REPARATION")}>REPARATION</a>
                </li>
                          
              </ul>
            </div>
          </nav>
        </header>
        <body className="text-light bg-dark">
            <ItemPage 
                onglet={this.state.TabValue}
            />
        </body>
        
        <Footer/>
      </div>
    );
  }

}
export default Page;
