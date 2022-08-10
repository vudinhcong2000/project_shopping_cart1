import "./App.css";
import React, { useState } from "react";
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";
import Routes from "./components/front/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]); // add product to cart
    }
  };

  const handleRemoveProduct = (product) => {
    // remove product from cart
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handelCartClear = () => {
    setCartItems([]);
  };

  return (
    <div className="">
      <Router>
        <Header cartItems={cartItems} />
        <Routes
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handelCartClear={handelCartClear}
        />
      </Router>
    </div>
  );
}

export default App;
