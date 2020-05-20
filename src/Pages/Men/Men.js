import React from 'react';

import './Men.css';
import {Link} from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Shopstagram from '../../components/Shopstagram/Shopstagram';
import Community from '../../components/Community/Community';

class Men extends React.Component {
  render(){
    return (
      <div className="contenedor-total">
            <div className="men-intro">
              <Navbar />

              <div className="men-jumbotron">
                  <div className="div-interno">

                      <div className="descripcion">

                        <h1>spend&SAVE</h1>

                        <div className="ofertas">

                          <div className="oferta-n">
                            <p className="precio">$50 OFF</p>
                            <p className="chico">When you spend $150</p>
                          </div>

                          <div className="oferta-n">
                            <p className="precio">$100 OFF</p>
                            <p className="chico">When you spend $250</p>
                          </div>

                          <div className="oferta-n">
                            <p className="precio">$150 OFF</p>
                            <p className="chico">When you spend $350</p>
                          </div>

                        </div>

                        <div className="letrero">
                          <h2>HURRY! LIMITED TIME ONLY!</h2>
                        </div>

                        <Link to='/shop'>
                          <p className="shopnow">SHOP NOW</p>
                        </Link>

                      </div>
                  </div>
              </div>

            </div>

            <Shopstagram />
            <Community />

      </div>
    );
  }

}

export default Men;
