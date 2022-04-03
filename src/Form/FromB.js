import React from "react";
import { NavStyle } from "./style";
import { useState, useEffect } from "react";

const FormA = () => {
  const [payment, setPayment] = useState("");
  const [rent, setRent] = useState("");

  useEffect(() => {
    const payment = JSON.parse(localStorage.getItem("payment"));
    const rent = JSON.parse(localStorage.getItem("rent"));
    setPayment(payment);
    setRent(rent);
  }, []);
  const handleSubmit = (e) => {
    window.setTimeout(() => {
      window.location.href = "https://www.kwaba.africa/";
    });
  };

  return (
    <NavStyle>
      <h1 className="h1e">My Rent</h1>
      <div className="container">
        <p>
          <h2>Payment request amount</h2>
        </p>
        <form className="formal" onSubmit={handleSubmit}>
          <div className="newb">
            <span className="span">How much is your rent request amount?</span>
            <input
              type="number"
              required
              className="input"
              placeholder="Amount"
            />
          </div>
          <span className="span"> Monthly payment plan?</span>
          <select className="opt" id="standard-select" required>
            <option> </option>
            <option value="1  "> 1 Months</option>
            <option value="2  "> 2 Months</option>
            <option value="3  "> 3 Months</option>
            <option value="4  "> 4 Months</option>
            <option value=" 5  "> 5 Months</option>
            <option value=" 6  "> 6 Months</option>
            <option value=" 7  "> 7 Months</option>
            <option value=" 8  "> 8 Months</option>
            <option value=" 9  "> 9 Months</option>
            <option value=" 10  "> 10 Months</option>
            <option value=" 11  "> 11 Months</option>
            <option value=" 12  "> 12 Months</option>
          </select>
          <span class="focus"></span>
          Payment Option
          <ul>
            <li>
              Pre-approved amount &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; <b> ₦ {rent} </b>
            </li>
            <li>
              Montly payment: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <b>₦ {Math.round(rent / payment + rent * 0.02)} </b>
            </li>
            <li>
              Tenor &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
              <b> {payment}&nbsp; Month</b>
            </li>
          </ul>
          <button className="blue">Accept</button>
        </form>
      </div>
    </NavStyle>
  );
};

export default FormA;
