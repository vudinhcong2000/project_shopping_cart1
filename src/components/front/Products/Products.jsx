import React from "react";
import "./Products.css";

const Products = ({ productItems, handleAddProduct }) => {
  // console.log(productItems.map((item) => item.name));
  return (
    <div className="products">
      {productItems.map((item) => (
        <div className="card" key={item.id}>
          <div>
            <img className="product-image" src={item.image} alt={item.name} />
          </div>
          <div>
            <h3 className="product-name">{item.name}</h3>
          </div>
          <div className="product-price">{item.price}</div>
          <div>
            <button
              className="product-add-button"
              onClick={() => handleAddProduct(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
