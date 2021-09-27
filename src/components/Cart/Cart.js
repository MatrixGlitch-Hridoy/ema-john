import React from "react";

const Cart = (props) => {
    const {cart} = props;
    // let total = 0;
    // for(const product of cart){
    //     total = total + product.price
    // }
    const totalReducer = (previous,product) => previous + product.price;
    const total = cart.reduce(totalReducer,0);
    const shipping = total > 0 ? 15 : 0;
    const totalBeforeTax = total + shipping;
    const tax = (total + shipping) * .10;
    const grandTotal = total + shipping + tax;
  return (
    <>
      <h3 className="text-center">Order Summary:</h3>
      <h4 className="text-center">Item Ordered:{cart.length}</h4>
      <table className="table mt-5">
        <tbody>
          <tr>
            <td className="fw-bolder">Items</td>
            <td className="fw-bolder">:</td>
            <td className="fw-bolder text-danger">${total.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="fw-bolder">Shipping & Handling</td>
            <td className="fw-bolder">:</td>
            <td className="fw-bolder text-danger">${shipping}</td>
          </tr>
          <tr>
            <td className="fw-bolder">Total Before Tax</td>
            <td className="fw-bolder">:</td>
            <td className="fw-bolder text-danger">${totalBeforeTax}</td>
          </tr>
          <tr>
            <td class="fw-bolder">Estimated Tax</td>
            <td class="fw-bolder">:</td>
            <td class="fw-bolder text-danger">${tax}</td>
          </tr>
          <tr>
            <td class="fw-bolder fs-5">Total Price</td>
            <td class="fw-bolder">:</td>
            <td class="fw-bolder text-danger fs-5">${grandTotal}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cart;
