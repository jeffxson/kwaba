import React from "react";
import { NavStyle } from "./style";

const FormA = () => {
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
        <form className="formal">
          What's your accommodation status?
          <p id="id_work_days">
            <label>
              <input type="checkbox" name="work_days" value="1" />
              <span>Looking to renew my rent</span>
            </label>
            <label>
              <input type="checkbox" name="work_days" value="2" />
              <span>Want to pay for a new place</span>
            </label>
            <label>
              <input type="checkbox" name="work_days" value="3" />
              <span>I'm still searching..</span>
            </label>
          </p>
          <div className="numbe">
            <span className="span">How much is your rent request amount?</span>
            <input
              type="number"
              required
              className="input"
              placeholder="Amount"
            />

            <span className="span">How much do you earn Monthly?</span>
            <input
              type="number"
              required
              className="input"
              placeholder="Amount"
            />

            <span className="span">Choose a monthly payment plan?</span>
            <div>
              <select className="opt" id="standard-select">
                <option value="Option 1"> 1 Month</option>
                <option value="Option 2"> 2 Month</option>
                <option value="Option 3"> 3 Month</option>
                <option value="Option 4"> 4 Month</option>
                <option value="Option 5"> 5 Month</option>
                <option value="Option 5"> 6 Month</option>
                <option value="Option 5"> 7 Month</option>
                <option value="Option 5"> 8 Month</option>
                <option value="Option 5"> 9 Month</option>
                <option value="Option 5"> 10 Month</option>
                <option value="Option 5"> 11 Month</option>
                <option value="Option 5"> 12 Month</option>
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
