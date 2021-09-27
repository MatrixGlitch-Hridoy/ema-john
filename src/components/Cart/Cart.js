import React from "react";

const Cart = () => {
  return (
    <div>
      <h3 className="text-center">Order Summary:</h3>
      <h4 className="text-center">Item Ordered:</h4>
      <table className="table mt-5">
        <tbody>
          <tr>
            <td className="fw-bolder">Items</td>
            <td className="fw-bolder">:</td>
            <td className="fw-bolder text-danger">$1299</td>
          </tr>
          <tr>
            <td className="fw-bolder">Shipping & Handling</td>
            <td className="fw-bolder">:</td>
            <td className="fw-bolder text-danger">$1299</td>
          </tr>
          <tr>
            <td className="fw-bolder">Total Before Tax</td>
            <td className="fw-bolder">:</td>
            <td className="fw-bolder text-danger">$1299</td>
          </tr>
          <tr>
            <td class="fw-bolder">Estimated Tax</td>
            <td class="fw-bolder">:</td>
            <td class="fw-bolder text-danger">$1299</td>
          </tr>
          <tr>
            <td class="fw-bolder fs-5">Total Price</td>
            <td class="fw-bolder">:</td>
            <td class="fw-bolder text-danger fs-5">$1299</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
