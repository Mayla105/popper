import React from 'react';

import './ProductPage.css';
import Navbar from '../../components/Navbar/Navbar';
import data from '../../data.js';

class ProductPage extends React.Component {


  render(){

    let product = data.products.find(element => element.id === this.props.match.params.id);

    return (

      <div className="productpage-container">
        <Navbar />
        <div className="productpage-contenido">
            <div className="productpage-foto"></div>

            <div className="productpage-info">
              <h2>{product.name}</h2>
              <p>{product.brand}</p>
              <p className="size-title">{product.category + ' sizes:'}</p>
              <div className="sizes">
                <div> S </div>
                <div> M </div>
                <div> L </div>
                <div> XL </div>
                <div> XXL </div>
              </div>
              <p className="description"> DESCRIPTION: </p>
              {product.description}
              <p className="price">PRICE: ${product.price}</p>
              <div className="quantity">
                <p> Quantity: </p>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
              <button className="cart"> Add to Cart </button>
            </div>
        </div>
      </div>

    );
  }

}

export default ProductPage;
