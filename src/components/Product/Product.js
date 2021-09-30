import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from "react-rating";
const Product = (props) => {
//   console.log(props.product);
  const { name, img, seller, price, stock, star } = props.product;
  return (
    <>
      <div className="card mb-3 mt-2" style={{maxWidth:"1040px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body p-4">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Price: ${price}</p>
              <p className="card-text">Rating: <Rating 
                  initialRating={star}
                  emptySymbol="far fa-star text-warning"
                  fullSymbol="fas fa-star text-warning"
                  readonly
              /></p>
              <p className="card-text">By: {seller}</p>
              <p className="card-text">
                <small className="text-muted">only {stock} left in stock-order soon</small>
              </p>
              <button onClick = {()=>props.handleAddToCart(props.product)} className="btn btn-warning"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
