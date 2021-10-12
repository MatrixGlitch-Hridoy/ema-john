import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center mt-5">Sign Up</h1>
          <div className="row justify-content-center mt-3">
            <div className="col-sm-4">
              <form action="">
                <div className="mb-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Re-Enter password"
                  />
                </div>
                <button type="submit" className="btn btn-warning">Register</button>
              </form>
              <p>Already Member? <Link to="/login">Login</Link> </p>
              <div>==============Or=============</div>
              <button className="btn btn-success">Google Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
