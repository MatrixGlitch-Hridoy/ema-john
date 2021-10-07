import React from 'react';

const ReviewItem = (props) => {
    const {name,price,quantity,key} = props.product;
    return (
        <div>
           <div className="card mb-3 mt-2" style={{maxWidth:"1040px"}}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body p-4">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Price: ${price}</p>
              <p className="card-text">Quantity: {quantity}</p>
              
              <button onClick = {()=>props.handleRemove(key)} className="btn btn-warning"> Remove Item</button>
            </div>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default ReviewItem;