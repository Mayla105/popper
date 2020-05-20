import React from 'react';
import {Link} from 'react-router-dom';

import './Shop.css';
import data from '../../data';
import Navbar from '../../components/Navbar/Navbar';
import ProductPage from '../../Pages/ProductPage/ProductPage';
import foto1 from '../../images/cuadrante1.jpg';
import foto2 from '../../images/cuadrante2.jpg';
import foto3 from '../../images/cuadrante3.jpg';
import foto4 from '../../images/cuadrante4.jpg';
import foto5 from '../../images/cuadrante5.jpg';
import foto6 from '../../images/cuadrante6.jpg';

class Shop extends React.Component {

  render(){
    return (


          <div className="shop-container">

                <Navbar />

                <div className="shop-titles">
                    <h1>TIME FOR SHOPPING</h1>
                    <p> ALL OUR PRODUCTS </p>
                </div>

                <ul className="productos">

                  {
                      data.products.map( product =>
                        <Link to={'/products/' + product.id} >
                            <li className="producto">
                                <div className="producto-imagen">
                                  <img src={product.pic} alt=""/>
                                </div>
                                <div className="producto-texto">
                                  <h4> {product.name} </h4>
                                  <p> {product.category} | {product.brand} </p>
                                  <p className="precio"> Price: ${product.price} </p>
                                </div>
                            </li>
                        </Link>
                      )
                  }

                </ul>

          </div>


    );
  }

}

export default Shop;
