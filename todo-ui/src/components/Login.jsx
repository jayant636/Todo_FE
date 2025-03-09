import React, { useState } from "react";
import {
  loginRest,
  saveLoggedInUser,
  storeToken,
} from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const loginInitData = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(loginInitData);
  const navigate = useNavigate();

  function onChangeHandler(e) {
    e.preventDefault();
    setLoginData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function submitHandler(e) {
    e.preventDefault();
    await loginRest(loginData)
      .then((response) => {
        console.log(response);

        // const token =
        //   "Basic " + window.btoa(loginData.email + ":" + loginData.password);

        const token = "Bearer " + response.data.accessToken;

        const role = response.data.role;

        storeToken(token);

        saveLoggedInUser(loginData.email, role);
        navigate("/todos");

        window.location.reload(false);
      })
      .catch((error) => console.error(error));
    console.log(loginData);
  }

  return (
    <div>
      <div className="container">
        <br /> <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 ">
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Login Form</h2>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="row mb-3">
                    <label className="col-md-3 control-label">Email</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        placeholder="Enter email"
                        name="email"
                        className="form-control"
                        value={loginData.email}
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-md-3 control-label">Password</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        placeholder="Enter Password"
                        name="password"
                        className="form-control"
                        value={loginData.password}
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <button className="btn btn-primary">Submit</button>
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

export default Login;
