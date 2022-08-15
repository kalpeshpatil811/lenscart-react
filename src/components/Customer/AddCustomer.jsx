import { AxiosError } from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import CustomerService from "../../services/CustomerService";



const AddCustomer = () => {
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const [customerNameError, setCustomerNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [numberError, setNumberError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      customerName: customerName,
      email: email,
      number: number,
      password: password,
    };
    console.log(newCustomer);

    CustomerService.addCustomer(newCustomer).then((res) => {
      console.log(res);
      console.log("customer added successfully");
      navigate("/login");
    })
      .catch((err) => {
        console.log(err.response.data);
        setCustomerNameError(err.response.data.customerName);
        setEmailError(err.response.data.email);
        setNumberError(err.response.data.number);
        setPasswordError(err.response.data.password)

        console.log("Error adding customer");
      })

  };

  return (


    <div align="center">
      <div className="card" style={{ width: "50rem" }}>
        <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
          <h5 className="card-title">Add </h5>
          <hr />
          {/* <!-- Customer Name input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="customerName">
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              className="form-control"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <p style={{color:"red"}}>{customerNameError}</p>
          </div>

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p style={{color:"red"}}>{emailError}</p>
          </div>

          {/* <!-- Number input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="number">
              Mobile Number
            </label>
            <input
              type="text"
              id="number"
              className="form-control"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <p style={{color:"red"}}>{numberError}</p>

          </div>

          {/* <!-- password input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="text"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{color:"red"}}>{passwordError}</p>

          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Submit
                </button>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <button type="submit" className="btn btn-danger btn-block mb-4">
                  Cancel
                </button>
              </div>
            </div>
          </div>



        </form>
      </div>
    </div>
  );







}
export default AddCustomer;