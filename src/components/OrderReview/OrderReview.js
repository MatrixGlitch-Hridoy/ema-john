import React from "react";
import { useHistory } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { clearTheCart, removeFromDb } from "../utilities/fakeDb";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart,setCart] = useCart(products);
  const history = useHistory()
  const handleRemove = (key) => {
        const newCart = cart.filter(product=> product.key !== key);
        setCart(newCart);
        removeFromDb(key);
  }

  const handlePlaceOrder = () =>{
    if(cart.length){
      history.push('/place-order');
      setCart([]);
      clearTheCart();
    }else{
      history.push('/shop');
    }
      
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-12">
            {cart.map((product) => (
              <ReviewItem key={product.key} product={product} handleRemove={handleRemove}></ReviewItem>
            ))}
          </div>
          <div className="col-md-3 col-sm-12">
            <Cart cart={cart}>
              <div className="d-grid">
                <button onClick={handlePlaceOrder} className="btn btn-warning">Place Order</button>
              </div>
            </Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
