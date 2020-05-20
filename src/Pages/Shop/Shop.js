import React from "react";
import { Link } from "react-router-dom";

import "./Shop.css";
import products from "products.js";
import Navbar from "../../components/Navbar/Navbar";

class Shop extends React.Component {
  render() {
    return (
      <div className="shop-container">
        <Navbar />

        <div className="shop-titles">
          <h1>TIME FOR SHOPPING</h1>
          <p> ALL OUR PRODUCTS </p>
        </div>

        <ul className="productos">
          {products.map((product) => (
            <Link to={"/products/" + product.id}>
              <li key={product.id} className="producto">
                <div className="producto-imagen">
                  <img src={product.pic} alt="" />
                </div>
                <div className="producto-texto">
                  <h4> {product.name} </h4>
                  <p>
                    {" "}
                    {product.category} | {product.brand}{" "}
                  </p>
                  <p className="precio"> Price: ${product.price} </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Shop;
