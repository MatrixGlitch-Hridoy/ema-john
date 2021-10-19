import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import {addToDb, getStoredCart } from "../utilities/fakeDb";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSearchProducts(data);
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchProducts(matchedProduct);
  };
  return (
    <>
      <div className="bg-dark pt-2 pb-4">
        <form className="d-flex mx-auto w-75">
          <input
            className="form-control"
            type="text"
            placeholder="Search Products"
            aria-label="Search"
            onChange={handleSearch}
          />
        </form>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-12">
            {searchProducts.length ? (
              searchProducts.map((product) => (
                <Product
                  key={product.key}
                  product={product}
                  handleAddToCart={handleAddToCart}
                ></Product>
              ))
            ) : (
              <h1 className="text-center text-danger">No Result Found</h1>
            )}
          </div>
          <div className="col-md-3 col-sm-12">
            <Cart cart={cart}>
              <Link to="/order-review">
              <div className="d-grid">
                <button className="btn btn-warning">Review Order</button>
              </div>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
