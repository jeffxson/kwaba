import React from "react";
import { NavStyle } from "./style";

const FormA = () => {
  const happy = console.log("happy");

  return (
    <NavStyle>
      <h1 className="h1e">My Rent</h1>
      <div className="container">
        <p>
          <h2>Payment Options</h2>
        </p>
        <div className="newb">
          <span className="span">How much is your rent request amount?</span>
          <input
            type="number"
            required
            className="input"
            placeholder="Amount"
          />
        </div>
        <span className="span"> monthly plan?</span>
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
        Payment Option
        <ul>
          <li>
            Pre-approved amount &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; <b>₦200,000 </b>
          </li>
          <li>
            Montly payment: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; <b>₦105,000 </b>
          </li>
          <li>
            Tenor &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; <b> 2 Month</b>
          </li>
        </ul>
        <button onClick={happy} className="blue">
          Accept
        </button>
      </div>
    </NavStyle>
  );
};

export default FormA;
