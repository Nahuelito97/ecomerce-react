import React from "react";
import { PRODUCTS } from "../../products.js";
import { Product } from "./product.js";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Nahuel Wagner Tech</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product}/>
        ))}
      </div>
    </div>
  );
};
