import React from "react";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { clearTheCart } from "../utilities/fakeDb";

const Shipping = () => {
    const [products] = useProducts();
    const [cart,setCart] = useCart(products);
    const history = useHistory();
    const {user} = useAuth();
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
          <div className="col-sm-12">
            <h1 className="text-center mt-5">Check Out</h1>
            <div className="row justify-content-center mt-3">
              <div className="col-sm-6">
                <form>
                  <label for="inputEmail4" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="name"
                    value={user.displayName}
                    readOnly
                  />
                  <label for="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    value={user.email}
                    readOnly
                  />
                  <label for="inputEmail4" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    required
                  />
                  <label for="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    required
                  />
                  <div className="d-grid">
                    <button onClick={handlePlaceOrder} className="btn btn-warning mt-3">
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
