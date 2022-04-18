import React from "react";
import Card from "../Card/Card";
import Purchase_card from "./../purchase_card/purchase_card";
import "./style.css";

function Buy_product() {
  return (
    <div>
      <h1 className="headerss">Fill the form below to complete the Purchase</h1>
      <div className="sections">
        <div className="best">
          <div className="section_left">
            <Purchase_card />
          </div>
          <div className="photo">
            <Card />
          </div>
        </div>

        <div className="section_right">
          <div className="choosePlan">
            <div className="flexanu">
              <h2 className="data_header">Choose a Plan</h2>
              <form>
                <div className="raw">
                  Raw Agricultural gains
                  <input type="checkbox" />
                </div>
                <div className="raw">
                  Fresh Vegetable gains
                  <input type="checkbox" />
                </div>
              </form>
            </div>
          </div>
          <div className="basic_information">
            <h1 className="data_header">Your basic Information</h1>
            <div className="information">
              <form>
                <div className="flexbox">
                  <label className="pad">
                    <input
                      type="text"
                      className="information width "
                      placeholder="Name"
                    />
                  </label>
                  <label className="pad">
                    <input
                      type="text"
                      className="information width "
                      placeholder="Last Name "
                    />
                  </label>
                </div>
                <label className="pad">
                  <input
                    type="text"
                    className="information fifty "
                    placeholder="Email"
                  />
                </label>
                <label className="pad">
                  <input
                    type="text"
                    className="information fifty"
                    placeholder="Company Address (optional)"
                  />
                </label>
              </form>
            </div>
          </div>
          <div className="basic_information">
            <h1 className="data_header">Your Billing address</h1>
            <div className="information fifty">
              <form>
                <div className="grid">
                  <label className="pad">
                    <input
                      type="text"
                      className="information fifty width"
                      placeholder="Street"
                    />
                  </label>
                  <label className="pad">
                    <input
                      type="text"
                      className="information fifty width"
                      placeholder="City "
                    />
                  </label>
                  <label className="pad">
                    <input
                      type="text"
                      className="information fifty width"
                      placeholder="Country"
                    />
                  </label>
                  <label className="pad">
                    <input
                      type="text"
                      className="information fifty width"
                      placeholder="Pin Code"
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="basic_information">
            <h1 className="data_header">Your Payment Information</h1>
            <div className="information fifty">
              <form>
                <label className="pad">
                  <input
                    type="text"
                    className="information fifty width"
                    placeholder="Owner"
                  />
                </label>
                <div className="grid">
                  <label className="pad">
                    <input
                      type="text"
                      className="information fifty width"
                      placeholder="Country"
                    />
                  </label>
                  <label className="pad">
                    <input
                      type="text"
                      className="information fifty width"
                      placeholder="Pin Code"
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="basic_information">
            <div className="footer">
              By clicking Checkout Now you agree to the
              <span className="color"> terms of service</span> and{" "}
              <span className="color"> Privacy policy*</span>
            </div>
          </div>

          <button className="checkout">Checkout </button>
        </div>
      </div>
    </div>
  );
}

export default Buy_product;
