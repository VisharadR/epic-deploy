import React, { Component } from "react";
import "../footer/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer1">
          <div className="part1">
            <div className="logos">
              <img
                src="https://dev.edufu.in/assets/img/Twitter.png"
                alt=""
                className="logo"
              />
              <img
                src="https://dev.edufu.in/assets/img/Facebook.png"
                alt=""
                className="logo"
              />
              <img
                src="https://dev.edufu.in/assets/img/instagram.png"
                alt=""
                className="logo"
              />
              <img
                src="https://dev.edufu.in/assets/img/linkdin.png"
                alt=""
                className="logo"
              />
            </div>
          </div>
          <div className="part2">
            <div className="heading">Services</div>
            <div className="detail">Students</div>
            <div className="detail">Institute</div>
            <div className="detail">Company</div>
          </div>
          <div className="part3">
            <div className="heading">Documentation</div>
            <div className="detail">Terms and Conditions</div>
            <div className="detail">Privacy Policy</div>
            <div className="detail">Disclaimer</div>
          </div>
          <div className="part4">
            <div className="heading">CONTACT US</div>
            <div className="detail">FarmEasy Technologies Pvt. Ltd.</div>
            <div className="detail">www.FarmEasy.in</div>
            <div className="detail">Admin@FarmEasy.in</div>
            <div className="detail">Vit Bhopal University, Madhya Pradesh</div>
          </div>
        </div>
        <div className="footer2">
          <div className="terms">Terms and Conditions </div>
          <div className="copyrights">
            2018 -FarmEasy technologies Pvt. Ltd. | All rights reserved
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
