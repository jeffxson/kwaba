import React, { useState } from "react";
import { NavStyle } from "./style";

const FormA = () => {
  const [accommodation, setAccommodation] = useState("");
  const [rent, setRent] = useState("");
  const [monthly, setMonthly] = useState("");
  const [payment, setPayment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      rent: rent,
      monthly: monthly,
      accommodation: accommodation,
      payment: payment,
    };
    localStorage.setItem("rent", data.rent);
    localStorage.setItem("monthly", data.monthly);
    localStorage.setItem("payment", data.payment);
    localStorage.setItem("accommodation", data.accommodation);
    console.log({ data });
    window.setTimeout(() => {
      window.location.href = "/Fromb";
    }, 5000);
    console.log({ data });
  };

  return (
    <NavStyle>
      <h1 className="h1e">My Rent</h1>
      <div className="container">
        <div className="payment">
          <p>
            <h2>Payment Options</h2>
          </p>
          <p className="ccle">
            1 of 3 &nbsp; &nbsp; <div class="target"></div>
          </p>
        </div>
        <form className="formal" onSubmit={handleSubmit}>
          What's your accommodation status?
          <p id="id_work_days">
            <label>
              <input
                type="radio"
                name="accommodation"
                value="Looking to renew my rent"
                onChange={(e) => setAccommodation(e.target.value)}
              />
              <span>Looking to renew my rent</span>
            </label>
            <label>
              <input
                type="radio"
                name="accommodation"
                value="Want to pay for a new place"
                onChange={(e) => setAccommodation(e.target.value)}
              />
              <span>Want to pay for a new place</span>
            </label>
            <label>
              <input
                type="radio"
                name="accommodation"
                value="I'm still searching.."
                onChange={(e) => setAccommodation(e.target.value)}
              />
              <span>I'm still searching..</span>
            </label>
          </p>
          <div className="numbe">
            <span className="span">How much is your rent request amount?</span>
            <input
              type="number"
              name="rent"
              required
              className="input"
              placeholder="Amount"
              onChange={(e) => setRent(e.target.value)}
            />

            <span className="span">How much do you earn Monthly?</span>
            <input
              type="number"
              name="monthly"
              required
              className="input"
              placeholder="Amount"
              onChange={(e) => setMonthly(e.target.value)}
            />

            <span className="span">Choose a monthly payment plan?</span>
            <div>
              <select
                className="opt"
                name="payment"
                id="standard-select"
                onChange={(e) => setPayment(e.target.value)}
              >
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
                <option value=" 13  "> 13 Months</option>
                <option value=" 14  "> 14 Months</option>
                <option value=" 15  "> 15 Months</option>
                <option value=" 16  "> 16 Months</option>
                <option value=" 17  "> 17 Months</option>
              </select>
              <span class="focus"></span>
            </div>
          </div>
          <button type="submit">Next</button>
        </form>
      </div>
    </NavStyle>
  );
};

export default FormA;
