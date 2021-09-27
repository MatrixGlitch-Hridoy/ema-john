import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
//   console.log(props.product);
  const { name, img, seller, price, stock } = props.product;
  return (
    <div>
      <div className="card mb-3 mt-2" style={{maxWidth:"1040px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body p-4">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Price: ${price}</p>
              <p className="card-text">Review: </p>
              <p className="card-text">By: {seller}</p>
              <p className="card-text">
                <small className="text-muted">only {stock} left in stock-order soon</small>
              </p>
              <button className="btn btn-warning"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
