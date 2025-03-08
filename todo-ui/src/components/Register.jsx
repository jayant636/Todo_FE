import React, { useState } from "react";
import { regsiterApiCall } from "../services/AuthService";

const Register = () => {
  const initData = {
    name: "",
    userName: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(initData);

  function onChangeHandler(e) {
    e.preventDefault();
    setData((prevdata) => {
      return {
        ...prevdata,
        [e.target.name]: e.target.value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(data);
    regsiterApiCall(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">User Registration Form</h2>
            </div>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">UserName</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      placeholder="Enter userName"
                      name="userName"
                      className="form-control"
                      value={data.userName}
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3 control-label">Email</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      placeholder="Enter email"
                      name="email"
                      className="form-control"
                      value={data.email}
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
                      value={data.password}
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
  );
};

export default Register;
