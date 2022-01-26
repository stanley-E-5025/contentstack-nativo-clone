import React from "react";
import { ReactComponent as Logo } from "../assets/icon.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="form-container">
        <div className="footer-form-container">
          <div className="form-title-container  ">
            <div className="form-title">Book A Discovery Call</div>
            <div className="form-description">
              Get inspiration and tech solutions that spark <br /> business
              growth.
            </div>
          </div>

          <div className="form-inputs-container  ">
            <div className="form-input-container  ">
              <div className="form-input-container-title"> My name is </div>
              <input
                className="form-input-style"
                placeholder="Your name here"
              />

              <div className="form-input-t-hide">Please reach out to me at</div>
            </div>

            <div className="form-input-container  ">
              <div className=" form-input-container-title form-input-t-show">
                Please reach out to me at
              </div>

              <input
                className="form-input-style"
                placeholder="Your email here"
              />

              <div className="form-input-t-hide"> I'm interested in</div>
              <input
                className="form-input-style form-input-t-hide"
                placeholder="Your email here"
              />
            </div>

            <div className="form-input-container form-input-t-show ">
              <div className="form-input-container-title">
                {" "}
                I'm interested in{" "}
              </div>
              <input
                className="form-input-style"
                placeholder="Your name here"
              />
            </div>

            <div className="footer-submit-btn-container  ">
              <button className="form-submit-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer-container-bottom-container ">
        <div className="footer-options-container ">
          <div className="footer-options">Privacy Policy </div>
          <div className="footer-options"> Services </div>
          <div className="footer-options">About </div>
          <div className="footer-options"> Careers</div>
        </div>
        <div className="footer-logo-container ">
          <Logo />
        </div>

        <div className="footer-socials-container ">
          <div className="footer-social-icons-container ">
            <i className="fab fa-instagram  footer-icon"></i>
            <i className="fab fa-facebook-square footer-icon"></i>
            <i className="fab fa-linkedin footer-icon"></i>
          </div>
          <div className="footer-reserved">
            Nativo 2022 © All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}
