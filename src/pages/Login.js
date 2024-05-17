import React, { useReducer, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSignup, onLogin, onViewProfile } from "../store/actions";
import { AddressComponent } from "../components/Address-comp";
import { Profile } from "./Profile";
import { useAppDispatch, useAppSelector } from "../store/hooks";

//load Shopping profile
const Login = () => {
  const { user, profile } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const { id, token } = user;

  const { address, whishlist, orders } = profile;

  const [isSignup, setSignup] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (token) {
      dispatch(onViewProfile());
    }
  }, [token]);

  const userSignup = () => {
    //call Signup
  };

  const userLogin = () => {
    dispatch(onLogin({ email, password }));
  };

  const loginForm = () => {
    return (
      <div
        className="row bg-secondary"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30rem",
        }}
      >
        <div className="col col-sm-5 col-md-4 col-lg-3 col-xl-2">
          <form>
            <div className="from-group" controlId="formBasicEmail">
              <label>Email address</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="from-group" controlId="formBasicPassword">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="row m-2 float-right">
              <button
                className="btn btn-primary mr-2 "
                onClick={() => userLogin()}
                type="button"
              >
                Login
              </button>
              <button className="btn btn-primary" type="button">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <h1> Signup </h1>
      </div>
    );
  };

  if (token) {
    return <Profile />;
  } else {
    return (
      <div className="container-fluid">
        {isSignup ? signUpForm() : loginForm()}
      </div>
    );
  }
};

export { Login };
