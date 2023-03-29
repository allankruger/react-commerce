import React from "react";
import { FooterContainer } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h2>About</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>

        <div className="item">
          <h2>Contact</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo"></span>

          <span className="copyright">
            &#169; Copyright 2023. All rights reserved.
          </span>
        </div>

        <div className="right">
          <img src="images/payment.png" alt="" />
        </div>
      </div>
    </FooterContainer>
  );
};
