import React from "react";
import "./style.css";

function Purchase_card() {
  return (
    <div>
      <div className="card">
        <h2 className="headings">Purchase Details</h2>

        <div>
          <h2>Agricultural Products</h2>
          <form className="form">
            <h2> Quantity</h2>

            <input type="number" className="number" />
          </form>
          <div className="details">
            <h2> Price</h2>
            <div className="price">Rs.10,000</div>
          </div>
          <div className=" no-border">
            <h2>Total</h2>
            <div className="price">Rs.10,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase_card;
