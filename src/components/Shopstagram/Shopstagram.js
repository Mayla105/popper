import React from 'react';

import './Shopstagram.css';

class Shopstagram extends React.Component {
  render(){
    return (

            <div className="shopstagram-container">
                <div className="shopstagram-titles">
                    <h1>Shop  Instagram</h1>
                    <p> VIEW ALL POSTS </p>
                </div>

                <div className="shopstagram-pictures">
                  <div className="col1">
                  </div>
                  <div className="col2">
                    <div className="primerCuadrante"></div>
                    <div className="segundoCuadrante"></div>
                    <div className="tercerCuadrante"></div>
                    <div className="cuartoCuadrante"></div>
                  </div>
                </div>

            </div>
    );
  }

}

export default Shopstagram;
