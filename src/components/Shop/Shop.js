import React from 'react';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        {
                            products.map(product => <Product key={product.key} product={product}></Product>)
                        }   
                    </div>
                    <div className="col-sm-3">
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;