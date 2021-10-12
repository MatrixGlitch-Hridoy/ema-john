import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
    const {user, signInUsingGoogle} = useFirebase();
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center mt-5">Sign In</h1>
          <div className="row justify-content-center mt-3">
            <div className="col-sm-4">
              <form action="">
                <div className="mb-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <button type="submit" className="btn btn-warning">
                  Login
                </button>
              </form>
              <p>
                New to ema-john? <Link to="/register">Create Account</Link>{" "}
              </p>
              <div>==============Or=============</div>
              <button className="btn btn-success" onClick={signInUsingGoogle}>Google Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
