import React from "react";
import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart,product];
    setCart(newCart);
    // console.log(cart);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-12 ">
            {products.map((product) => (
              <Product
                key={product.key}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))}
          </div>
          <div className="col-md-3 col-sm-12 ">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
